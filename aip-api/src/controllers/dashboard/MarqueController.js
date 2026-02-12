import { MarqueModel } from '../../modals/MarqueModal.js';
import { serverError } from '../../utils/errorHandler.js';

export const getMarque = async (req, res, next) => {
	try {
		const marque = await MarqueModel.aggregate([
			{
				$match: {
					deletedAt: null,
				},
			},

			{
				$project: {
					marque: 1,
					link: 1,
				},
			},
		]);
		console.log(marque);
		if (!marque) {
			return res.status(404).json({
				success: false,
				message: 'Marque not found',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Fetched successfully',
			data: marque.at(0),
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateMarque = async (req, res, next) => {
	try {
		const { marque, link } = req.body;
		const userId = req.user.id;

		let existingMarque = await MarqueModel.findOne({
			deletedAt: null,
		});

		if (!existingMarque) {
			existingMarque = new MarqueModel({
				marque,
				link,
				createdBy: userId,
			});
		} else {
			existingMarque.marque = marque;
			existingMarque.link = link;
			existingMarque.updatedBy = userId;
		}

		await existingMarque.save();

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const marqueStatusUpdate = async (req, res, next) => {
	try {
		const marque = await MarqueModel.findOne({
			deletedAt: null,
		});

		if (!marque) {
			return res.status(404).json({
				success: false,
				message: 'Marque not found',
			});
		}

		// Toggle the status
		marque.isActive = !marque.isActive;
		await marque.save();

		return res.status(200).json({
			success: true,
			message: 'Status updated.',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
