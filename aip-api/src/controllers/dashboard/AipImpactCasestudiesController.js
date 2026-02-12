import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { AipImpactCasestudiesModel } from '../../modals/AipImpactCasestudiesModel.js';
import path from 'path';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addAipImpactCaestudies = async (req, res, next) => {
	try {
		const { userId } = req.user;
		const { philanthropistName, foundationName, initiativeName, description, isLinkOrPdf, tags, link } = req.body;
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
		const formatedphilanthropistName = await capitalizeFirstLetter(philanthropistName);
		const formatedfoundationName = await capitalizeFirstLetter(foundationName);
		const formatedinitiativeName = await capitalizeFirstLetter(initiativeName);

		const caseStudyData = {
			philanthropistName: formatedphilanthropistName,
			foundationName: formatedfoundationName,
			initiativeName: formatedinitiativeName,
			description: description,
			isLinkOrPdf: isLinkOrPdf,
			image: image,
			searchKeywords: tags,
			createdBy: userId,
			updatedBy: userId,
		};

		if (isLinkOrPdf === 'pdf') {
			caseStudyData.file = filePaths[0];
		} else if (isLinkOrPdf === 'link') {
			caseStudyData.fileLink = link;
		}

		await AipImpactCasestudiesModel.updateOne(
			{},
			{
				$push: {
					casestudies: caseStudyData,
				},
			},
			{
				upsert: true,
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
export const updateAipImpactCasestudies = async (req, res, next) => {
	try {
		const { userId } = req.user;

		const Id = req.params.id;

		const { philanthropistName, foundationName, initiativeName, description, isLinkOrPdf, tags, link } = req.body;

		let filePath = req.body?.file;

		let image = req.body?.image;

		const casestudies = await AipImpactCasestudiesModel.findOne({ 'casestudies._id': Id, deletedAt: null });

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
		const formatedphilanthropistName = await capitalizeFirstLetter(philanthropistName);
		const formatedfoundationName = await capitalizeFirstLetter(foundationName);
		const formatedinitiativeName = await capitalizeFirstLetter(initiativeName);
		const updateData = {
			'casestudies.$.philanthropistName': formatedphilanthropistName,
			'casestudies.$.foundationName': formatedfoundationName,
			'casestudies.$.initiativeName': formatedinitiativeName,
			'casestudies.$.description': description,
			'casestudies.$.isLinkOrPdf': isLinkOrPdf,
			'casestudies.$.image': image,
			'casestudies.$.searchKeywords': tags,
			'casestudies.$.updatedBy': userId,
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

		const result = await AipImpactCasestudiesModel.updateOne(
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
		const casestudies = await AipImpactCasestudiesModel.findOne(
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

		const casestudies = await AipImpactCasestudiesModel.findOne({ 'casestudies._id': Id, deletedAt: null });
		if (casestudies.casestudies.at(0).image) {
			singleFileRemover(casestudies.casestudies.at(0).image);
		}
		if (casestudies.casestudies.at(0).file) {
			singleFileRemover(casestudies.casestudies.at(0).file);
		}

		const result = await AipImpactCasestudiesModel.updateOne(
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
