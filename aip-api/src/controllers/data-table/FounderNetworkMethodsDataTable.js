import { AuthModel } from '../../modals/AuthModel.js';
import { FounderNetworkModel } from '../../modals/FounderNetworkModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getFounderNetworkMethodsData = async (req, res, next) => {
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
					path: '$methodsOfJoining',
				},
			},
			...(searchTerm
				? [
						{
							$match: {
								'methodsOfJoining.name': { $regex: searchTerm, $options: 'i' },
							},
						},
					]
				: []),
			{
				$lookup: {
					from: AuthModel.modelName,
					localField: 'methodsOfJoining.updatedBy',
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
					_id: '$methodsOfJoining._id',
					updatedBy: '$lastUpdated.name',
					name: '$methodsOfJoining.name',
					image: '$methodsOfJoining.image',
					designation: '$methodsOfJoining.designation',
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

		const methods = await FounderNetworkModel.aggregate(aggregationPipeline);

		if (!methods || methods.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No methods Found',
				data: {},
			});
		}
		const [result] = methods;
		return res.status(200).json({
			success: true,
			message: 'Methods data fetched',
			data: {
				methods: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
