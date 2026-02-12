import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import path from 'path';
import { PhilanthropistNetworkModel } from '../../modals/PhilanthropistNetworkModel.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addPhilanthropistNetworkCaestudies = async (req, res, next) => {
	try {
		const { title, organisationName, description, isLinkOrPdf, link, tags } = req.body;
		const { userId } = req.user;

		const filePaths = [];
		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			} else if (file.fieldname === 'file[]') {
				const filePath = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				filePaths.push(filePath);
			}
		});

		if (isLinkOrPdf === 'pdf' && !filePaths[0]) {
			return res.status(422).json({
				success: true,
				message: 'Pdf is mandatory',
			});
		}
		if (isLinkOrPdf === 'link' && !link) {
			return res.status(422).json({
				success: true,
				message: 'Link is mandatory',
			});
		}
		const formatedTitle = await capitalizeFirstLetter(title);
		const formatedOrganisationName = await capitalizeFirstLetter(organisationName);

		const caseStudyData = {
			title: formatedTitle,
			searchKeywords: tags,

			organisationName: formatedOrganisationName,
			createdBy: userId,
			updatedBy: userId,
			description: description,
			isLinkOrPdf: isLinkOrPdf,
			image: image,
		};

		if (isLinkOrPdf === 'pdf') {
			caseStudyData.file = filePaths[0];
		} else if (isLinkOrPdf === 'link') {
			caseStudyData.fileLink = link;
		}
		let network = await PhilanthropistNetworkModel.findOne();

		if (!network) {
			network = await PhilanthropistNetworkModel.create({
				casestudies: [caseStudyData],
			});
		} else {
			await PhilanthropistNetworkModel.updateOne(
				{},
				{
					$push: { casestudies: caseStudyData },
				},
			);
		}

		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const updatePhilanthropistNetworkCasestudies = async (req, res, next) => {
	try {
		const Id = req.params.id;

		const { userId } = req.user;

		const { title, organisationName, description, isLinkOrPdf, link, tags } = req.body;
		const casestudies = await PhilanthropistNetworkModel.findOne({ 'casestudies._id': Id, deletedAt: null });

		let filePath = req.body?.file;

		let image = req.body?.image;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(casestudies.casestudies.at(0).image);
					image = getFilePath(file);
				} else if (file.fieldname === 'file[]') {
					singleFileRemover(casestudies.casestudies.at(0).file);

					filePath = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				}
			});
		}
		if (isLinkOrPdf === 'pdf' && !filePath) {
			return res.status(422).json({
				success: true,
				message: 'Pdf is mandatory',
			});
		}
		if (isLinkOrPdf === 'link' && !link) {
			return res.status(422).json({
				success: true,
				message: 'Link is mandatory',
			});
		}
		const formatedTitle = await capitalizeFirstLetter(title);
		const formatedOrganisationName = await capitalizeFirstLetter(organisationName);
		const updateData = {
			'casestudies.$.title': formatedTitle,
			'casestudies.$.organisationName': formatedOrganisationName,
			'casestudies.$.description': description,
			'casestudies.$.isLinkOrPdf': isLinkOrPdf,
			'casestudies.$.image': image,
			'casestudies.$.updatedBy': userId,
			'casestudies.$.searchKeywords': tags,
		};

		if (isLinkOrPdf === 'pdf') {
			updateData['casestudies.$.file'] = filePath;
		} else if (isLinkOrPdf === 'link') {
			updateData['casestudies.$.fileLink'] = link;
		}

		const unsetData = {};
		if (isLinkOrPdf === 'pdf') {
			unsetData['casestudies.$.fileLink'] = '';
		} else if (isLinkOrPdf === 'link') {
			unsetData['casestudies.$.file'] = '';
		}

		const result = await PhilanthropistNetworkModel.updateOne(
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

export const getCasestudiesById = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);
		const casestudies = await PhilanthropistNetworkModel.findOne(
			{
				casestudies: { $elemMatch: { _id: new mongoose.Types.ObjectId(Id) } },
			},
			{
				'casestudies.$': 1,
			},
		);
		if (!casestudies) {
			return {
				success: false,
				message: 'Casestudies not found',
			};
		}

		return res.status(200).json({
			success: true,
			message: 'Retrived successfully',
			data: { casestudies: casestudies.casestudies.at(0) },
		});
	} catch (error) {
		return serverError(error);
	}
};

export const deleteCasestudies = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const casestudies = await PhilanthropistNetworkModel.findOne({ 'casestudies._id': Id, deletedAt: null });
		if (casestudies.casestudies.at(0).image) {
			singleFileRemover(casestudies.casestudies.st(0).image);
		}
		if (casestudies.casestudies.at(0).file) {
			singleFileRemover(casestudies.casestudies.st(0).file);
		}
		const result = await PhilanthropistNetworkModel.updateOne(
			{ 'casestudies._id': Id },
			{ $pull: { casestudies: { _id: Id } } },
		);

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
