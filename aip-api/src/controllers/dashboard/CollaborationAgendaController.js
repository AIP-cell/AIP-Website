import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { serverError } from '../../utils/errorHandler.js';
import { CollaborationCityModel } from '../../modals/CollaborationCityModel.js';
import { CollaborationModel } from '../../modals/CollaborationModal.js';

export const addCollaborationAgenda = async (req, res, next) => {
	try {
		const { title, fromTime, toTime, date, description } = req.body;
		const cityId = req.params.id;

		const { userId } = req.user;

		const formattedTitle = await capitalizeFirstLetter(title);

		await CollaborationCityModel.updateOne(
			{ _id: cityId },
			{
				$push: {
					agenda: {
						title: formattedTitle,
						fromTime: fromTime,
						toTime: toTime,
						date: date,
						description: description,
					},
				},
			},
		);

		const city = await CollaborationCityModel.findOne(
			{ _id: new mongoose.Types.ObjectId(cityId) },
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

export const updateCollaborationAgenda = async (req, res, next) => {
	try {
		const Id = req.params.id;

		const { userId } = req.user;
		const { title, fromTime, toTime, date, description } = req.body;

		const formattedName = await capitalizeFirstLetter(title);

		const result = await CollaborationCityModel.updateOne(
			{ 'agenda._id': new mongoose.Types.ObjectId(Id) },
			{
				$set: {
					'agenda.$.title': formattedName,
					'agenda.$.fromTime': fromTime,
					'agenda.$.toTime': toTime,
					'agenda.$.date': date,
					'agenda.$.description': description,
					updatedBy: userId,
				},
			},
		);

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'Agenda not found',
			});
		}
		const city = await CollaborationCityModel.findOne(
			{ 'agenda._id': new mongoose.Types.ObjectId(Id) },
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

export const getAgendaById = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const agenda = await CollaborationCityModel.findOne(
			{
				agenda: { $elemMatch: { _id: new mongoose.Types.ObjectId(Id) } },
			},
			{
				'agenda.$': 1,
			},
		);

		if (!agenda) {
			return {
				success: false,
				message: 'Agenda not found',
			};
		}

		return res.status(200).json({
			success: true,
			message: 'Retrived successfully',
			data: { agenda: agenda },
		});
	} catch (error) {
		return serverError(error);
	}
};

export const deleteAgenda = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const result = await CollaborationCityModel.updateOne({ 'agenda._id': Id }, { $pull: { agenda: { _id: Id } } });

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'No agenda found with the given ID',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Agenda successfully deleted',
		});
	} catch (err) {
		console.error('Error deleting:', err);

		return res.status(500).json({
			success: false,
			message: 'An error occurred while deleting the person',
		});
	}
};
