/* eslint-disable camelcase */
import { AipResourcesModel } from '../../modals/AipResourceModal.js';
import { CollaborationModel } from '../../modals/CollaborationModal.js';
import { CollaborationCityModel } from '../../modals/CollaborationCityModel.js';
import { serverError } from '../../utils/errorHandler.js';
import { ProjectAndProgramModel } from '../../modals/ProjectAndProgramsModel.js';
import { CuratedResourcesModel } from '../../modals/AipCuratedModal.js';
import { NpoModel } from '../../modals/NpoModel.js';
import { camelCaseToReadable } from '../../utils/camelCase.js';
import { convertUtcToISTStage } from '../../utils/helperFunction.js';
import { GalleryModel } from '../../modals/GalleryModal.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

import customParseFormat from 'dayjs/plugin/customParseFormat.js';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

function toCamelCase(str) {
	return str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : '')).replace(/^(.)/, (m) => m.toLowerCase());
}

export const getAipResource = async (req, res, next) => {
	try {
		const { category, c_type, domain } = req.query;

		let c_typeCamel;
		let domainCamel;
		if (c_type) {
			c_typeCamel = toCamelCase(c_type);
		}
		if (domain) {
			domainCamel = toCamelCase(domain);
		}
		let { date } = req.query;

		if (date) {
			date = dayjs(date, 'DD-MM-YY').tz('Asia/Kolkata').toDate();
		}
		const tenDaysAgo = new Date();
		tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

		let aipResources = [];
		const expertPipeline = [];

		if (category === 'aipUpdates') {
			expertPipeline.push({
				$match: {
					date: { $gte: tenDaysAgo },
				},
			});
		}

		if (category === 'gallery') {
			const collaboration = await CollaborationCityModel.aggregate([
				{
					$match: { deletedAt: null, isActive: true },
				},
				{
					$lookup: {
						from: CollaborationModel.modelName,
						localField: 'collaborationId',
						foreignField: '_id',
						as: 'collaborationDetails',
						pipeline: [
							{
								$match: {
									deletedAt: null,
									// ...(c_type && { typeOfContent: c_type }),
								},
							},
						],
					},
				},
				{
					$unwind: '$collaborationDetails',
				},
				{
					$project: {
						city: '$name',
						title: '$collaborationDetails.title',
						description: '$collaborationDetails.description',
						image: '$collaborationDetails.image',
						slug: '$collaborationDetails.slug',
						galleryImages: '$gallery.galleryImages',
						galleryVideos: '$gallery.galleryVideos',
					},
				},
			]);
			const gallery = await GalleryModel.aggregate([
				{
					$match: { deletedAt: null, isActive: true },
				},

				{
					$project: {
						title: 1,
						description: 1,
						image: 1,
						slug: 1,
						galleryImages: '$gallery.galleryImages',
						galleryVideos: '$gallery.galleryVideos',
					},
				},
			]);

			const [projectAndPrograms, curated, npo] = await Promise.all([
				ProjectAndProgramModel.aggregate([
					{
						$match: {
							deletedAt: null,
							isActive: true,
							...(date && { date: { $eq: new Date(date) } }),
							...(c_type && { typeOfContent: c_type }),
							...(domain && domain !== 'All' && { field: domain }),
						},
					},
					{
						$sort: { date: -1 },
					},
					{
						$project: {
							title: 1,
							description: 1,
							image: 1,
							galleryImages: '$gallery.galleryImages',
							galleryVideos: '$gallery.galleryVideos',
							slug: 1,
						},
					},
				]).exec(),

				CuratedResourcesModel.aggregate([
					{
						$match: {
							deletedAt: null,
							isActive: true,
							...(date && { date: { $eq: new Date(date) } }),
							...(c_typeCamel && { typeOfContent: c_typeCamel }),
							...(domainCamel && domain !== 'All' && { domain: domainCamel }),
						},
					},
					{
						$sort: { date: -1 },
					},
					{
						$project: {
							title: 1,
							description: 1,
							image: 1,
							galleryVideos: 1,
							galleryImages: 1,
							slug: 1,
						},
					},
				]).exec(),

				NpoModel.aggregate([
					{
						$match: { deletedAt: null },
					},
					{
						$unwind: {
							path: '$casestudies',
						},
					},
					{
						$project: {
							title: '$casestudies.title',
							description: '$casestudies.description',
							image: '$casestudies.image',
							galleryImages: '$casestudies.galleryImages',
							galleryVideos: '$casestudies.galleryVideos',
							slug: '$casestudies.slug',
						},
					},
				]).exec(),
			]);

			aipResources = [
				...collaboration
					.map((item) => ({ ...item, key: 'collaborations' }))
					.filter((item) => item.galleryVideos?.length || item.galleryImages?.length),

				...projectAndPrograms
					.map((item) => ({ ...item, key: 'projects-and-programs' }))
					.filter((item) => item.galleryVideos?.length || item.galleryImages?.length),
				...curated
					.map((item) => ({ ...item, key: 'curatedResource' }))
					.filter((item) => item.galleryVideos?.length || item.galleryImages?.length),
				...npo
					.map((item) => ({ ...item, key: 'npo' }))
					.filter((item) => item.galleryVideos?.length || item.galleryImages?.length),
				...gallery
					.map((item) => ({ ...item, key: 'gallery' }))
					.filter((item) => item.galleryVideos?.length || item.galleryImages?.length),
			];
		} else {
			aipResources = await AipResourcesModel.aggregate([
				{
					$match: {
						isActive: true,
						deletedAt: null,
						...(date && { date: { $eq: new Date(date) } }),
						...(c_type && { typeOfContent: c_type }),
						...(category && category !== 'aipUpdates' && { category }),
						...(domain && domain !== 'All' && { domain }),
					},
				},
				...expertPipeline,
				{
					$sort: {
						date: -1,
					},
				},
				{
					$project: {
						title: 1,
						image: 1,
						isLinkOrPdf: '$linkOrFile',
						fileLink: 1,
						file: 1,
						category: 1,
						description: 1,
						date: convertUtcToISTStage('date'),
						domain: 1,
						_id: 1,
					},
				},
			]);
		}
		const formattedResources = aipResources.map((resource) => {
			return {
				...resource,
				category: resource.category ? camelCaseToReadable(resource.category) : null,
			};
		});

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: formattedResources,
		});
	} catch (err) {
		console.error('Error fetching AIP resources:', err);
		return next(serverError(err));
	}
};
export const getOneAipResourceGallery = async (req, res, next) => {
	try {
		const { slug } = req.params;

		const gallery = (
			await GalleryModel.aggregate([
				{
					$match: { deletedAt: null, isActive: true, slug: slug },
				},

				{
					$project: {
						_id: 0,
						title: 1,
						description: 1,
						gallery: 1,
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: gallery,
		});
	} catch (err) {
		console.error('Error fetching AIP resources:', err);
		return next(serverError(err));
	}
};
