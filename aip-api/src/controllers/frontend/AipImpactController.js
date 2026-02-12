import { AipImpactCasestudiesModel } from '../../modals/AipImpactCasestudiesModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const aipImpact = async (req, res, next) => {
	try {
		const aipImpact = (
			await AipImpactCasestudiesModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},
				{
					$project: {
						'foundationFacts.networkMembersCount': 1,
						'foundationFacts.coreFoundersCount': 1,
						'foundationFacts.knowledgeResourcesCount': 1,
						'foundationFacts.researchReportsCount': 1,
						'foundationFacts.purposefulEngagementsCount': 1,
						testimonials: 1,
						people: 1,
						casestudies: 1,
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: aipImpact,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
