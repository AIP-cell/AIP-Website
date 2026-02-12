import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { CollaborationCityModel } from '../../modals/CollaborationCityModel.js';
import { CollaborationModel } from '../../modals/CollaborationModal.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addCollaborationMedia = async (req, res, next) => {
	try {
		const { date, link, title, description } = req.body;
		const projectId = req.params.id;
		let image;

		const { userId } = req.user;

		if (!date) {
			return res.status(422).json({
				success: true,
				message: 'Date is mandatory',
			});
		}

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			}
		});

		const formattedTitle = await capitalizeFirstLetter(title);

		await CollaborationCityModel.updateOne(
			{ _id: projectId },
			{
				$push: {
					media: {
						title: formattedTitle,
						date: date,
						image: image,
						description: description,
						link: link,
					},
				},
			},
		);

		const city = await CollaborationCityModel.findOne(
			{ _id: new mongoose.Types.ObjectId(projectId) },
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

export const updateCollaborationMedia = async (req, res, next) => {
	try {
		const { date, link, title, description } = req.body;
		const Id = req.params.id;
		let images = req.body.image;

		const { userId } = req.user;

		const media = await CollaborationCityModel.findOne({ 'media._id': Id, deletedAt: null });

		// Check if new image files are uploaded
		if (req.files && Array.isArray(req.files) && req.files.length > 0) {
			req.files.forEach((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(media.media.at(0).image);
					images = getFilePath(file);
				}
			});
		}

		const formattedTitle = await capitalizeFirstLetter(title);

		const result = await CollaborationCityModel.updateOne(
			{ 'media._id': new mongoose.Types.ObjectId(Id) },
			{
				$set: {
					'media.$.title': formattedTitle,
					'media.$.date': date,
					'media.$.link': link,
					'media.$.description': description,
					'media.$.image': images,
					updatedBy: userId,
				},
			},
		);

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'Media not found',
			});
		}

		const city = await CollaborationCityModel.findOne(
			{ 'media._id': new mongoose.Types.ObjectId(Id) },
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
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getMediaById = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const media = await CollaborationCityModel.findOne(
			{
				media: { $elemMatch: { _id: new mongoose.Types.ObjectId(Id) } },
			},
			{
				'media.$': 1,
			},
		);

		if (!media) {
			return {
				success: false,
				message: 'Media not found',
			};
		}

		return res.status(200).json({
			success: true,
			message: 'Retrived successfully',
			data: { media: media },
		});
	} catch (error) {
		return serverError(error);
	}
};

export const deleteMedia = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const media = await CollaborationCityModel.findOne({ 'media._id': Id, deletedAt: null });

		if (media.media.at(0).image) {
			singleFileRemover(media.media.at(0).image);
		}

		const result = await CollaborationCityModel.updateOne({ 'media._id': Id }, { $pull: { media: { _id: Id } } });

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'No media found with the given ID',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Media successfully deleted',
		});
	} catch (err) {
		console.error('Error deleting:', err);

		return res.status(500).json({
			success: false,
			message: 'An error occurred while deleting the person',
		});
	}
};
