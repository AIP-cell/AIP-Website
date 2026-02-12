import { AuthModel } from '../../modals/AuthModel.js';
import { HomePageModel } from '../../modals/HomePageModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const updateHomePage = async (req, res, next) => {
	try {
		const { userId } = req.user;
		let { coreFoundersCount, foundersCount, membersCount } = req.body;
		if (!coreFoundersCount) {
			coreFoundersCount = 0;
		}
		if (!foundersCount) {
			foundersCount = 0;
		}
		if (!membersCount) {
			membersCount = 0;
		}

		const homePageData = await HomePageModel.findOne();
		if (!homePageData) {
			await HomePageModel.create({
				coreFoundersCount: Math.abs(Number(coreFoundersCount)),
				foundersCount: Math.abs(Number(foundersCount)),
				membersCount: Math.abs(Number(membersCount)),
				createdBy: userId,
				updatedBy: userId,
				deletedAt: null,
			});
		}

		homePageData.coreFoundersCount = Math.abs(Number(coreFoundersCount));
		homePageData.foundersCount = Math.abs(Number(foundersCount));
		homePageData.membersCount = Math.abs(Number(membersCount));
		homePageData.updatedBy = userId;

		await homePageData.save();

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const viewHomePage = async (req, res, next) => {
	try {
		const homePageData = (
			await HomePageModel.aggregate([
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
						coreFoundersCount: 1,
						foundersCount: 1,
						membersCount: 1,
						updatedBy: '$lastUpdated.name',
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
			data: homePageData,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
