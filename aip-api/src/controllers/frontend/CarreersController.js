import { CareerOpenRolesModel } from '../../modals/CareerOpenRolesModal.js';
import { CareerTestimonialModel } from '../../modals/CareerTestimonialModal.js';
import { serverError } from '../../utils/errorHandler.js';

export const getAllCareers = async (req, res, next) => {
	try {
		const page = Math.abs(Number.parseInt(req.query.page) || 1);
		const pageSize = 10;

		const aggregationPipeline = [
			{
				$match: { organization_name: 'Accelerate Indian Philanthropy' },
			},
			{
				$sort: { createdAt: -1 },
			},
			{
				$project: {
					hash: 1,
					_id: 0,
					position_name: 1,
					description: 1,
					location_display: 1,
					career_page_url: {
						$concat: ['https://www.careers-page.com/the-convergence-foundation/job/', { $toString: '$hash' }, '/apply'],
					},
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

		const careers = await CareerOpenRolesModel.aggregate(aggregationPipeline);

		const [result] = careers;

		const totalCount = result.totalCount.at(0)?.count || 0;

		const pageCount = Math.ceil(totalCount / pageSize);

		return res.status(200).json({
			success: true,
			message: 'Jobs data fetched',
			data: {
				jobs: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
				pageCount: pageCount,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getCareerPage = async (req, res, next) => {
	try {
		const jobs = await CareerOpenRolesModel.aggregate([
			{ $match: { organization_name: 'Accelerate Indian Philanthropy' } },
			{
				$limit: 2,
			},
			{
				$project: {
					position_name: 1,
					description: 1,
					location_display: 1,

					hash: 1,
					_id: 0,
					career_page_url: {
						$concat: ['https://www.careers-page.com/the-convergence-foundation/job/', { $toString: '$hash' }, '/apply'],
					},
				},
			},
		]);
		const testimonials = await CareerTestimonialModel.aggregate([
			{
				$match: { deletedAt: null },
			},
			{
				$project: {
					name: 1,
					designation: 1,
					description: 1,
					videoLink: 1,
					image: 1,
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Jobs data fetched',
			data: { jobs: jobs, testimonials: testimonials },
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getCities = async (req, res, next) => {
	try {
		let cities = await CareerOpenRolesModel.aggregate([
			{
				$group: {
					_id: '$city',
				},
			},
			{
				$project: {
					city: '$_id',
					_id: 0,
				},
			},
		]);

		cities = cities.map((item) => item.city).filter((city) => city && city !== '');

		return res.status(200).json({
			success: true,
			message: 'Organisations data fetched',
			data: { cities: cities },
		});
	} catch (error) {
		return next(serverError(error));
	}
};
