import { CuratedResourcesModel } from '../../modals/AipCuratedModal.js';
import { AuthModel } from '../../modals/AuthModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getCuratedResourceData = async (req, res, next) => {
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
					category: 1,
					title: 1,
					isActive: 1,
					isFeatured: 1,
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
		if (searchTerm) {
			aggregationPipeline.unshift({
				$match: {
					$and: [
						{ deletedAt: null },
						{
							$or: [{ title: { $regex: searchTerm, $options: 'i' } }],
						},
					],
				},
			});
		}

		const resources = await CuratedResourcesModel.aggregate(aggregationPipeline);

		if (!resources || resources.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No resources found',
				data: {},
			});
		}
		const [result] = resources;

		return res.status(200).json({
			success: true,
			message: 'Resource data fetched',
			data: {
				resources: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
