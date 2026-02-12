import { NpoModel } from '../../modals/NpoModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getNpo = async (req, res, next) => {
	try {
		const npos = (
			await NpoModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},
				{
					$project: {
						'casestudies.title': 1,
						'casestudies.organisation': 1,
						'casestudies.description': 1,
						// 'casestudies.isLinkOrPdf': 1,
						// 'casestudies.linkOrVideo': 1,
						// 'casestudies.file': 1,
						// 'casestudies.fileLink': 1,
						// 'casestudies.links': 1,
						// 'casestudies.videoLink': 1,
						// 'casestudies.video': 1,
						'casestudies.image': 1,

						'casestudies._id': 1,
						'casestudies.slug': 1,
						'people.name': 1,
						'people.designation': 1,
						'people.image': 1,
						'people._id': 1,
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: npos,
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getOneNpo = async (req, res, next) => {
	try {
		const npoSlug = req.params.slug;
		const npos = (
			await NpoModel.aggregate([
				{
					$unwind: '$casestudies',
				},
				{
					$match: {
						'casestudies.slug': npoSlug,
						deletedAt: null,
					},
				},
				{
					$project: {
						'casestudies.title': 1,
						'casestudies.organisation': 1,
						'casestudies.description': 1,
						'casestudies.isLinkOrPdf': 1,
						'casestudies.linkOrVideo': 1,
						'casestudies.file': 1,
						'casestudies.fileLink': 1,
						'casestudies.links': 1,
						'casestudies.videoLink': 1,
						'casestudies.video': 1,
						'casestudies.galleryVideos': 1,
						'casestudies.galleryImages': 1,
						'casestudies.image': 1,
						'casestudies._id': 1,
						'casestudies.slug': 1,
					},
				},
			])
		).at(0);

		if (!npos) {
			return res.status(200).json({
				success: false,
				message: 'No case studies found',
				data: {},
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: npos.casestudies,
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getOneNpoGallery = async (req, res, next) => {
	try {
		const npoSlug = req.params.slug;

		const npos = (
			await NpoModel.aggregate([
				{
					$unwind: '$casestudies',
				},
				{
					$match: {
						'casestudies.slug': npoSlug,
						deletedAt: null,
					},
				},
				{
					$project: {
						'casestudies.galleryVideos': 1,
						'casestudies.galleryImages': 1,
						'casestudies.title': 1,
						'casestudies.description': 1,
					},
				},
			])
		).at(0);

		if (!npos) {
			return res.status(200).json({
				success: false,
				message: 'No case studies found',
				data: {},
			});
		}

		const gallery = {
			galleryVideos: npos.casestudies.galleryVideos || [],
			galleryImages: npos.casestudies.galleryImages || [],
		};

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: {
				title: npos.casestudies.title,
				description: npos.casestudies.description,
				gallery,
			},
		});
	} catch (err) {
		return next(serverError(err));
	}
};
