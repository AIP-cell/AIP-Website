import { AuthModel } from '../../modals/AuthModel.js';
import { FaqModel } from '../../modals/FaqModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getFaqData = async (req, res, next) => {
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
					category: 1,
					question: 1,
					updatedBy: '$lastUpdated.name',
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
		if (searchTerm) {
			aggregationPipeline.unshift({
				$match: {
					$and: [
						{ deletedAt: null },
						{
							$or: [{ question: { $regex: searchTerm, $options: 'i' } }],
						},
					],
				},
			});
		}

		const faq = await FaqModel.aggregate(aggregationPipeline);

		if (!faq || faq.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No faq found',
				data: {},
			});
		}
		const [result] = faq;

		return res.status(200).json({
			success: true,
			message: 'Faq data fetched',
			data: {
				faqs: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
