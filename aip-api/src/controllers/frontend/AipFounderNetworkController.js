import { AipImpactCasestudiesModel } from '../../modals/AipImpactCasestudiesModel.js';
import { FounderNetworkModel } from '../../modals/FounderNetworkModel.js';
import { NpoModel } from '../../modals/NpoModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const founderNetwork = async (req, res, next) => {
	try {
		const founderNetwork = (
			await FounderNetworkModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},

				{
					$project: {
						description1: 1,
						description2: 1,
						testimonials: 1,
						methodsOfJoining: 1,
					},
				},
			])
		).at(0);

		const npos = (
			await NpoModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},
				{
					$project: {
						'casestudies.title': 1,
						'casestudies.organisation': 1,
						'casestudies.description': 1,
						// 'casestudies.isLinkOrPdf': 1,
						// 'casestudies.linkOrVideo': 1,
						// 'casestudies.file': 1,
						// 'casestudies.fileLink': 1,
						// 'casestudies.links': 1,
						// 'casestudies.videoLink': 1,
						// 'casestudies.video': 1,
						'casestudies.image': 1,

						'casestudies._id': 1,
						'casestudies.slug': 1,
						'people.name': 1,
						'people.designation': 1,
						'people.image': 1,
						'people._id': 1,
					},
				},
			])
		).at(0);

		const aipImpact = (
			await AipImpactCasestudiesModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},
				{
					$project: {
						foundationFacts: 1,
						testimonials: 1,
						people: 1,
						casestudies: 1,
					},
				},
			])
		).at(0);

		if (npos && npos.casestudies) {
			founderNetwork.casestudies = npos.casestudies;
		}
		if (aipImpact && aipImpact.people) {
			founderNetwork.people = aipImpact.people;
		}

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: founderNetwork,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
