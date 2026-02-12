// import { CuratedResourcesModel } from '../../modals/AipCuratedModal.js';
import { AipTeamModel } from '../../modals/AipTeamModal.js';
// import { SelectedWorkModel } from '../../modals/SelectedWorkModal.js';
import { serverError } from '../../utils/errorHandler.js';
import { getTeamMembers } from '../../utils/teamAip.js';

export const teamAip = async (req, res, next) => {
	try {
		const { team } = req.params;
		const teamMembers = await getTeamMembers(team);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: teamMembers,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const getOneTeamAip = async (req, res, next) => {
	try {
		const teamSlug = req.params.slug;

		const team = await AipTeamModel.aggregate([
			{
				$match: {
					deletedAt: null,
					slug: teamSlug,
				},
			},
			{
				$project: {
					name: 1,
					designation: 1,
					slug: 1,
					description: 1,
					quote: 1,
					linkedln: 1,
					videoLink: 1,
					linkOrVideo: 1,
					videos: 1,
					twitter: 1,
					image: 1,
					video: 1,
					links: 1,
				},
			},
		]);
		// const selectedWorks = await AipTeamModel.aggregate([
		// 	{
		// 		$match: {
		// 			deletedAt: null,
		// 			slug: teamSlug,
		// 			experts: true,
		// 		},
		// 	},
		// 	{
		// 		$lookup: {
		// 			from: SelectedWorkModel.modelName,
		// 			localField: '_id',
		// 			foreignField: 'expert',
		// 			as: 'selectedWorks',
		// 		},
		// 	},
		// 	{
		// 		$unwind: {
		// 			path: '$selectedWorks',
		// 		},
		// 	},
		// 	{
		// 		$lookup: {
		// 			from: CuratedResourcesModel.modelName,
		// 			localField: 'selectedWorks.curatedResource',
		// 			foreignField: '_id',
		// 			as: 'curatedResource',
		// 		},
		// 	},
		// 	{
		// 		$unwind: {
		// 			path: '$curatedResource',
		// 		},
		// 	},
		// 	{
		// 		$project: {
		// 			name: 1,
		// 			title: '$curatedResource.title',
		// 			description: '$curatedResource.description',
		// 			image: '$curatedResource.image',
		// 			slug: '$curatedResource.slug',
		// 			category: '$curatedResource.category',
		// 			date: '$curatedResource.date',
		// 		},
		// 	},
		// ]);
		const teamFirst = team.at(0);

		// if (selectedWorks.length > 0 && team.length > 0) {
		// 	teamFirst.selectedWorks = selectedWorks;
		// }

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: {
				teams: teamFirst,
			},
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const getPeopleOfAip = async (req, res, next) => {
	try {
		const boardOfDirectors = await AipTeamModel.aggregate([
			{
				$match: {
					deletedAt: null,
					isActive: true,
					boardOfDirectors: true,
				},
			},
			{
				$project: {
					name: 1,
					designation: 1,
					slug: 1,
					quote: 1,
					linkedln: 1,
					videoLink: 1,
					linkOrVideo: 1,
					image: 1,
					video: 1,
				},
			},
		]);
		const teamAIP = await AipTeamModel.aggregate([
			{
				$match: {
					deletedAt: null,
					teamAIP: true,
				},
			},
			{
				$project: {
					name: 1,
					designation: 1,
					slug: 1,
					quote: 1,
					linkedln: 1,
					videoLink: 1,
					linkOrVideo: 1,
					image: 1,
					video: 1,
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: {
				boardOfDirectors: boardOfDirectors,
				teamAIP: teamAIP,
			},
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const getAdvisoryBoard = async (req, res, next) => {
	try {
		const advisoryBoard = await AipTeamModel.aggregate([
			{
				$match: {
					deletedAt: null,
					isActive: true,
					advisoryBoard: true,
				},
			},
			{
				$project: {
					name: 1,
					designation: 1,
					slug: 1,
					quote: 1,
					linkedln: 1,
					videoLink: 1,
					linkOrVideo: 1,
					image: 1,
					video: 1,
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: {
				advisoryBoard: advisoryBoard,
			},
		});
	} catch (err) {
		return next(serverError(err));
	}
};
