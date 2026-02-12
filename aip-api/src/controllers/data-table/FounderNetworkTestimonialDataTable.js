import { AuthModel } from '../../modals/AuthModel.js';
import { FounderNetworkModel } from '../../modals/FounderNetworkModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getFounderNetworkTestimonialData = async (req, res, next) => {
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
					path: '$testimonials',
				},
			},
			...(searchTerm
				? [
						{
							$match: {
								'testimonials.name': { $regex: searchTerm, $options: 'i' },
							},
						},
					]
				: []),
			{
				$lookup: {
					from: AuthModel.modelName,
					localField: 'testimonials.updatedBy',
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
					_id: '$testimonials._id',
					updatedBy: '$lastUpdated.name',
					name: '$testimonials.name',
					image: '$testimonials.image',
					designation: '$testimonials.designation',
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

		const testimonials = await FounderNetworkModel.aggregate(aggregationPipeline);

		if (!testimonials || testimonials.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No case studies Found',
				data: {},
			});
		}
		const [result] = testimonials;
		return res.status(200).json({
			success: true,
			message: 'Testimonials data fetched',
			data: {
				testimonials: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
