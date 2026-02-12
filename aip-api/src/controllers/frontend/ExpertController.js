import { CuratedResourcesModel } from '../../modals/AipCuratedModal.js';
import { AipTeamModel } from '../../modals/AipTeamModal.js';
import { SelectedWorkModel } from '../../modals/SelectedWorkModal.js';
import { serverError } from '../../utils/errorHandler.js';

export const getExpertPage = async (req, res, next) => {
	try {
		const experts = await AipTeamModel.aggregate([
			{
				$match: {
					deletedAt: null,
					isActive: true,
					experts: true,
				},
			},
			{
				$project: {
					name: 1,
					image: 1,
					organisation: 1,
				},
			},
		]);

		const selectedWorks = await AipTeamModel.aggregate([
			{
				$match: {
					deletedAt: null,
					experts: true,
				},
			},
			{
				$lookup: {
					from: SelectedWorkModel.modelName,
					localField: '_id',
					foreignField: 'expert',
					as: 'selectedWorks',
				},
			},
			{
				$unwind: {
					path: '$selectedWorks',
				},
			},
			{
				$lookup: {
					from: CuratedResourcesModel.modelName,
					localField: 'selectedWorks.curatedResource',
					foreignField: '_id',
					as: 'curatedResource',
				},
			},
			{
				$unwind: {
					path: '$curatedResource',
				},
			},
			{
				$project: {
					name: 1,
					title: '$curatedResource.title',
					description: '$curatedResource.description',
					image: '$curatedResource.image',
					slug: '$curatedResource.slug',
					category: '$curatedResource.category',
					date: '$curatedResource.date',
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: {
				experts: experts,
				selectedWorks: selectedWorks,
			},
		});
	} catch (err) {
		return next(serverError(err));
	}
};
