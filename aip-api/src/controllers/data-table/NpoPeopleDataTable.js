import { AuthModel } from '../../modals/AuthModel.js';
import { NpoModel } from '../../modals/NpoModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getNpoPeopleData = async (req, res, next) => {
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
					path: '$people',
				},
			},
			...(searchTerm
				? [
						{
							$match: {
								'people.name': { $regex: searchTerm, $options: 'i' },
							},
						},
					]
				: []),
			{
				$lookup: {
					from: AuthModel.modelName,
					localField: 'people.updatedBy',
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
					_id: '$people._id',
					name: '$people.name',
					designation: '$people.designation',
					image: '$people.image',
					updatedBy: '$lastUpdated.name',
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

		const peoples = await NpoModel.aggregate(aggregationPipeline);

		if (!peoples || peoples.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No people found',
				data: {},
			});
		}
		const [result] = peoples;
		return res.status(200).json({
			success: true,
			message: 'People data fetched',
			data: {
				peoples: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
