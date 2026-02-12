/* eslint-disable camelcase */
import { serverError } from '../../utils/errorHandler.js';
import { PartnerModel } from '../../modals/PartnerModal.js';
import { CollaborationModel } from '../../modals/CollaborationModal.js';
import { CollaborationCityModel } from '../../modals/CollaborationCityModel.js';
import mongoose from 'mongoose';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import { convertUtcToISTStage } from '../../utils/helperFunction.js';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export const getCollaboration = async (req, res, next) => {
	try {
		const { c_type, p_id } = req.query;

		let { date } = req.query;
		if (date) {
			date = dayjs(date, 'DD-MM-YY').tz('Asia/Kolkata').toDate();
		}

		const collaborations = await CollaborationModel.aggregate([
			{
				$match: {
					deletedAt: null,
					isActive: true,
					...(c_type && { typeOfContent: c_type }),
					...(date && { date: { $eq: new Date(date) } }),
				},
			},
			{
				$lookup: {
					from: CollaborationCityModel.modelName,
					localField: '_id',
					foreignField: 'collaborationId',
					as: 'cities',
					pipeline: [
						{
							$match: {
								...(p_id && { partners: new mongoose.Types.ObjectId(p_id) }),
								deletedAt: null,
							},
						},
						{
							$lookup: {
								from: PartnerModel.modelName,
								localField: 'partners',
								foreignField: '_id',
								as: 'partner',
								pipeline: [
									{
										$match: {
											deletedAt: null,
										},
									},
									{
										$project: {
											_id: 1,
											name: 1,
											image: 1,
										},
									},
								],
							},
						},
					],
				},
			},
			{
				$addFields: {
					uniquePartners: {
						$reduce: {
							input: '$cities.partner',
							initialValue: [],
							in: {
								$setUnion: ['$$value', '$$this'],
							},
						},
					},
				},
			},
			{
				$project: {
					_id: 1,
					title: 1,
					date: convertUtcToISTStage('date'),
					category: 1,
					slug: 1,
					description: 1,
					collaborations: '$uniquePartners',
				},
			},
		]);

		const partners = await PartnerModel.aggregate([
			{
				$match: {
					deletedAt: null,
				},
			},
			{
				$project: {
					name: 1,
					_id: 1,
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: { collaborations: collaborations, partners: partners },
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getOneCollaborations = async (req, res, next) => {
	try {
		const collaborationSlug = req.params.slug;

		const collaborations = (
			await CollaborationModel.aggregate([
				{
					$match: {
						isActive: true,
						deletedAt: null,
						slug: collaborationSlug,
					},
				},
				{
					$lookup: {
						from: CollaborationCityModel.modelName,
						localField: '_id',
						foreignField: 'collaborationId',
						as: 'cities',
						pipeline: [
							{
								$match: {
									deletedAt: null,
								},
							},
							{
								$lookup: {
									from: PartnerModel.modelName,
									localField: 'partners',
									foreignField: '_id',
									as: 'partner',
									pipeline: [
										{
											$match: {
												deletedAt: null,
											},
										},
										{
											$project: {
												image: 1,
												name: 1,
											},
										},
									],
								},
							},
							{
								$project: {
									name: 1,
									fromDate: 1,
									toDate: 1,
									time: 1,
									linkOrVideo: 1,
									report: 1,
									videoLink: 1,
									organisationDetails: 1,
									youtube: 1,
									twitter: 1,
									gallery: 1,
									agenda: 1,
									media: 1,
									testimonials: 1,
									video: 1,
									collaborations: '$partner',
								},
							},
						],
					},
				},
				{
					$project: {
						date: 1,
						title: 1,
						image: 1,
						category: 1,
						description: 1,
						cities: 1,
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: {
				collaboration: collaborations,
			},
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const getOneCollaborationGallery = async (req, res, next) => {
	try {
		const collaborationSlug = req.params.slug;
		const cityName = req.query.city;

		const gallery = (
			await CollaborationModel.aggregate([
				{
					$match: {
						isActive: true,
						deletedAt: null,
						slug: collaborationSlug,
					},
				},
				{
					$lookup: {
						from: CollaborationCityModel.modelName,
						localField: '_id',
						foreignField: 'collaborationId',
						as: 'cities',
						pipeline: [
							{
								$match: {
									deletedAt: null,
									name: cityName,
								},
							},

							{
								$project: {
									gallery: 1,
								},
							},
						],
					},
				},
				{
					$unwind: {
						path: '$cities',
					},
				},
				{
					$project: {
						_id: 0,
						title: 1,
						description: 1,
						gallery: '$cities.gallery',
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
