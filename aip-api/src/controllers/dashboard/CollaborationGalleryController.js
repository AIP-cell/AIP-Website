import mongoose from 'mongoose';
import { serverError } from '../../utils/errorHandler.js';
import path from 'path';
import { singleFileRemover } from '../../utils/fileRemover.js';
import { CollaborationCityModel } from '../../modals/CollaborationCityModel.js';
import { CollaborationModel } from '../../modals/CollaborationModal.js';

export const addCollaborationGallery = async (req, res, next) => {
	try {
		const { galleryImage, galleryVideo } = req.body;
		const programId = req.params.id;
		const { userId } = req.user;

		// if (!galleryImage || !galleryVideo) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'Gallery image and video is mandatory',
		// 	});
		// }

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

		await CollaborationCityModel.updateOne(
			{ _id: programId },
			{
				$set: { gallery: gallery },
			},
			{ new: true },
		);

		const city = await CollaborationCityModel.findOne(
			{ _id: new mongoose.Types.ObjectId(programId) },
			{ collaborationId: 1 },
		);
		if (city && city.collaborationId) {
			await CollaborationModel.updateOne(
				{ _id: city.collaborationId },
				{
					$set: { updatedBy: userId },
				},
			);
		}

		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};
// export const updateProgramGallery = async (req, res, next) => {
// 	try {
// 		const { galleryId } = req.query;
// 		const { projectId } = req.query;

// 		const { galleryImage, galleryVideo } = req.body;
// 		req.files?.forEach((file) => {
// 			if (file.fieldname.startsWith('galleryImage')) {
// 				const galleryLength = req.body.galleryImage.length;
// 				for (let index = 0; index < galleryLength; index++) {
// 					if (file.fieldname.startsWith(`galleryImage[${index}]`)) {
// 						galleryImage.at(index).images = galleryImage.at(index).image ?? '';
// 						const currentImage = galleryImage.at(index).image;
// 						singleFileRemover(currentImage);
// 						galleryImage.at(index).image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
// 					}
// 				}
// 			} else if (file.fieldname.startsWith('galleryVideo')) {
// 				const galleryLength = req.body.galleryImage.length;
// 				for (let index = 0; index < galleryLength; index++) {
// 					if (file.fieldname.startsWith(`galleryVideo[${index}]`)) {
// 						galleryVideo.at(index).video = galleryVideo.at(index).video ?? '';
// 						const currentVideo = galleryVideo.at(index).video;
// 						singleFileRemover(currentVideo);
// 						galleryVideo.at(index).video = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
// 					}
// 				}
// 			}
// 		});

// 		const updateData = {
// 			'gallery.$.galleryImage': galleryImage,
// 			'gallery.$.galleryVideo': galleryVideo,
// 		};

// 		const result = await ProjectAndProgramModel.updateOne(
// 			{ _id: new mongoose.Types.ObjectId(projectId), 'gallery._id': new mongoose.Types.ObjectId(galleryId) },
// 			{
// 				$set: updateData,
// 			},
// 		);

// 		if (result.nModified === 0) {
// 			return res.status(404).json({
// 				success: false,
// 				message: 'Case studies not found',
// 			});
// 		}

// 		return res.status(200).json({
// 			success: true,
// 			message: 'Updated successfully',
// 		});
// 	} catch (err) {
// 		return next(serverError(err));
// 	}
// };

export const getCollaborationGalleryById = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);
		const gallery = await CollaborationCityModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(Id),
					deletedAt: null,
				},
			},
			{
				$project: {
					_id: 1,
					gallery: 1,
					collaborationId: 1,
				},
			},
		]);
		if (!gallery) {
			return {
				success: false,
				message: 'Gallery not found',
			};
		}
		return res.status(200).json({
			success: true,
			message: 'Retrived successfully',
			data: { gallery: gallery },
		});
	} catch (error) {
		return serverError(error);
	}
};

// export const deleteProjectGallery = async (req, res) => {
// 	try {
// 		const Id = new mongoose.Types.ObjectId(req.params.id);
// 		const result = await ProjectAndProgramModel.updateOne({ 'gallery._id': Id }, { $pull: { gallery: { _id: Id } } });

// 		if (result.nModified === 0) {
// 			return res.status(404).json({
// 				success: false,
// 				message: 'No gallery found with the given ID',
// 			});
// 		}

// 		return res.status(200).json({
// 			success: true,
// 			message: 'Data deleted',
// 		});
// 	} catch (err) {
// 		console.error('Error deleting:', err);

// 		return {
// 			success: false,
// 			message: 'An error occurred while deleting the category',
// 		};
// 	}
// };
