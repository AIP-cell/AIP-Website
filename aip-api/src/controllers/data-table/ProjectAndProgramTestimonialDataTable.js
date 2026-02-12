import mongoose from 'mongoose';
import { ProjectAndProgramModel } from '../../modals/ProjectAndProgramsModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getProjectAndProgramTestimonialData = async (req, res, next) => {
	try {
		const page = Math.abs(Number.parseInt(req.query.page) || 1);
		const pageSize = 15;
		const searchTerm = req.query.q;
		const Id = req.query.id;

		const aggregationPipeline = [
			{
				$match: { deletedAt: null, _id: new mongoose.Types.ObjectId(Id) },
			},
			{
				$sort: { createdAt: -1 },
			},
			{
				$unwind: '$testimonials',
			},
			{
				$match: searchTerm
					? {
							$or: [
								{ 'testimonials.name': { $regex: searchTerm, $options: 'i' } },
								// { 'media.description': { $regex: searchTerm, $options: 'i' } },
							],
						}
					: {},
			},
			{
				$sort: { 'testimonials._id': -1 },
			},
			{
				$group: {
					_id: '$_id',
					testimonials: { $push: '$testimonials' },
				},
			},
			{
				$project: {
					_id: 1,
					testimonials: 1,
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

		const testimonials = await ProjectAndProgramModel.aggregate(aggregationPipeline);

		if (!testimonials || testimonials.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No testimonials found',
				data: {},
			});
		}
		const [result] = testimonials;
		return res.status(200).json({
			success: true,
			message: 'Testimonial data fetched',
			data: {
				testimonials: result.paginatedResults.at(0)?.testimonials,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
