import { AuthModel } from '../../modals/AuthModel.js';
import { FinancialReportModel } from '../../modals/FinancialReportModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getFinancialReportData = async (req, res, next) => {
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
					name: 1,
					year: 1,
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
							$or: [{ name: { $regex: searchTerm, $options: 'i' } }],
						},
					],
				},
			});
		}

		const reports = await FinancialReportModel.aggregate(aggregationPipeline);

		if (!reports || reports.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No report found',
				data: {},
			});
		}
		const [result] = reports;

		return res.status(200).json({
			success: true,
			message: 'Report data fetched',
			data: {
				reports: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
