/* eslint-disable camelcase */
import { CuratedResourcesModel } from '../../modals/AipCuratedModal.js';
import { AipImpactCasestudiesModel } from '../../modals/AipImpactCasestudiesModel.js';
import { AipResourcesModel } from '../../modals/AipResourceModal.js';
import { AipTeamModel } from '../../modals/AipTeamModal.js';
import { CollaborationModel } from '../../modals/CollaborationModal.js';
import { FaqModel } from '../../modals/FaqModel.js';
import { FounderNetworkModel } from '../../modals/FounderNetworkModel.js';
import { NpoModel } from '../../modals/NpoModel.js';
import { PhilanthropistNetworkModel } from '../../modals/PhilanthropistNetworkModel.js';
import { ProjectAndProgramModel } from '../../modals/ProjectAndProgramsModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const search = async (req, res, next) => {
	try {
		const { key, type, field, page = 1, limit = 10 } = req.query;
		let { date } = req.query;
		if (date) {
			date = new Date(date);
		}
		const keywordFilter = key ? { searchKeywords: { $regex: key, $options: 'i' } } : {};
		const dateFilter = date ? { date: { date: { $eq: new Date(date) } } } : {};
		const typeOfContentFilter = type ? { typeOfContent: { $regex: type, $options: 'i' } } : {};
		const domainFilter = field ? { domain: { $regex: field, $options: 'i' } } : {};
		const fieldFilter = field ? { field: { $regex: field, $options: 'i' } } : {};

		const results = await Promise.all([
			CuratedResourcesModel.aggregate([
				{ $match: { deletedAt: null, ...keywordFilter, ...dateFilter, ...typeOfContentFilter, ...domainFilter } },
				{ $project: { title: 1, image: 1, description: 1 } },
			]).then((data) => data.map((item) => ({ ...item, key: 'curatedResource' }))),
			AipImpactCasestudiesModel.aggregate([
				{ $match: { deletedAt: null, ...(key && { 'casestudies.searchKeywords': keywordFilter.searchKeywords }) } },
				{ $unwind: '$casestudies' },
				{
					$project: {
						title: '$casestudies.philanthropistName',
						initiativeName: '$casestudies.initiativeName',
						description: '$casestudies.description',
						image: '$casestudies.image',
					},
				},
			]).then((data) => data.map((item) => ({ ...item, key: 'aipImpactCasestudies' }))),
			AipImpactCasestudiesModel.aggregate([
				{ $match: { deletedAt: null, ...(key && { 'people.searchKeywords': keywordFilter.searchKeywords }) } },
				{ $unwind: '$people' },
				{ $project: { title: '$people.name', description: '$people.designation', image: '$people.image' } },
			]).then((data) => data.map((item) => ({ ...item, key: 'aipImpactPeople' }))),
			AipImpactCasestudiesModel.aggregate([
				{ $match: { deletedAt: null, ...(key && { 'testimonials.searchKeywords': keywordFilter.searchKeywords }) } },
				{ $unwind: '$testimonials' },
				{
					$project: {
						title: '$testimonials.name',
						description: '$testimonials.description',
						image: '$testimonials.image',
					},
				},
			]).then((data) => data.map((item) => ({ ...item, key: 'aipImpactTestimonials' }))),
			NpoModel.aggregate([
				{ $match: { deletedAt: null, ...(key && { 'casestudies.searchKeywords': keywordFilter.searchKeywords }) } },
				{ $unwind: '$casestudies' },
				{
					$project: {
						title: '$casestudies.title',
						image: '$casestudies.image',
						description: '$casestudies.description',
					},
				},
			]).then((data) => data.map((item) => ({ ...item, key: 'npoCasestudies' }))),
			NpoModel.aggregate([
				{ $match: { deletedAt: null, ...(key && { 'people.searchKeywords': keywordFilter.searchKeywords }) } },
				{ $unwind: '$people' },
				{
					$project: {
						title: '$people.name',
						description: '$people.description',
						designation: '$people.designation',
						image: '$people.image',
					},
				},
			]).then((data) => data.map((item) => ({ ...item, key: 'npoPeople' }))),
			PhilanthropistNetworkModel.aggregate([
				{ $match: { deletedAt: null, ...(key && { 'casestudies.searchKeywords': keywordFilter.searchKeywords }) } },
				{ $unwind: '$casestudies' },
				{
					$project: {
						title: '$casestudies.title',
						organisationName: '$casestudies.organisationName',
						description: '$casestudies.description',
						image: '$casestudies.image',
					},
				},
			]).then((data) => data.map((item) => ({ ...item, key: 'philanthropistNetworkCasestudies' }))),
			PhilanthropistNetworkModel.aggregate([
				{ $match: { deletedAt: null, ...(key && { 'people.searchKeywords': keywordFilter.searchKeywords }) } },
				{ $unwind: '$people' },
				{ $project: { title: '$people.name', image: '$people.image', description: '$people.designation' } },
			]).then((data) => data.map((item) => ({ ...item, key: 'philanthropistNetworkPeople' }))),
			FounderNetworkModel.aggregate([
				{ $match: { deletedAt: null, ...(key && { 'testimonials.searchKeywords': keywordFilter.searchKeywords }) } },
				{ $unwind: '$testimonials' },
				{
					$project: {
						name: '$testimonials.name',
						designation: '$testimonials.designation',
						description: '$testimonials.description',
					},
				},
			]).then((data) => data.map((item) => ({ ...item, key: 'founderNetworkTestimonials' }))),
			FounderNetworkModel.aggregate([
				{
					$match: { deletedAt: null, ...(key && { 'methodsOfJoining.searchKeywords': keywordFilter.searchKeywords }) },
				},
				{ $unwind: '$methodsOfJoining' },
				{
					$project: {
						name: '$methodsOfJoining.name',
						description: '$methodsOfJoining.designation',
						image: '$methodsOfJoining.image',
					},
				},
			]).then((data) => data.map((item) => ({ ...item, key: 'founderNetworkMethods' }))),
			AipResourcesModel.aggregate([
				{ $match: { deletedAt: null, ...keywordFilter, ...dateFilter, ...typeOfContentFilter, ...domainFilter } },
				{ $project: { title: 1, image: 1, description: 1 } },
			]).then((data) => data.map((item) => ({ ...item, key: 'aipResource' }))),
			AipTeamModel.aggregate([
				{ $match: { deletedAt: null, ...keywordFilter } },
				{ $project: { name: 1, image: 1, description: 1 } },
			]).then((data) => data.map((item) => ({ ...item, key: 'aipTeam' }))),
			CollaborationModel.aggregate([
				{ $match: { deletedAt: null, ...keywordFilter, ...dateFilter, ...typeOfContentFilter } },
				{ $project: { title: 1, image: 1, description: 1 } },
			]).then((data) => data.map((item) => ({ ...item, key: 'collaborations' }))),
			FaqModel.aggregate([
				{ $match: { deletedAt: null, ...keywordFilter } },
				{ $project: { question: 1, answer: 1 } },
			]).then((data) => data.map((item) => ({ ...item, key: 'faqs' }))),
			ProjectAndProgramModel.aggregate([
				{ $match: { deletedAt: null, ...keywordFilter, ...dateFilter, ...typeOfContentFilter, ...fieldFilter } },
				{ $project: { title: 1, image: 1, description: 1 } },
			]).then((data) => data.map((item) => ({ ...item, key: 'projectAndPrograms' }))),
			ProjectAndProgramModel.aggregate([
				{
					$match: {
						deletedAt: null,
						...keywordFilter,
						...dateFilter,
						...typeOfContentFilter,
						...fieldFilter,
					},
				},
				{ $project: { 'gallery.galleryImages': 1, title: 1, description: 1 } },
			]).then((data) =>
				data.map((item) => ({
					title: item.title,
					description: item.description,
					galleryImages: item.gallery?.galleryImages || [],
					key: 'galleryImages',
				})),
			),
			ProjectAndProgramModel.aggregate([
				{
					$match: {
						deletedAt: null,
						...keywordFilter,
						...dateFilter,
						...typeOfContentFilter,
						...fieldFilter,
					},
				},
				{ $project: { 'gallery.galleryVideos': 1, title: 1, description: 1 } },
			]).then((data) =>
				data.map((item) => ({
					title: item.title,
					description: item.description,
					galleryVideos: item.gallery?.galleryVideos || [],
					key: 'galleryVideos',
				})),
			),
		]);

		const combinedResults = results.flat();

		const startIndex = (page - 1) * limit;
		const endIndex = startIndex + parseInt(limit);
		const paginatedResults = combinedResults.slice(startIndex, endIndex);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: paginatedResults,
			meta: {
				page: parseInt(page),
				limit: parseInt(limit),
				total: combinedResults.length, // Total number of results
			},
		});
	} catch (err) {
		return next(serverError(err));
	}
};
