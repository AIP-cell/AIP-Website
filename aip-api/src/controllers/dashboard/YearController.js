import dayjs from 'dayjs';
import { YearModel } from '../../modals/YearModel.js';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';

export const addYear = async (req, res, next) => {
	try {
		const { year } = req.body;
		if (!year) {
			return res.status(422).json({
				success: true,
				message: 'Year is mandatory',
			});
		}

		const existingYear = await YearModel.findOne({ year });

		if (existingYear) {
			return res.status(409).json({
				success: false,
				message: 'Year already exists',
			});
		}

		await YearModel.create({
			year: year,
			deletedAt: null,
		});

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const deleteYear = async (req, res, next) => {
	try {
		const yearId = req.params.id;

		const year = await YearModel.findOne({ _id: yearId });

		if (!year) {
			return res.status(404).json({
				success: false,
				message: 'Year not found',
			});
		}

		year.deletedAt = dayjs();
		await year.save();

		return res.status(200).json({
			success: true,
			message: 'Year data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getYearById = async (req, res, next) => {
	try {
		const yearId = req.params.id;

		const year = await YearModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(yearId),
					deletedAt: null,
				},
			},
		]);

		if (year.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Year data fetched',
				data: { year: year.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Year not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const getAllYears = async (req, res, next) => {
	try {
		const years = await YearModel.aggregate([
			{
				$match: {
					deletedAt: null,
				},
			},
		]);

		if (years.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Year data fetched',
				data: { years: years },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Year not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateYear = async (req, res, next) => {
	try {
		const yearId = req.params.id;

		const { year } = req.body;

		const years = await YearModel.findOne({ _id: yearId, deletedAt: null });

		if (!years) {
			return res.status(404).json({
				success: false,
				message: 'Year not found',
			});
		}

		const existingYear = await YearModel.findOne({ year, _id: { $ne: yearId }, deletedAt: null });

		if (existingYear) {
			return res.status(409).json({
				success: false,
				message: 'Year already exists',
			});
		}

		years.year = year;
		await years.save();

		return res.status(200).json({
			success: true,
			message: 'Year data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const yearStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await YearModel.updateOne(
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
