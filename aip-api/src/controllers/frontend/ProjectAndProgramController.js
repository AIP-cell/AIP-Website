/* eslint-disable camelcase */
import { serverError } from '../../utils/errorHandler.js';
import { ProjectAndProgramModel } from '../../modals/ProjectAndProgramsModel.js';
import { PartnerModel } from '../../modals/PartnerModal.js';

export const getProjectAndPrograms = async (req, res, next) => {
	try {
		const { c_type, o_type, domain } = req.query;

		console.log(c_type, o_type, domain);
		let { date } = req.query;
		if (date) {
			date = new Date(date);
		}
		const projectAndPrograms = await ProjectAndProgramModel.aggregate([
			{
				$match: {
					deletedAt: null,
					isActive: true,
					...(date && { date: { $eq: new Date(date) } }),
					...(c_type && { typeOfContent: c_type }),
					...(o_type && { organisation: o_type }),
					...(domain && { field: domain }),
				},
			},

			{
				$project: {
					title: 1,
					image: 1,
					description: 1,
					date: 1,
					domain: 1,
					slug: 1,
					_id: 1,
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: projectAndPrograms,
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getOneProjectAndPrograms = async (req, res, next) => {
	try {
		const projectSlug = req.params.slug;

		const projectAndProgram = (
			await ProjectAndProgramModel.aggregate([
				{
					$match: {
						isActive: true,
						deletedAt: null,
						slug: projectSlug,
					},
				},
				{
					$lookup: {
						from: PartnerModel.modelName,
						localField: 'partners',
						foreignField: '_id',
						as: 'partners',
					},
				},
				{
					$unwind: {
						path: '$partners',
						preserveNullAndEmptyArrays: true,
					},
				},
				{
					$project: {
						date: 1,
						title: 1,
						category: 1,
						'partners.name': 1,
						'partners.image': 1,
						'partners.link': 1,
						field: 1,
						image: 1,
						report: 1,
						media: 1,
						testimonials: 1,
						description: 1,

						gallery: 1,
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: {
				projectAndProgram: projectAndProgram,
			},
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const getOneProjectAndProgramsGallery = async (req, res, next) => {
	try {
		const projectSlug = req.params.slug;

		const gallery = (
			await ProjectAndProgramModel.aggregate([
				{
					$match: {
						isActive: true,
						deletedAt: null,
						slug: projectSlug,
					},
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
		return next(serverError(err));
	}
};
