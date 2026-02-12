import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { AipTeamModel } from '../../modals/AipTeamModal.js';
import { getFilePath } from '../../utils/filePath.js';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { singleFileRemover } from '../../utils/fileRemover.js';
import path from 'path';

export const addAipTeam = async (req, res, next) => {
	try {
		const {
			name,
			organisation,
			designation,
			description,
			linkedln,
			twitter,
			links,
			quote,
			tags,
			videos,

			coreFounder,
			founders,
			advisoryBoard,
			teamAIP,
			experts,
			boardOfDirectors,
		} = req.body;
		// if (!links) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'Link is mandatory',
		// 	});
		// }
		const { userId } = req.user;

		if (!coreFounder && !founders && !advisoryBoard && !teamAIP && !experts && !boardOfDirectors) {
			return res.status(422).json({
				success: false,
				message: 'At least one category is mandatory',
			});
		}

		const formatedName = capitalizeFirstLetter(name);

		const existingName = await AipTeamModel.findOne({ name: formatedName, deletedAt: null });

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Team member already exists',
			});
		}
		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			} else if (file.fieldname.startsWith('videos')) {
				const galleryLength = req.body.videos.length;
				for (let index = 0; index < galleryLength; index++) {
					if (file.fieldname.startsWith(`videos[${index}]`)) {
						const videoEntry = videos.at(index);

						if (videoEntry.linkOrVideo === 'video') {
							videoEntry.video = videoEntry.video ?? '';
							const currentVideo = videoEntry.video;
							singleFileRemover(currentVideo);
							videoEntry.video = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
						} else {
							videoEntry.link = videoEntry.linkOrVideo;
						}
					} else if (file.fieldname === 'image') {
						const imageEntry = videos.at(index);
						imageEntry.image = imageEntry.image ?? '';
						const currentImage = imageEntry.image;
						singleFileRemover(currentImage);
						imageEntry.image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
					}
				}
			}
		});

		const data = {
			name: name,
			designation: designation,
			description: description,
			linkedln: linkedln,
			videos: videos,
			links: links,
			twitter: twitter,
			image: image,
			organisation: organisation,
			quote: quote,
			coreFounder: coreFounder,
			founders: founders,
			advisoryBoard: advisoryBoard,
			teamAIP: teamAIP,
			experts: experts,
			createdBy: userId,
			searchKeywords: tags,
			boardOfDirectors: boardOfDirectors,
			updatedBy: userId,
			deletedAt: null,
		};

		await AipTeamModel.create(data);

		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const deleteTeam = async (req, res, next) => {
	try {
		const teamId = req.params.id;

		const team = await AipTeamModel.findOne({ _id: teamId });
		if (team.image) {
			singleFileRemover(team.image);
		}
		if (team.video) {
			singleFileRemover(team.video);
		}

		if (!team) {
			return res.status(404).json({
				success: false,
				message: 'Team not found',
			});
		}

		team.deletedAt = dayjs();
		await team.save();

		return res.status(200).json({
			success: true,
			message: 'Team data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getTeamById = async (req, res, next) => {
	try {
		const teamId = req.params.id;

		const team = await AipTeamModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(teamId),
					deletedAt: null,
				},
			},
		]);

		if (team.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Team data fetched',
				data: { team: team.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Team not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const getAllTeam = async (req, res, next) => {
	try {
		const team = await AipTeamModel.aggregate([
			{
				$match: {
					deletedAt: null,
					experts: true,
				},
			},
			{
				$project: {
					_id: 1,
					name: 1,
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Team data fetched',
			data: { teams: team },
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const getAllCoreFounder = async (req, res, next) => {
	try {
		const team = await AipTeamModel.aggregate([
			{
				$match: {
					deletedAt: null,
					coreFounder: true,
				},
			},
			{
				$project: {
					_id: 1,
					name: 1,
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Team data fetched',
			data: { teams: team },
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateTeam = async (req, res, next) => {
	try {
		const teamId = req.params.id;

		const {
			name,
			organisation,
			designation,
			description,
			linkedln,
			twitter,
			links,
			tags,
			videos,
			quote,

			coreFounder,
			founders,
			advisoryBoard,
			teamAIP,
			experts,
			boardOfDirectors,
		} = req.body;

		const { userId } = req.user;
		// if (!links) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'Link is mandatory',
		// 	});
		// }

		if (!coreFounder && !founders && !advisoryBoard && !teamAIP && !experts && !boardOfDirectors) {
			return res.status(422).json({
				success: false,
				message: 'At least one category is mandatory',
			});
		}
		const formatedName = capitalizeFirstLetter(name);
		const existingYear = await AipTeamModel.findOne({
			name: formatedName,
			_id: { $ne: teamId },
			deletedAt: null,
		});
		const aipTeam = await AipTeamModel.findOne({
			_id: teamId,
			deletedAt: null,
		});

		if (existingYear) {
			return res.status(409).json({
				success: false,
				message: 'Name already exists',
			});
		}

		let image = req.body?.image;
		console.log(req.files);
		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(aipTeam.image);
					image = getFilePath(file);
				} else if (file.fieldname.startsWith('videos')) {
					const galleryLength = req.body.videos.length;
					for (let index = 0; index < galleryLength; index++) {
						if (file.fieldname.startsWith(`videos[${index}][video]`)) {
							const videoEntry = videos.at(index);

							if (videoEntry.linkOrVideo === 'video') {
								videoEntry.video = videoEntry.video ?? '';
								const currentVideo = videoEntry.video;
								singleFileRemover(currentVideo);
								videoEntry.video = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
							} else {
								videoEntry.link = videoEntry.linkOrVideo;
							}
						} else if (file.fieldname.startsWith(`videos[${index}][image]`)) {
							const imageEntry = videos.at(index);
							imageEntry.image = imageEntry.image ?? '';
							const currentImage = imageEntry.image;
							singleFileRemover(currentImage);
							imageEntry.image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
						}
					}
				}
			});
		}

		const updateData = {
			name: name,
			coreFounder: coreFounder,
			founders: founders,
			boardOfDirectors: boardOfDirectors,
			advisoryBoard: advisoryBoard,
			teamAIP: teamAIP,
			experts: experts,
			searchKeywords: tags,
			organisation: organisation,
			designation: designation,
			description: description,
			linkedln: linkedln,
			links: links,
			videos: videos,

			twitter: twitter,
			image: image,
			quote: quote,
			updatedBy: userId,
		};

		const result = await AipTeamModel.updateOne(
			{ _id: new mongoose.Types.ObjectId(teamId) },
			{
				$set: updateData,
			},
		);
		if (!result) {
			return res.status(404).json({
				success: true,
				message: 'Team not found',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const teamStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await AipTeamModel.updateOne(
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
