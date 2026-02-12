import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { getFilePath } from '../../utils/filePath.js';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { singleFileRemover } from '../../utils/fileRemover.js';
import path from 'path';
import { CuratedResourcesModel } from '../../modals/AipCuratedModal.js';

export const addCuratedResources = async (req, res, next) => {
	try {
		const {
			title,
			expert,
			tags,
			category,
			domain,
			organisation,
			typeOfContent,
			description,
			date,

			links,

			fileLink,
			videoLink,
			linkOrFile,
			linkOrVideo,
			galleryImage,
			galleryVideo,
		} = req.body;

		const { userId } = req.user;

		if (!title || !category) {
			return res.status(422).json({
				success: true,
				message: 'Title and Category is mandatory',
			});
		}
		if (!domain) {
			return res.status(422).json({
				success: true,
				message: 'Domain is mandatory',
			});
		}
		if (category == 'experts' && (!galleryImage || !galleryVideo)) {
			return res.status(422).json({
				success: true,
				message: 'Gallery images and video is mandatory',
			});
		}
		if (category == 'experts' && (!links || !linkOrVideo)) {
			return res.status(422).json({
				success: true,
				message: 'Links are mandatory',
			});
		}
		if (!organisation) {
			return res.status(422).json({
				success: true,
				message: 'Organisation is mandatory',
			});
		}
		const formatedName = capitalizeFirstLetter(title);

		const existingName = await CuratedResourcesModel.findOne({ name: formatedName, category: category });

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Resource already exists',
			});
		}
		let image;
		let video;
		const filePaths = [];

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			} else if (file.fieldname === 'file[]') {
				const filePath = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				filePaths.push(filePath);
			}
		});

		if (linkOrFile === 'pdf' && !filePaths[0]) {
			return res.status(422).json({
				success: true,
				message: 'Pdf is mandatory',
			});
		}
		if (linkOrFile === 'link' && !fileLink) {
			return res.status(422).json({
				success: true,
				message: 'Link is mandatory',
			});
		}
		if (category == 'experts') {
			req.files?.forEach((file) => {
				if (file.fieldname === 'video') {
					video = getFilePath(file);
				} else if (file.fieldname.startsWith('galleryImage')) {
					const galleryLength = req.body.galleryImage.length;
					for (let index = 0; index < galleryLength; index++) {
						if (file.fieldname.startsWith(`galleryImage[${index}]`)) {
							galleryImage.at(index).images = galleryImage.at(index).image ?? '';
							const currentImage = galleryImage.at(index).image;
							singleFileRemover(currentImage);
							galleryImage.at(index).image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
						}
					}
				} else if (file.fieldname.startsWith('galleryVideo')) {
					const galleryLength = req.body.galleryImage.length;
					for (let index = 0; index < galleryLength; index++) {
						if (file.fieldname.startsWith(`galleryVideo[${index}]`)) {
							galleryVideo.at(index).video = galleryVideo.at(index).video ?? '';
							const currentVideo = galleryVideo.at(index).video;
							singleFileRemover(currentVideo);
							galleryVideo.at(index).video = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
						}
					}
				}
			});

			if (linkOrVideo === 'Video' && !video) {
				return res.status(422).json({
					success: true,
					message: 'Video is mandatory',
				});
			}
			if (linkOrVideo === 'Link' && !videoLink) {
				return res.status(422).json({
					success: true,
					message: 'Link is mandatory',
				});
			}
		}
		const resourceData = {
			title: formatedName,
			searchKeywords: tags,
			category: category,
			domain: domain,
			organisation: organisation,
			description: description,
			linkOrFile: linkOrFile,
			date: date,
			image: image,
			createdBy: userId,
			updatedBy: userId,
			deletedAt: null,
		};

		if (linkOrFile === 'pdf') {
			resourceData.file = filePaths[0];
		} else if (linkOrFile === 'link') {
			resourceData.fileLink = fileLink;
		}

		if (category === 'experts') {
			if (linkOrVideo === 'Video') {
				resourceData.video = video;
			} else if (linkOrVideo === 'Link') {
				resourceData.videLink = videoLink;
			}

			resourceData.galleryVideos = galleryVideo;
			resourceData.linkOrVideo = linkOrVideo;
			resourceData.galleryImages = galleryImage;
			resourceData.video = video;
			resourceData.links = links;
			resourceData.expert = expert;
		} else {
			resourceData.typeOfContent = typeOfContent;
		}

		await CuratedResourcesModel.create(resourceData);

		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const deleteResource = async (req, res, next) => {
	try {
		const resourceId = req.params.id;

		const resource = await CuratedResourcesModel.findOne({ _id: resourceId });

		if (!resource) {
			return res.status(404).json({
				success: false,
				message: 'Resource not found',
			});
		}

		resource.deletedAt = dayjs();
		await resource.save();

		return res.status(200).json({
			success: true,
			message: 'Resource data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getResourceById = async (req, res, next) => {
	try {
		const resourceId = req.params.id;

		const resource = await CuratedResourcesModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(resourceId),
					deletedAt: null,
				},
			},
		]);

		if (resource.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Resource data fetched',
				data: { resource: resource.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Resource not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateResource = async (req, res, next) => {
	try {
		const resourceId = req.params.id;

		const resource = await CuratedResourcesModel.findOne({ _id: resourceId, deletedAt: null });

		const {
			title,
			expert,
			tags,
			category,
			domain,
			organisation,
			typeOfContent,
			description,
			date,
			link,
			links,
			fileLink,
			videoLink,
			linkOrFile,
			linkOrVideo,
			galleryImage,
			galleryVideo,
		} = req.body;

		const { userId } = req.user;
		if (!title || !category) {
			return res.status(422).json({
				success: true,
				message: 'Title and Category is mandatory',
			});
		}
		if (!domain) {
			return res.status(422).json({
				success: true,
				message: 'Domain is mandatory',
			});
		}
		if (!organisation) {
			return res.status(422).json({
				success: true,
				message: 'Organisation is mandatory',
			});
		}
		if (category == 'experts' && (!galleryImage || !galleryVideo)) {
			return res.status(422).json({
				success: true,
				message: 'Gallery images and video is mandatory',
			});
		}
		if (category == 'experts' && (!links || !linkOrVideo)) {
			return res.status(422).json({
				success: true,
				message: 'Links are mandatory',
			});
		}

		const formatedName = capitalizeFirstLetter(title);

		const existingWork = await CuratedResourcesModel.findOne({
			title: formatedName,
			category: category,
			_id: { $ne: resourceId },
			deletedAt: null,
		});

		if (existingWork) {
			return res.status(409).json({
				success: false,
				message: 'Resource already exists',
			});
		}

		let image = req.body?.image;
		let video = req.body?.video;

		let filePath = req.body?.file;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'image') {
					image = getFilePath(file);
				} else if (file.fieldname === 'file[]') {
					filePath = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				}
			});
		}
		if (linkOrFile === 'pdf' && !filePath) {
			return res.status(422).json({
				success: true,
				message: 'Pdf is mandatory',
			});
		}
		if (linkOrFile === 'link' && !fileLink) {
			return res.status(422).json({
				success: true,
				message: 'Link is mandatory',
			});
		}

		if (category == 'experts') {
			req.files?.forEach((file) => {
				if (file.fieldname === 'video') {
					video = getFilePath(file);
				} else if (file.fieldname.startsWith('galleryImage')) {
					const galleryLength = req.body.galleryImage.length;
					for (let index = 0; index < galleryLength; index++) {
						if (file.fieldname.startsWith(`galleryImage[${index}]`)) {
							galleryImage.at(index).images = galleryImage.at(index).image ?? '';
							const currentImage = galleryImage.at(index).image;
							singleFileRemover(currentImage);
							galleryImage.at(index).image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
						}
					}
				} else if (file.fieldname.startsWith('galleryVideo')) {
					const galleryLength = req.body.galleryImage.length;
					for (let index = 0; index < galleryLength; index++) {
						if (file.fieldname.startsWith(`galleryVideo[${index}]`)) {
							galleryVideo.at(index).video = galleryVideo.at(index).video ?? '';
							const currentVideo = galleryVideo.at(index).video;
							singleFileRemover(currentVideo);
							galleryVideo.at(index).video = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
						}
					}
				}
			});

			if (linkOrVideo === 'Video' && !video) {
				return res.status(422).json({
					success: true,
					message: 'Video is mandatory',
				});
			}
			if (linkOrVideo === 'Link' && !videoLink) {
				return res.status(422).json({
					success: true,
					message: 'Link is mandatory',
				});
			}
		}

		if (linkOrFile === 'pdf' && !filePath) {
			return res.status(422).json({ success: true, message: 'Pdf is mandatory' });
		}

		if (linkOrFile === 'link' && !fileLink) {
			return res.status(422).json({ success: true, message: 'Link is mandatory' });
		}

		if (category === 'experts') {
			if (linkOrVideo === 'Video' && !video) {
				return res.status(422).json({ success: true, message: 'Video is mandatory' });
			}
			if (linkOrVideo === 'Link' && !videoLink) {
				return res.status(422).json({ success: true, message: 'Link is mandatory' });
			}
		}

		resource.title = formatedName;
		resource.searchKeywords = tags;
		resource.category = category;
		resource.domain = domain;
		resource.organisation = organisation;
		resource.description = description;
		resource.linkOrFile = linkOrFile;
		resource.date = date;
		resource.link = link;
		resource.image = image;
		resource.updatedBy = userId;
		resource.file = linkOrFile === 'pdf' ? filePath : '';
		resource.fileLink = linkOrFile === 'link' ? fileLink : '';
		resource.typeOfContent = category != 'experts' ? typeOfContent : '';
		resource.linkOrVideo = category == 'experts' ? linkOrVideo : '';
		resource.video = category === 'experts' && linkOrVideo === 'Video' ? video : '';
		resource.videoLink = category === 'experts' && linkOrVideo === 'Link' ? videoLink : '';
		resource.galleryVideos = category === 'experts' ? galleryVideo : null;
		resource.galleryImages = category === 'experts' ? galleryImage : null;
		resource.links = category === 'experts' ? links : null;
		resource.expert = category === 'experts' ? expert : null;

		await resource.save();

		return res.status(200).json({
			success: true,
			message: 'Work data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const resourceStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await CuratedResourcesModel.updateOne(
			{ _id: new mongoose.Types.ObjectId(req.params.id) },
			[
				{
					$set: {
						isActive: {
							$not: '$isActive',
						},
					},
				},
			],
			{
				new: true,
			},
		);

		return res.status(200).json({
			success: true,
			message: 'Status updated.',
			data: { updateStatus: updateStatus },
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const resourceFeatureUpdate = async (req, res, next) => {
	try {
		const updateStatus = await CuratedResourcesModel.updateOne(
			{ _id: new mongoose.Types.ObjectId(req.params.id) },
			[
				{
					$set: {
						isFeatured: {
							$not: '$isFeatured',
						},
					},
				},
			],
			{
				new: true,
			},
		);

		return res.status(200).json({
			success: true,
			message: 'Status updated.',
			data: { updateStatus: updateStatus },
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getExpertCuratedResources = async (req, res, next) => {
	try {
		const resource = await CuratedResourcesModel.aggregate([
			{
				$match: {
					category: 'experts',
					deletedAt: null,
				},
			},
			{
				$project: {
					_id: 1,
					title: 1,
					expert: 1,
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Resource data fetched',
			data: { resource: resource },
		});
	} catch (error) {
		return next(serverError(error));
	}
};
