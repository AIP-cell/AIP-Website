import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { AipImpactCasestudiesModel } from '../../modals/AipImpactCasestudiesModel.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addAipImpactPeople = async (req, res, next) => {
	try {
		const { name, designation, tags } = req.body;
		const { userId } = req.user;

		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			}
		});

		const formattedName = await capitalizeFirstLetter(name);

		await AipImpactCasestudiesModel.updateOne(
			{},
			{
				$push: {
					people: {
						name: formattedName,
						designation: designation,
						image: image,
						searchKeywords: tags,
						createdBy: userId,
						updatedBy: userId,
					},
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

export const updateAipImpactPeople = async (req, res, next) => {
	try {
		const Id = req.params.id;

		const { userId } = req.user;
		const { name, designation, tags } = req.body;
		let images = req.body.image;
		const people = await AipImpactCasestudiesModel.findOne({ 'people._id': Id, deletedAt: null });

		if (req.files && Array.isArray(req.files) && req.files.length > 0) {
			req.files.forEach((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(people.people.at(0).image);
					images = getFilePath(file);
				}
			});
		}

		const formattedName = await capitalizeFirstLetter(name);

		const result = await AipImpactCasestudiesModel.updateOne(
			{ 'people._id': new mongoose.Types.ObjectId(Id) },
			{
				$set: {
					'people.$.name': formattedName,
					'people.$.designation': designation,
					'people.$.image': images,
					'people.$.updatedBy': userId,
					'people.$.searchKeywords': tags,
				},
			},
		);

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'Person not found',
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

export const getPeopleById = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const people = await AipImpactCasestudiesModel.findOne(
			{
				people: { $elemMatch: { _id: new mongoose.Types.ObjectId(Id) } },
			},
			{
				'people.$': 1,
			},
		);

		if (!people) {
			return {
				success: false,
				message: 'People not found',
			};
		}

		return res.status(200).json({
			success: true,
			message: 'Retrived successfully',
			data: { people: people.people.at(0) },
		});
	} catch (error) {
		return serverError(error);
	}
};

export const deletePeople = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const people = await AipImpactCasestudiesModel.findOne({ 'people._id': Id, deletedAt: null });
		if (people.people.at(0).image) {
			singleFileRemover(people.people.at(0).image);
		}

		const result = await AipImpactCasestudiesModel.updateOne({ 'people._id': Id }, { $pull: { people: { _id: Id } } });

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'No person found with the given ID',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Person successfully deleted',
		});
	} catch (err) {
		console.error('Error deleting:', err);

		return res.status(500).json({
			success: false,
			message: 'An error occurred while deleting the person',
		});
	}
};
