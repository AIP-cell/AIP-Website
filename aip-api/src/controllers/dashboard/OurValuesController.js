import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { OurValuesModel } from '../../modals/OurValuesModal.js';

export const addOurValues = async (req, res, next) => {
	try {
		const { title1, title2, description } = req.body;
		const { userId } = req.user;

		const formatedTitle1 = capitalizeFirstLetter(title1);
		const formatedTitle2 = capitalizeFirstLetter(title2);

		const existingQuestion = await OurValuesModel.findOne({
			title1: formatedTitle1,
			title2: formatedTitle2,
			deletedAt: null,
		});

		if (existingQuestion) {
			return res.status(409).json({
				success: false,
				message: 'Our values already exists',
			});
		}

		await OurValuesModel.create({
			title1: formatedTitle1,
			title2: formatedTitle2,
			description: description,
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

export const deleteOurValues = async (req, res, next) => {
	try {
		const ourValueId = req.params.id;

		const ourValues = await OurValuesModel.findOne({ _id: ourValueId });

		if (!ourValues) {
			return res.status(404).json({
				success: false,
				message: 'Our values not found',
			});
		}

		ourValues.deletedAt = dayjs();
		await ourValues.save();

		return res.status(200).json({
			success: true,
			message: 'Our values data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getOurValuesById = async (req, res, next) => {
	try {
		const ourValueId = req.params.id;

		const ourValues = await OurValuesModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(ourValueId),
					deletedAt: null,
				},
			},
		]);

		if (ourValues.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Our value fetched',
				data: { ourValues: ourValues.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Our value not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateOurValues = async (req, res, next) => {
	try {
		const ourValueId = req.params.id;
		const { userId } = req.user;

		const { title1, title2, description } = req.body;

		const ourValues = await OurValuesModel.findOne({ _id: ourValueId, deletedAt: null });

		if (!ourValues) {
			return res.status(404).json({
				success: false,
				message: 'Our values not found',
			});
		}
		const formatedTitle1 = capitalizeFirstLetter(title1);
		const formatedTitle2 = capitalizeFirstLetter(title2);

		const existingOurValue = await OurValuesModel.findOne({
			title1: formatedTitle1,
			title2: formatedTitle2,
			_id: { $ne: ourValueId },
			deletedAt: null,
		});

		if (existingOurValue) {
			return res.status(409).json({
				success: false,
				message: 'Our value already exists',
			});
		}

		ourValues.description = description;
		ourValues.title1 = formatedTitle1;
		ourValues.title2 = formatedTitle2;
		ourValues.updatedBy = userId;
		await ourValues.save();

		return res.status(200).json({
			success: true,
			message: 'Our  data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const ourValueStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await OurValuesModel.updateOne(
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
