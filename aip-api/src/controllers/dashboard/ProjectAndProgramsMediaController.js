import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { ProjectAndProgramModel } from '../../modals/ProjectAndProgramsModel.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addProjectMedia = async (req, res, next) => {
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
		await ProjectAndProgramModel.updateOne(
			{ _id: new mongoose.Types.ObjectId(projectId) },
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
				$set: { updatedBy: userId, createdBy: userId },
			},
		);

		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const updateProjectMedia = async (req, res, next) => {
	try {
		const { date, link, title, description } = req.body;

		if (!date) {
			return res.status(422).json({
				success: true,
				message: 'Date is mandatory',
			});
		}
		const { userId } = req.user;
		const projectId = req.params.id;

		const media = await ProjectAndProgramModel.findOne({ 'media._id': projectId, deletedAt: null });

		let images = req.body.image;

		if (req.files && Array.isArray(req.files) && req.files.length > 0) {
			req.files.forEach((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(media.media.at(0).image);
					images = getFilePath(file);
				}
			});
		}

		// Format the name
		const formattedTitle = await capitalizeFirstLetter(title);

		// Use updateOne to directly update the array element
		const result = await ProjectAndProgramModel.updateOne(
			{ 'media._id': new mongoose.Types.ObjectId(projectId) },
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

		const media = await ProjectAndProgramModel.findOne(
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

		const media = await ProjectAndProgramModel.findOne({ 'media._id': Id, deletedAt: null });

		if (media.media.at(0).image) {
			singleFileRemover(media.media.at(0).image);
		}
		const result = await ProjectAndProgramModel.updateOne({ 'media._id': Id }, { $pull: { media: { _id: Id } } });

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
