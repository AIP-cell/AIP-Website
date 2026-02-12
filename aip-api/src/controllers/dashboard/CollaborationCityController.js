import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import path from 'path';
import { CollaborationCityModel } from '../../modals/CollaborationCityModel.js';
import { singleFileRemover } from '../../utils/fileRemover.js';
import { CollaborationModel } from '../../modals/CollaborationModal.js';

export const addCollaborationsCity = async (req, res, next) => {
	try {
		const { name, fromDate, toDate, time, organisationDetails, youtube, twitter, partners, linkOrVideo, videoLink } =
			req.body;

		const { userId } = req.user;

		const collaborationId = req.params.id;

		const formatedName = capitalizeFirstLetter(name);

		const existingName = await CollaborationCityModel.findOne({
			collaborationId: collaborationId,
			name: name,
			deletedAt: null,
		});

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'City already exists',
			});
		}

		let files;
		let video;

		req.files?.forEach((file) => {
			if (file.fieldname === 'file[]') {
				files = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
			} else if (file.fieldname === 'video') {
				video = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
			}
		});

		// if (!files) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'File is mandatory',
		// 	});
		// }

		if (linkOrVideo === 'Video' && !video) {
			return res.status(422).json({
				success: true,
				message: 'Video is mandatory',
			});
		}

		if (linkOrVideo === 'Link' && !videoLink) {
			return res.status(422).json({
				success: true,
				message: 'Video link is mandatory',
			});
		}

		req.files?.forEach((file) => {
			if (file.fieldname.startsWith('organisationDetails')) {
				const organisationLength = req.body.organisationDetails.length;
				for (let index = 0; index < organisationLength; index++) {
					if (file.fieldname.startsWith(`organisationDetails[${index}]`)) {
						organisationDetails.at(index).image = organisationDetails.at(index).image ?? '';
						const currentImage = organisationDetails.at(index).image;
						singleFileRemover(currentImage);
						organisationDetails.at(index).image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
					}
				}
			}
		});

		const createPayload = {
			collaborationId: collaborationId,
			name: formatedName,
			fromDate: fromDate,
			toDate: toDate,
			time: time,
			organisationDetails: organisationDetails,
			youtube: youtube,
			twitter: twitter,
			linkOrVideo: linkOrVideo,
			report: files,
			deletedAt: null,
		};

		if (Array.isArray(partners)) {
			createPayload.partners = partners;
		}

		if (linkOrVideo === 'Video') {
			createPayload.video = video;
		} else if (linkOrVideo === 'Link') {
			createPayload.videoLink = videoLink;
		}

		await CollaborationCityModel.create(createPayload);

		await CollaborationModel.updateOne(
			{ _id: collaborationId },
			{
				$set: { updatedBy: userId },
			},
		);

		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const deleteCollaborationCity = async (req, res, next) => {
	try {
		const cityId = req.params.id;

		const collaborations = await CollaborationCityModel.findOne({ _id: cityId });
		if (collaborations.report) {
			singleFileRemover(collaborations.report);
		}
		if (collaborations.video) {
			singleFileRemover(collaborations.video);
		}
		if (!collaborations) {
			return res.status(404).json({
				success: false,
				message: 'City not found',
			});
		}

		collaborations.deletedAt = dayjs();
		await collaborations.save();

		return res.status(200).json({
			success: true,
			message: 'City data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getCollaborationCityId = async (req, res, next) => {
	try {
		const collaborationId = req.params.id;

		const city = await CollaborationCityModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(collaborationId),
					deletedAt: null,
				},
			},
		]);

		if (city.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'City data fetched',
				data: { city: city.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Collaboration not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateCollaborationCity = async (req, res, next) => {
	try {
		const cityId = req.params.id;

		const { userId } = req.user;

		const { name, fromDate, toDate, time, organisationDetails, youtube, twitter, partners, linkOrVideo, videoLink } =
			req.body;

		const collaborations = await CollaborationCityModel.findOne({ _id: cityId, deletedAt: null });

		const city = await CollaborationCityModel.findOne({ _id: cityId, deletedAt: null });

		if (!city) {
			return res.status(404).json({
				success: false,
				message: 'City not found',
			});
		}

		const formatedName = capitalizeFirstLetter(name);

		const existingCity = await CollaborationCityModel.findOne({
			name: formatedName,
			collaborationId: city.collaborationId,
			_id: { $ne: cityId },
			deletedAt: null,
		});

		if (existingCity) {
			return res.status(409).json({
				success: false,
				message: 'City already exists',
			});
		}

		let files = req.body?.file;
		let video = req.body?.video;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'file[]') {
					singleFileRemover(collaborations.report);
					files = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				} else if (file.fieldname === 'video') {
					singleFileRemover(collaborations.video);
					video = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				}
			});
		}

		// if (!files) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'File is mandatory',
		// 	});
		// }

		if (linkOrVideo === 'Video' && !video) {
			return res.status(422).json({
				success: true,
				message: 'Video is mandatory',
			});
		}
		if (linkOrVideo === 'Link' && !videoLink) {
			return res.status(422).json({
				success: true,
				message: 'Vide link is mandatory',
			});
		}

		req.files?.forEach((file) => {
			if (file.fieldname.startsWith('organisationDetails')) {
				const organisationLength = req.body.organisationDetails.length;
				for (let index = 0; index < organisationLength; index++) {
					if (file.fieldname.startsWith(`organisationDetails[${index}]`)) {
						organisationDetails.at(index).image = organisationDetails.at(index).image ?? '';
						const currentImage = organisationDetails.at(index).image;
						singleFileRemover(currentImage);
						organisationDetails.at(index).image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
					}
				}
			}
		});

		city.fromDate = fromDate;
		city.name = name;
		city.toDate = toDate;
		city.time = time;
		city.organisationDetails = organisationDetails;
		city.twitter = twitter;
		city.youtube = youtube;
		city.partners = partners;
		city.linkOrVideo = linkOrVideo;
		city.updatedBy = userId;
		if (linkOrVideo === 'Video') {
			city.video = video;
			city.videoLink = null;
		} else if (linkOrVideo === 'Link') {
			city.videoLink = videoLink;
			city.video = null;
		}

		city.report = files;
		await city.save();

		await CollaborationModel.updateOne(
			{ _id: city.collaborationId },
			{
				$set: { updatedBy: userId },
			},
		);
		return res.status(200).json({
			success: true,
			message: 'Collaboration data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const collaborationCityStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await CollaborationCityModel.updateOne(
			{ _id: new mongoose.Types.ObjectId(req.params.id) },
			[
				{
					$set: {
						isActive: {
							$not: '$isActive',
						},
					},
				},
			],
			{
				new: true,
			},
		);

		return res.status(200).json({
			success: true,
			message: 'Status updated.',
			data: { updateStatus: updateStatus },
		});
	} catch (error) {
		return next(serverError(error));
	}
};
