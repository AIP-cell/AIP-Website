import { YearModel } from '../../modals/YearModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getYearData = async (req, res, next) => {
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
				$project: {
					_id: 1,
					year: 1,
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
							$or: [{ year: { $regex: searchTerm, $options: 'i' } }],
						},
					],
				},
			});
		}

		const year = await YearModel.aggregate(aggregationPipeline);

		if (!year || year.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No year found',
				data: {},
			});
		}
		const [result] = year;

		return res.status(200).json({
			success: true,
			message: 'Year data fetched',
			data: {
				years: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
