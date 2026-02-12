import { AuthModel } from '../../modals/AuthModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getUserData = async (req, res, next) => {
	try {
		const page = Math.abs(Number.parseInt(req.query.page) || 1);
		const pageSize = 15;
		const searchTerm = req.query.q;

		const aggregationPipeline = [
			{
				$match: { deletedAt: null, role: '2' },
			},
			{
				$sort: { createdAt: -1 },
			},
			{
				$project: {
					_id: 1,
					isActive: 1,
					name: 1,
					email: 1,
					phoneNumber: 1,
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

		const user = await AuthModel.aggregate(aggregationPipeline);

		if (!user || user.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No user found',
				data: {},
			});
		}
		const [result] = user;

		return res.status(200).json({
			success: true,
			message: 'User data fetched',
			data: {
				users: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
