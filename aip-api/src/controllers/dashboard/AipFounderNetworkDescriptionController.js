import { AuthModel } from '../../modals/AuthModel.js';
import { FounderNetworkModel } from '../../modals/FounderNetworkModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const updateDescription = async (req, res, next) => {
	try {
		const { description1 } = req.body;

		const { userId } = req.user;

		const founderNetwork = await FounderNetworkModel.findOne();
		if (!founderNetwork) {
			await FounderNetworkModel.create({
				description1: description1,

				createdBy: userId,
				updatedBy: userId,
				deletedAt: null,
			});
		} else {
			founderNetwork.description1 = description1;
			founderNetwork.updatedBy = userId;
			await founderNetwork.save();
		}

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const viewDescription = async (req, res, next) => {
	try {
		const founderNetwork = (
			await FounderNetworkModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},
				{
					$lookup: {
						from: AuthModel.modelName,
						localField: 'updatedBy',
						foreignField: '_id',
						as: 'lastUpdated',
					},
				},
				{
					$unwind: {
						path: '$lastUpdated',
					},
				},
				{
					$project: {
						description1: 1,
						description2: 1,
						updatedBy: '$lastUpdated.name',
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
			data: founderNetwork,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
