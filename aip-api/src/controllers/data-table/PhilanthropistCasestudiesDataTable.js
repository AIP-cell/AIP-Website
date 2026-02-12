import { AuthModel } from '../../modals/AuthModel.js';
import { PhilanthropistNetworkModel } from '../../modals/PhilanthropistNetworkModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getPhilanthropistData = async (req, res, next) => {
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
								'casestudies.title': { $regex: searchTerm, $options: 'i' },
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
					updatedBy: '$lastUpdated.name',
					title: '$casestudies.title',
					organisationName: '$casestudies.organisationName',
					image: '$casestudies.image',
					description: '$casestudies.description',
				},
			},
			// {
			// 	$project: {
			// 		_id: 1,
			// 		batchName: 1,
			// 		fromDate: 1,
			// 		toDate: 1,
			// 		isActive: 1,
			// 	},
			// },
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

		const casestudies = await PhilanthropistNetworkModel.aggregate(aggregationPipeline);

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
