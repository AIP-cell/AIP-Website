/* eslint-disable camelcase */
import { CuratedResourcesModel } from '../../modals/AipCuratedModal.js';
import { serverError } from '../../utils/errorHandler.js';
import { AipTeamModel } from '../../modals/AipTeamModal.js';
import { camelCaseToReadable } from '../../utils/camelCase.js';

export const getAipCuratedResource = async (req, res, next) => {
	try {
		const { category, c_type, o_type, domain } = req.query;
		let { date } = req.query;
		if (date) {
			date = new Date(date);
		}
		const featuredPipeline = [];
		const expertPipeline = [];

		if (category === 'featured') {
			featuredPipeline.push({
				$match: {
					isFeatured: true,
				},
			});
		} else if (category === 'experts') {
			expertPipeline.push(
				{
					$match: {
						...(category && { category: category }),
					},
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
			);
		} else {
			featuredPipeline.push({
				$match: {
					...(category && { category: category }),
				},
			});
		}

		const aipResources = await CuratedResourcesModel.aggregate([
			{
				$match: {
					isActive: true,
					deletedAt: null,
					...(date && { date: { $eq: new Date(date) } }),
					...(c_type && { typeOfContent: c_type }),
					...(o_type && { organisation: o_type }),
					...(domain && { domain: domain }),
				},
			},
			...featuredPipeline,
			...expertPipeline,
			{
				$project: {
					title: 1,
					image: 1,
					category: 1,
					isLinkOrPdf: '$linkOrFile',
					fileLink: 1,
					file: 1,
					description: 1,
					date: 1,
					domain: 1,
					// slug: 1,
					expertName: '$experts.name',
					_id: 1,
				},
			},
		]);

		const formattedResources = aipResources.map((resource) => {
			return {
				...resource,
				domain: resource.domain ? camelCaseToReadable(resource.domain) : null,
				category: resource.category ? camelCaseToReadable(resource.category) : null,
			};
		});
		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: formattedResources,
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getOneAipCuratedResource = async (req, res, next) => {
	try {
		const resourceSlug = req.params.slug;
		// const existingData = await CuratedResourcesModel.findOne({ deletedAt: null, slug: resourceSlug });

		// const expertPipeline = [];

		// if (existingData.category === 'Experts') {
		// 	expertPipeline.push(
		// 		{
		// 			$lookup: {
		// 				from: AipTeamModel.modelName,
		// 				localField: 'expert',
		// 				foreignField: '_id',
		// 				as: 'experts',
		// 			},
		// 		},
		// 		{
		// 			$unwind: {
		// 				path: '$experts',
		// 			},
		// 		},
		// 	);
		// }

		const curatedResource = (
			await CuratedResourcesModel.aggregate([
				{
					$match: {
						isActive: true,
						deletedAt: null,
						slug: resourceSlug,
					},
				},
				// ...expertPipeline,
				{
					$project: {
						date: 1,
						title: 1,
						// expertName: '$experts.name',
						domain: 1,
						isLinkOrPdf: '$linkOrFile',
						typeOfContent: 1,
						linkOrVideo: 1,
						videoLink: 1,
						fileLink: 1,
						file: 1,
						video: 1,
						description: 1,
						links: 1,
						image: 1,
						galleryVideos: 1,
						galleryImages: 1,
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: {
				curatedResource: curatedResource,
			},
		});
	} catch (err) {
		return next(serverError(err));
	}
};
