import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { singleFileRemover } from '../../utils/fileRemover.js';
import { BlogsModel } from '../../modals/BlogsModel.js';
import { GalleryModel } from '../../modals/GalleryModal.js';
import path from 'path';
import { getFilePath } from '../../utils/filePath.js';

export const addGallery = async (req, res, next) => {
	try {
		const { title, category, description, tags, galleryImage, galleryVideo, domain, typeOfContent, date } = req.body;

		const { userId } = req.user;

		const formatedName = capitalizeFirstLetter(title);

		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			}
		});

		req.files?.forEach((file) => {
			if (file.fieldname.startsWith('galleryImage')) {
				const galleryLength = req.body.galleryImage.length;
				for (let index = 0; index < galleryLength; index++) {
					if (file.fieldname.startsWith(`galleryImage[${index}]`)) {
						galleryImage.at(index).image = galleryImage.at(index).image ?? '';

						galleryImage.at(index).image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
					}
				}
			} else if (file.fieldname.startsWith('galleryVideo')) {
				const galleryLength = req.body.galleryVideo.length;
				for (let index = 0; index < galleryLength; index++) {
					if (file.fieldname.startsWith(`galleryVideo[${index}]`)) {
						const videoEntry = galleryVideo.at(index);

						if (videoEntry.linkOrVideo === 'video') {
							videoEntry.video = videoEntry.video ?? '';

							videoEntry.video = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
						} else {
							videoEntry.link = videoEntry.linkOrVideo;
						}
					}
				}
			}
		});

		const gallery = {
			galleryImages: galleryImage,
			galleryVideos: galleryVideo,
		};

		await GalleryModel.create({
			title: formatedName,
			description: description,
			date: date,
			category: category,
			domain: domain,
			typeOfContent: typeOfContent,
			searchKeywords: tags,
			gallery: gallery,
			image: image,
			createdBy: userId,
			updatedBy: userId,
			deletedAt: null,
		});

		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const deleteGallery = async (req, res, next) => {
	try {
		const galleryId = req.params.id;

		const gallery = await GalleryModel.findOne({ _id: galleryId });

		if (gallery.image) {
			singleFileRemover(gallery.image);
		}

		if (!gallery) {
			return res.status(404).json({
				success: false,
				message: 'Gallery not found',
			});
		}

		gallery.deletedAt = dayjs();
		await gallery.save();

		return res.status(200).json({
			success: true,
			message: 'Gallery data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getGalleryById = async (req, res, next) => {
	try {
		const galleryId = req.params.id;

		const gallery = await GalleryModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(galleryId),
					deletedAt: null,
				},
			},
			{
				$addFields: {
					videos: {
						$map: {
							input: '$videos',
							as: 'video',
							in: { link: '$$video' },
						},
					},
				},
			},
		]);

		if (gallery.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Gallery data fetched',
				data: { gallery: gallery.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Gallery not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateGallery = async (req, res, next) => {
	try {
		const galleryId = req.params.id;

		const { title, category, description, date, galleryImage, galleryVideo, tags, domain, typeOfContent } = req.body;

		const { userId } = req.user;

		// if (!links) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'Link is mandatory',
		// 	});
		// }

		const formatedName = capitalizeFirstLetter(title);

		const galleries = await GalleryModel.findOne({
			_id: galleryId,
			deletedAt: null,
		});

		let images = req.body.image;

		if (req.files && Array.isArray(req.files) && req.files.length > 0) {
			req.files.forEach((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(galleries.image);
					images = getFilePath(file);
				}
			});
		}

		req.files?.forEach((file) => {
			if (file.fieldname.startsWith('galleryImage')) {
				const galleryLength = req.body.galleryImage.length;
				for (let index = 0; index < galleryLength; index++) {
					if (file.fieldname.startsWith(`galleryImage[${index}]`)) {
						galleryImage.at(index).image = galleryImage.at(index).image ?? '';
						const currentImage = galleryImage.at(index).image;
						singleFileRemover(currentImage);
						galleryImage.at(index).image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
					}
				}
			} else if (file.fieldname.startsWith('galleryVideo')) {
				const galleryLength = req.body.galleryVideo.length;
				for (let index = 0; index < galleryLength; index++) {
					if (file.fieldname.startsWith(`galleryVideo[${index}]`)) {
						const videoEntry = galleryVideo.at(index);

						if (videoEntry.linkOrVideo === 'video') {
							videoEntry.video = videoEntry.video ?? '';
							const currentVideo = videoEntry.video;
							singleFileRemover(currentVideo);
							videoEntry.video = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
						} else {
							videoEntry.link = videoEntry.linkOrVideo;
						}
					}
				}
			}
		});

		const gallery = {
			galleryImages: galleryImage,
			galleryVideos: galleryVideo,
		};

		galleries.title = formatedName;

		galleries.description = description;
		galleries.date = date;
		galleries.category = category;
		galleries.domain = domain;
		galleries.typeOfContent = typeOfContent;
		galleries.gallery = gallery;
		galleries.tags = tags;
		galleries.image = images;

		galleries.updatedBy = userId;

		await galleries.save();

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const GalleryStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await BlogsModel.updateOne(
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
