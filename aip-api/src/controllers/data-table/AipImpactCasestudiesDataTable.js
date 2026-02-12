import { AipImpactCasestudiesModel } from '../../modals/AipImpactCasestudiesModel.js';
import { AuthModel } from '../../modals/AuthModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getAipImpactCasestudeisData = async (req, res, next) => {
	try {
		const page = Math.abs(Number.parseInt(req.query.page) || 1);
		const pageSize = 15;
		const searchTerm = req.query.q;

		const aggregationPipeline = [
			{
				$match: { deletedAt: null },
			},
			{
				$sort: { createdAt: -1 },
			},
			{
				$unwind: {
					path: '$casestudies',
				},
			},
			...(searchTerm
				? [
						{
							$match: {
								'casestudies.philanthropistName': { $regex: searchTerm, $options: 'i' },
							},
						},
					]
				: []),
			{
				$lookup: {
					from: AuthModel.modelName,
					localField: 'casestudies.updatedBy',
					foreignField: '_id',
					as: 'lastUpdated',
				},
			},

			{
				$unwind: {
					path: '$lastUpdated',
					preserveNullAndEmptyArrays: true,
				},
			},

			{
				$project: {
					_id: '$casestudies._id',
					createdAt: 1,
					updatedBy: '$lastUpdated.name',
					philanthropistName: '$casestudies.philanthropistName',
					foundationName: '$casestudies.foundationName',
					image: '$casestudies.image',
					description: '$casestudies.description',
				},
			},
			{
				$facet: {
					paginatedResults: [{ $skip: (page - 1) * pageSize }, { $limit: pageSize }],
					totalCount: [
						{
							$count: 'count',
						},
					],
				},
			},
		];
		if (searchTerm) {
			aggregationPipeline.unshift({
				$match: {
					$and: [
						{ deletedAt: null },
						{
							$or: [{ philanthropistName: { $regex: searchTerm, $options: 'i' } }],
						},
					],
				},
			});
		}

		const casestudies = await AipImpactCasestudiesModel.aggregate(aggregationPipeline);

		if (!casestudies || casestudies.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No case studies Found',
				data: {},
			});
		}
		const [result] = casestudies;

		return res.status(200).json({
			success: true,
			message: 'Casestudies data fetched',
			data: {
				casestudies: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
