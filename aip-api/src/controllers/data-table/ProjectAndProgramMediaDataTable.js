import mongoose from 'mongoose';
import { ProjectAndProgramModel } from '../../modals/ProjectAndProgramsModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getProjectAndProgramMediaData = async (req, res, next) => {
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
				$unwind: '$media',
			},
			{
				$match: searchTerm
					? {
							$or: [
								{ 'media.title': { $regex: searchTerm, $options: 'i' } },
								// { 'media.description': { $regex: searchTerm, $options: 'i' } },
							],
						}
					: {},
			},
			{
				$sort: { 'media._id': -1 },
			},
			{
				$group: {
					_id: '$_id',
					media: { $push: '$media' },
				},
			},
			{
				$project: {
					_id: 1,
					media: 1,
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

		const media = await ProjectAndProgramModel.aggregate(aggregationPipeline);

		if (!media || media.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No media found',
				data: {},
			});
		}
		const [result] = media;

		return res.status(200).json({
			success: true,
			message: 'Media data fetched',
			data: {
				medias: result.paginatedResults.at(0)?.media,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
