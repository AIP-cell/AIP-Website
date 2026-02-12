import { AipTeamModel } from '../../modals/AipTeamModal.js';
import { AuthModel } from '../../modals/AuthModel.js';
import { HomePageQuoteModel } from '../../modals/HomePageQuoteModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getQuoteData = async (req, res, next) => {
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
				$lookup: {
					from: AipTeamModel.modelName,
					localField: 'coreFounder',
					foreignField: '_id',
					as: 'coreFounders',
				},
			},
			{
				$unwind: {
					path: '$coreFounders',
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
			// {
			// 	$lookup: {
			// 		from: AuthModel.modelName,
			// 		localField: 'createdBy',
			// 		foreignField: '_id',
			// 		as: 'created',
			// 	},
			// },
			// {
			// 	$unwind: {
			// 		path: '$created',
			// 	},
			// },
			{
				$unwind: {
					path: '$coreFounders',
				},
			},
			...(searchTerm
				? [
						{
							$match: {
								'coreFounders.name': { $regex: searchTerm, $options: 'i' },
							},
						},
					]
				: []),
			{
				$project: {
					_id: 1,
					coreFounder: '$coreFounders.name',
					updatedBy: '$lastUpdated.name',
					// createdBy: '$created.name',
					quote: 1,
					isActive: 1,
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

		const quotes = await HomePageQuoteModel.aggregate(aggregationPipeline);

		if (!quotes || quotes.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No quote found',
				data: {},
			});
		}
		const [result] = quotes;

		return res.status(200).json({
			success: true,
			message: 'Quotes data fetched',
			data: {
				quotes: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
