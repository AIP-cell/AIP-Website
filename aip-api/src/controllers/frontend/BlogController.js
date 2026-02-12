import { BlogsModel } from '../../modals/BlogsModel.js';
import { serverError } from '../../utils/errorHandler.js';
import { convertUtcToISTStage } from '../../utils/helperFunction.js';

export const getAllBlogs = async (req, res, next) => {
	try {
		const blogs = await BlogsModel.aggregate([
			{
				$match: {
					deletedAt: null,
					isActive: true,
				},
			},
			{
				$sort: {
					date: -1,
				},
			},
			{
				$project: {
					title: 1,
					image: 1,
					readingTime: 1,
					description: 1,
					shortDescription: 1,
					date: convertUtcToISTStage('date'),
					author: 1,
					slug: 1,
				},
			},
		]);
		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: blogs,
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getOneBlog = async (req, res, next) => {
	try {
		const blogSlug = req.params.slug;
		const blogs = (
			await BlogsModel.aggregate([
				{
					$match: {
						slug: blogSlug,
						deletedAt: null,
						isActive: true,
					},
				},
				{
					$project: {
						title: 1,
						image: 1,
						readingTime: 1,
						description: 1,
						date: 1,
						author: 1,
						slug: 1,
						twitter: 1,
						youtube: 1,
						linkedIn: 1,
						otherLink: 1,
						updatedAt: 1,
						tags: '$searchKeywords',
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: blogs,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
