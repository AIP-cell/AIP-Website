import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { CollaborationModel } from '../../modals/CollaborationModal.js';
import { capitalizeAllLetters, capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import path from 'path';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addCollaborations = async (req, res, next) => {
	try {
		const { title, tags, date, category, description, typeOfContent } = req.body;
		const { userId } = req.user;
		if (!date) {
			return res.status(422).json({
				success: true,
				message: 'Date are mandatory',
			});
		}
		const formatedTitle = capitalizeFirstLetter(title);

		const existingName = await CollaborationModel.findOne({ title: title });

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Collaboration already exists',
			});
		}

		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = 'uploads' + file.path.split(path.sep + 'uploads')[1];
			}
		});

		await CollaborationModel.create({
			title: formatedTitle,
			searchKeywords: tags,
			date: date,
			category: category,
			description: description,
			typeOfContent: typeOfContent,
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

export const deleteCollaborations = async (req, res, next) => {
	try {
		const collaborationId = req.params.id;

		const collaborations = await CollaborationModel.findOne({ _id: collaborationId });

		if (collaborations.image) {
			singleFileRemover(collaborations.image);
		}

		if (!collaborations) {
			return res.status(404).json({
				success: false,
				message: 'Collaboration not found',
			});
		}

		collaborations.deletedAt = dayjs();
		await collaborations.save();

		return res.status(200).json({
			success: true,
			message: 'Collaboration data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getCollaborationId = async (req, res, next) => {
	try {
		const collaborationId = req.params.id;

		const collaboration = await CollaborationModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(collaborationId),
					deletedAt: null,
				},
			},
		]);
		if (collaboration.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Collaboration data fetched',
				data: { collaboration: collaboration.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Collaboration not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateCollaboration = async (req, res, next) => {
	try {
		const collaborationId = req.params.id;

		const { userId } = req.user;

		const { title, tags, date, category, description, typeOfContent } = req.body;

		const collaboration = await CollaborationModel.findOne({ _id: collaborationId, deletedAt: null });

		if (!collaboration) {
			return res.status(404).json({
				success: false,
				message: 'Collaboration not found',
			});
		}

		const formatedTitle = capitalizeAllLetters(title);

		const existingCollaborations = await CollaborationModel.findOne({
			name: formatedTitle,
			_id: { $ne: collaborationId },
			deletedAt: null,
		});

		if (existingCollaborations) {
			return res.status(409).json({
				success: false,
				message: 'Collaboration already exists',
			});
		}

		let image = req.body?.image;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(collaboration.image);
					image = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				}
			});
		}

		collaboration.searchKeywords = tags;
		collaboration.title = title;
		collaboration.date = date;
		collaboration.category = category;
		collaboration.description = description;
		collaboration.typeOfContent = typeOfContent;
		collaboration.updatedBy = userId;

		collaboration.image = image;
		await collaboration.save();

		return res.status(200).json({
			success: true,
			message: 'Collaboration data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const collaborationStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await CollaborationModel.updateOne(
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
