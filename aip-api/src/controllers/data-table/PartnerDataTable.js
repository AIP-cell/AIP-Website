import { AuthModel } from '../../modals/AuthModel.js';
import { PartnerModel } from '../../modals/PartnerModal.js';
import { serverError } from '../../utils/errorHandler.js';

export const getPartnerData = async (req, res, next) => {
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
					image: 1,
					name: 1,
					isActive: 1,
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
							$or: [{ name: { $regex: searchTerm, $options: 'i' } }],
						},
					],
				},
			});
		}

		const partners = await PartnerModel.aggregate(aggregationPipeline);

		if (!partners || partners.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No partner found',
				data: {},
			});
		}
		const [result] = partners;
		return res.status(200).json({
			success: true,
			message: 'Partner data fetched',
			data: {
				partners: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
