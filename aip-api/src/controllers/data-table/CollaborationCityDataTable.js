import mongoose from 'mongoose';
import { CollaborationCityModel } from '../../modals/CollaborationCityModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getCollaborationCityData = async (req, res, next) => {
	try {
		const page = Math.abs(Number.parseInt(req.query.page) || 1);
		const pageSize = 15;
		const searchTerm = req.query.q;
		const Id = req.query.id;

		const aggregationPipeline = [
			{
				$match: { deletedAt: null, collaborationId: new mongoose.Types.ObjectId(Id) },
			},
			{
				$sort: { createdAt: -1 },
			},
			{
				$project: {
					_id: 1,
					name: 1,
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

		const city = await CollaborationCityModel.aggregate(aggregationPipeline);

		if (!city || city.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No city found',
				data: {},
			});
		}
		const [result] = city;
		return res.status(200).json({
			success: true,
			message: 'City data fetched',
			data: {
				cities: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
