import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { generateUniqueSlug, generateUniqueSlugForUpdate } from '../../utils/slug.js';
import path from 'path';
import { NpoModel } from '../../modals/NpoModel.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addNpoCaestudies = async (req, res, next) => {
	try {
		const {
			title,
			organisation,
			description,
			fileLink,
			linkOrVideo,
			videoLink,
			links,
			isLinkOrPdf,
			tags,
			galleryImage,
			galleryVideo,
		} = req.body;

		const filePaths = [];
		let image;
		let video;
		const { userId } = req.user;
		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			} else if (file.fieldname === 'file[]') {
				const filePath = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				filePaths.push(filePath);
			} else if (file.fieldname === 'video') {
				video = getFilePath(file);
			}
		});

		req.files?.forEach((file) => {
			if (file.fieldname.startsWith('galleryImage')) {
				const galleryLength = req.body.galleryImage.length;
				for (let index = 0; index < galleryLength; index++) {
					if (file.fieldname.startsWith(`galleryImage[${index}]`)) {
						galleryImage.at(index).image = galleryImage.at(index).image ?? '';
						const currentImage = galleryImage.at(index).image;
						singleFileRemover(currentImage);
						galleryImage.at(index).image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
					}
				}
			} else if (file.fieldname.startsWith('galleryVideo')) {
				const galleryLength = req.body.galleryImage.length;
				for (let index = 0; index < galleryLength; index++) {
					if (file.fieldname.startsWith(`galleryVideo[${index}]`)) {
						galleryVideo.at(index).video = galleryVideo.at(index).video ?? '';
						const currentVideo = galleryVideo.at(index).video;
						singleFileRemover(currentVideo);
						galleryVideo.at(index).video = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
					}
				}
			}
		});

		if (isLinkOrPdf == 'pdf' && !filePaths[0]) {
			return res.status(422).json({
				success: true,
				message: 'Pdf is mandatory',
			});
		}
		if (isLinkOrPdf == 'link' && !fileLink) {
			return res.status(422).json({
				success: true,
				message: 'Link is mandatory',
			});
		}
		if (linkOrVideo == 'Video' && !video) {
			return res.status(422).json({
				success: true,
				message: 'Video is mandatory',
			});
		}

		if (linkOrVideo == 'Link' && !videoLink) {
			return res.status(422).json({
				success: true,
				message: 'Link is mandatory',
			});
		}

		// if (!links) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'Links are mandatory',
		// 	});
		// }
		const formatedTitle = await capitalizeFirstLetter(title);
		const formatedOrganisationName = await capitalizeFirstLetter(organisation);

		const slug = await generateUniqueSlug(title);

		const caseStudyData = {
			title: formatedTitle,
			organisation: formatedOrganisationName,
			description: description,
			isLinkOrPdf: isLinkOrPdf,
			linkOrVideo: linkOrVideo,
			links: links,
			searchKeywords: tags,
			galleryImages: galleryImage,
			galleryVideos: galleryVideo,
			image: image,
			slug: slug,
			createdBy: userId,
			updatedBy: userId,
		};

		if (isLinkOrPdf === 'pdf') {
			caseStudyData.file = filePaths[0];
		} else if (isLinkOrPdf === 'link') {
			caseStudyData.fileLink = fileLink;
		}

		if (linkOrVideo === 'Video') {
			caseStudyData.video = video;
		} else if (linkOrVideo === 'Link') {
			caseStudyData.videoLink = videoLink;
		}

		const data = await NpoModel.updateOne(
			{},
			{
				$push: {
					casestudies: caseStudyData,
				},
			},
		);

		if (data.matchedCount == 0) {
			await NpoModel.create({
				casestudies: [caseStudyData],
			});
		}
		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const updateNpoCasestudies = async (req, res, next) => {
	try {
		const Id = req.params.id;

		const { userId } = req.user;

		const {
			title,
			organisation,
			description,
			fileLink,
			linkOrVideo,
			videoLink,
			links,
			isLinkOrPdf,
			tags,
			galleryImage,
			galleryVideo,
		} = req.body;
		const slug = await generateUniqueSlugForUpdate(title, Id);

		let filePath = req.body?.file;

		let image = req.body?.image;

		let video = req.body?.video;

		const casestudies = await NpoModel.findOne({ 'casestudies._id': Id, deletedAt: null });

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(casestudies.casestudies.at(0).image);
					image = getFilePath(file);
				} else if (file.fieldname === 'file[]') {
					singleFileRemover(casestudies.casestudies.at(0).file);

					filePath = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				} else if (file.fieldname === 'video') {
					singleFileRemover(casestudies.casestudies.at(0).video);

					video = getFilePath(file);
				}
			});
		}

		req.files?.forEach((file) => {
			if (file.fieldname.startsWith('galleryImage')) {
				const galleryLength = req.body.galleryImage.length;
				for (let index = 0; index < galleryLength; index++) {
					if (file.fieldname.startsWith(`galleryImage[${index}]`)) {
						galleryImage.at(index).image = galleryImage.at(index).image ?? '';
						const currentImage = galleryImage.at(index).image;
						singleFileRemover(currentImage);
						galleryImage.at(index).image = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
					}
				}
			} else if (file.fieldname.startsWith('galleryVideo')) {
				const galleryLength = req.body.galleryImage.length;
				for (let index = 0; index < galleryLength; index++) {
					if (file.fieldname.startsWith(`galleryVideo[${index}]`)) {
						galleryVideo.at(index).video = galleryVideo.at(index).video ?? '';
						const currentVideo = galleryVideo.at(index).video;
						singleFileRemover(currentVideo);
						galleryVideo.at(index).video = 'uploads' + file.path.split(path.sep + 'uploads').at(1);
					}
				}
			}
		});

		if (isLinkOrPdf == 'pdf' && !filePath[0]) {
			return res.status(422).json({
				success: true,
				message: 'Pdf is mandatory',
			});
		}
		if (isLinkOrPdf == 'link' && !fileLink) {
			return res.status(422).json({
				success: true,
				message: 'Link is mandatory',
			});
		}
		if (linkOrVideo == 'Video' && !video) {
			return res.status(422).json({
				success: true,
				message: 'Video is mandatory',
			});
		}
		if (linkOrVideo == 'Link' && !videoLink) {
			return res.status(422).json({
				success: true,
				message: 'Link is mandatory',
			});
		}
		// if (!links) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'Links are mandatory',
		// 	});
		// }

		const formatedTitle = await capitalizeFirstLetter(title);
		const formatedOrganisationName = await capitalizeFirstLetter(organisation);
		const updateData = {
			'casestudies.$.title': formatedTitle,
			'casestudies.$.organisation': formatedOrganisationName,
			'casestudies.$.description': description,
			'casestudies.$.isLinkOrPdf': isLinkOrPdf,
			'casestudies.$.linkOrVideo': linkOrVideo,
			'casestudies.$.image': image,
			'casestudies.$.links': links,
			'casestudies.$.galleryImages': galleryImage,
			'casestudies.$.galleryVideos': galleryVideo,
			'casestudies.$.updatedBy': userId,
			'casestudies.$.slug': slug,
			'casestudies.$.searchKeywords': tags,
		};

		if (isLinkOrPdf === 'pdf') {
			updateData['casestudies.$.file'] = filePath;
		} else if (isLinkOrPdf === 'link') {
			updateData['casestudies.$.fileLink'] = fileLink;
		}
		if (linkOrVideo === 'Video') {
			updateData['casestudies.$.video'] = video;
		} else if (linkOrVideo === 'Link') {
			updateData['casestudies.$.videoLink'] = videoLink;
		}

		const unsetData = {};
		if (isLinkOrPdf === 'pdf') {
			unsetData['casestudies.$.link'] = '';
		} else if (isLinkOrPdf === 'link') {
			unsetData['casestudies.$.file'] = '';
		}
		if (linkOrVideo === 'Video') {
			unsetData['casestudies.$.videoLink'] = '';
		} else if (isLinkOrPdf === 'Link') {
			unsetData['casestudies.$.video'] = '';
		}

		const result = await NpoModel.updateOne(
			{ 'casestudies._id': new mongoose.Types.ObjectId(Id) },
			{
				$set: updateData,
				$unset: unsetData,
			},
		);

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'Case studies not found',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getNpoById = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);
		const people = await NpoModel.findOne(
			{
				casestudies: { $elemMatch: { _id: new mongoose.Types.ObjectId(Id) } },
			},
			{
				'casestudies.$': 1,
			},
		);

		if (!people) {
			return {
				success: false,
				message: 'Casestudies not found',
			};
		}

		return res.status(200).json({
			success: true,
			message: 'Retrived successfully',
			data: { casestudies: people.casestudies.at(0) },
		});
	} catch (error) {
		return serverError(error);
	}
};

export const deleteNpo = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);
		const casestudies = await NpoModel.findOne({ 'casestudies._id': Id, deletedAt: null });
		if (casestudies.casestudies.at(0).image) {
			singleFileRemover(casestudies.casestudies.at(0).image);
		}
		if (casestudies.casestudies.at(0).file) {
			singleFileRemover(casestudies.casestudies.at(0).file);
		}
		if (casestudies.casestudies.at(0).video) {
			singleFileRemover(casestudies.casestudies.at(0).video);
		}
		const result = await NpoModel.updateOne({ 'casestudies._id': Id }, { $pull: { casestudies: { _id: Id } } });

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'No casestudies found with the given ID',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Data deleted',
		});
	} catch (err) {
		console.error('Error deleting:', err);

		return {
			success: false,
			message: 'An error occurred while deleting the category',
		};
	}
};
