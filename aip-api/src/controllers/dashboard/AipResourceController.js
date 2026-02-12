import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { getFilePath } from '../../utils/filePath.js';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { AipResourcesModel } from '../../modals/AipResourceModal.js';
import { singleFileRemover } from '../../utils/fileRemover.js';
import path from 'path';

export const addAipResources = async (req, res, next) => {
	try {
		const {
			title,
			tags,
			category,
			domain,
			typeOfContent,
			description,
			linkOrFile,
			fileLink,
			date,
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
		if (category == 'gallery' && (!galleryImage || !galleryVideo)) {
			return res.status(422).json({
				success: true,
				message: 'Gallery images and video is mandatory',
			});
		}
		if (!domain) {
			return res.status(422).json({
				success: true,
				message: 'Domain is mandatory',
			});
		}
		if (!typeOfContent) {
			return res.status(422).json({
				success: true,
				message: 'Type of content is mandatory',
			});
		}
		const formatedName = capitalizeFirstLetter(title);

		const existingName = await AipResourcesModel.findOne({ name: formatedName, category: category });

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Resource already exists',
			});
		}
		let image;
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
		if (category == 'Gallery') {
			req.files?.forEach((file) => {
				if (file.fieldname.startsWith('galleryImage')) {
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
		}

		const resourceData = {
			title: formatedName,
			searchKeywords: tags,
			category: category,
			domain: domain,
			typeOfContent: typeOfContent,
			description: description,
			date: date,
			image: image,
			linkOrFile: linkOrFile,
			createdBy: userId,
			updatedBy: userId,
			deletedAt: null,
		};

		if (linkOrFile === 'pdf') {
			resourceData.file = filePaths[0];
		} else if (linkOrFile === 'link') {
			resourceData.fileLink = fileLink;
		}

		if (category === 'Gallery') {
			resourceData.galleryVideos = galleryVideo;
			resourceData.galleryImages = galleryImage;
		}

		await AipResourcesModel.create(resourceData);

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

		const resource = await AipResourcesModel.findOne({ _id: resourceId });

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

		const resource = await AipResourcesModel.aggregate([
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

		const { userId } = req.user;

		const {
			title,
			tags,
			category,
			linkOrFile,
			fileLink,
			domain,
			typeOfContent,
			description,
			date,
			galleryImage,
			galleryVideo,
		} = req.body;

		if (!title || !category) {
			return res.status(422).json({
				success: true,
				message: 'Title and Category is mandatory',
			});
		}
		if (category == 'gallery' && (!galleryImage || !galleryVideo)) {
			return res.status(422).json({
				success: true,
				message: 'Gallery images and video is mandatory',
			});
		}
		if (!domain) {
			return res.status(422).json({
				success: true,
				message: 'Domain is mandatory',
			});
		}
		if (!typeOfContent) {
			return res.status(422).json({
				success: true,
				message: 'Type of content is mandatory',
			});
		}

		const aipResource = await AipResourcesModel.findOne({ _id: resourceId, deletedAt: null });

		const formatedName = capitalizeFirstLetter(title);

		const existingWork = await AipResourcesModel.findOne({
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

		let filePath = req.body?.file;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(aipResource.image);
					image = getFilePath(file);
				} else if (file.fieldname === 'file[]') {
					singleFileRemover(aipResource.file);
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

		if (category == 'Gallery') {
			req.files?.forEach((file) => {
				if (file.fieldname.startsWith('galleryImage')) {
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
		}

		const resourceData = {
			title: formatedName,
			searchKeywords: tags,
			category: category,
			domain: domain,
			typeOfContent: typeOfContent,
			linkOrFile: linkOrFile,
			description: description,
			date: date,
			image: image,
			updatedBy: userId,
			deletedAt: null,
		};

		const unsetData = {};

		if (linkOrFile === 'link') {
			resourceData.fileLink = fileLink;
		} else if (linkOrFile === 'pdf') {
			resourceData.file = filePath;
		}

		if (linkOrFile === 'link') {
			unsetData.file = '';
		} else if (linkOrFile === 'pdf') {
			unsetData.fileLink = '';
		}

		if (category === 'Gallery') {
			resourceData.galleryVideos = galleryVideo;
			resourceData.galleryImages = galleryImage;
		} else {
			(unsetData.galleryVideos = ''), (unsetData.galleryImages = '');
		}

		await AipResourcesModel.updateOne({ _id: resourceId }, { $set: resourceData, $unset: unsetData });

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
		const updateStatus = await AipResourcesModel.updateOne(
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
export const resourceFeaturedUpdate = async (req, res, next) => {
	try {
		const updateStatus = await AipResourcesModel.updateOne(
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
			message: 'Featured updated.',
			data: { updateStatus: updateStatus },
		});
	} catch (error) {
		return next(serverError(error));
	}
};
