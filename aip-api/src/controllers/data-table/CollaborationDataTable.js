import { AuthModel } from '../../modals/AuthModel.js';
import { CollaborationModel } from '../../modals/CollaborationModal.js';
import { serverError } from '../../utils/errorHandler.js';

export const getCollaborationData = async (req, res, next) => {
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
					_id: 1,
					isActive: 1,
					category: 1,
					title: 1,
					updatedBy: '$lastUpdated.name',
					image: 1,
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

		const collaboration = await CollaborationModel.aggregate(aggregationPipeline);

		if (!collaboration || collaboration.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No collaboration found',
				data: {},
			});
		}
		const [result] = collaboration;

		return res.status(200).json({
			success: true,
			message: 'Collaboration data fetched',
			data: {
				collaborations: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
