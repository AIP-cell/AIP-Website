import { AipImpactCasestudiesModel } from '../../modals/AipImpactCasestudiesModel.js';
import { AuthModel } from '../../modals/AuthModel.js';
import { HomePageModel } from '../../modals/HomePageModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const updateAipImpactFoundationPage = async (req, res, next) => {
	try {
		const {
			networkMembersCount,
			coreFoundersCount,
			knowledgeResourcesCount,
			researchReportsCount,
			purposefulEngagementsCount,
		} = req.body;

		const { userId } = req.user;
		const aipImpact = await AipImpactCasestudiesModel.findOne();
		if (!aipImpact) {
			await HomePageModel.create({
				foundationFacts: {
					coreFoundersCount: Math.abs(Number(coreFoundersCount)),
					networkMembersCount: Math.abs(Number(networkMembersCount)),
					knowledgeResourcesCount: Math.abs(Number(knowledgeResourcesCount)),
					researchReportsCount: Math.abs(Number(researchReportsCount)),
					purposefulEngagementsCount: Math.abs(Number(purposefulEngagementsCount)),
					createdBy: userId,
					updatedBy: userId,
				},
				deletedAt: null,
			});
		}
		aipImpact.foundationFacts.coreFoundersCount = Math.abs(Number(coreFoundersCount));
		aipImpact.foundationFacts.networkMembersCount = Math.abs(Number(networkMembersCount));
		aipImpact.foundationFacts.knowledgeResourcesCount = Math.abs(Number(knowledgeResourcesCount));
		aipImpact.foundationFacts.researchReportsCount = Math.abs(Number(researchReportsCount));
		aipImpact.foundationFacts.purposefulEngagementsCount = Math.abs(Number(purposefulEngagementsCount));
		aipImpact.foundationFacts.updatedBy = userId;

		await aipImpact.save();

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const viewFoundationPage = async (req, res, next) => {
	try {
		const founcationFacts = (
			await AipImpactCasestudiesModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},
				{
					$lookup: {
						from: AuthModel.modelName,
						localField: 'foundationFacts.updatedBy',
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
						foundationFacts: 1,
						updatedBy: '$lastUpdated.name',
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
			data: { foundationFact: founcationFacts },
		});
	} catch (err) {
		return next(serverError(err));
	}
};
