import { CuratedResourcesModel } from '../../modals/AipCuratedModal.js';
import { AipTeamModel } from '../../modals/AipTeamModal.js';
import { AuthModel } from '../../modals/AuthModel.js';
import { SelectedWorkModel } from '../../modals/SelectedWorkModal.js';
import { serverError } from '../../utils/errorHandler.js';

export const getSelectedWorkData = async (req, res, next) => {
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
					from: AipTeamModel.modelName,
					localField: 'expert',
					foreignField: '_id',
					as: 'experts',
				},
			},
			{
				$unwind: {
					path: '$experts',
				},
			},
			{
				$lookup: {
					from: CuratedResourcesModel.modelName,
					localField: 'curatedResource',
					foreignField: '_id',
					as: 'curatedResources',
				},
			},
			{
				$unwind: {
					path: '$experts',
				},
			},
			{
				$unwind: {
					path: '$curatedResources',
				},
			},
			...(searchTerm
				? [
						{
							$match: {
								'curatedResources.title': { $regex: searchTerm, $options: 'i' },
							},
						},
					]
				: []),
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
					curatedResource: '$curatedResources.title',
					expert: '$experts.name',
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

		const works = await SelectedWorkModel.aggregate(aggregationPipeline);

		if (!works || works.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No work found',
				data: {},
			});
		}
		const [result] = works;

		return res.status(200).json({
			success: true,
			message: 'Work data fetched',
			data: {
				works: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
