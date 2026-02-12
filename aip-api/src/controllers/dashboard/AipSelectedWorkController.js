import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { SelectedWorkModel } from '../../modals/SelectedWorkModal.js';

export const addSelectedWork = async (req, res, next) => {
	try {
		const { curatedResource, expert } = req.body;
		if (!curatedResource || !expert) {
			return res.status(422).json({
				success: true,
				message: 'Title and Expert is mandatory',
			});
		}
		const { userId } = req.user;
		const existingName = await SelectedWorkModel.findOne({ curatedResource: curatedResource, expert: expert });

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Work already exists',
			});
		}

		await SelectedWorkModel.create({
			curatedResource: curatedResource,
			expert: expert,
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

export const deleteWork = async (req, res, next) => {
	try {
		const workId = req.params.id;

		const work = await SelectedWorkModel.findOne({ _id: workId });
		if (!work) {
			return res.status(404).json({
				success: false,
				message: 'Work not found',
			});
		}

		work.deletedAt = dayjs();
		await work.save();

		return res.status(200).json({
			success: true,
			message: 'Work data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getWorkById = async (req, res, next) => {
	try {
		const workId = req.params.id;

		const work = await SelectedWorkModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(workId),
					deletedAt: null,
				},
			},
		]);

		if (work.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Work data fetched',
				data: { work: work.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Work not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateWork = async (req, res, next) => {
	try {
		const workId = req.params.id;

		const { userId } = req.user;

		const { curatedResource, expert } = req.body;

		const work = await SelectedWorkModel.findOne({ _id: workId, deletedAt: null });
		if (!curatedResource || !expert) {
			return res.status(422).json({
				success: true,
				message: 'Title and Curated Resource is mandatory',
			});
		}

		const existingWork = await SelectedWorkModel.findOne({
			curatedResource: curatedResource,
			expert: expert,
			_id: { $ne: workId },
			deletedAt: null,
		});

		if (existingWork) {
			return res.status(409).json({
				success: false,
				message: 'Work already exists',
			});
		}

		work.expert = expert;
		work.curatedResource = curatedResource;
		work.updatedBy = userId;

		await work.save();

		return res.status(200).json({
			success: true,
			message: 'Work data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const worktatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await SelectedWorkModel.updateOne(
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
