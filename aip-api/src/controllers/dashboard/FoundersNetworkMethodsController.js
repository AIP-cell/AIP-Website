import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { FounderNetworkModel } from '../../modals/FounderNetworkModel.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addFoundersNetworkMethods = async (req, res, next) => {
	try {
		const { name, designation, email, tags } = req.body;

		const { userId } = req.user;

		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			}
		});

		const formattedName = await capitalizeFirstLetter(name);

		await FounderNetworkModel.updateOne(
			{},
			{
				$push: {
					methodsOfJoining: {
						name: formattedName,
						designation: designation,
						image: image,
						email: email,
						searchKeywords: tags,

						createdBy: userId,
						updatedBy: userId,
					},
				},
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

export const updateFounderNetworkMethods = async (req, res, next) => {
	try {
		const Id = req.params.id;
		const { userId } = req.user;

		const { name, designation, email, tags } = req.body;
		let images = req.body.image;

		const methods = await FounderNetworkModel.findOne({ 'methodsOfJoining._id': Id, deletedAt: null });

		if (req.files && Array.isArray(req.files) && req.files.length > 0) {
			req.files.forEach((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(methods.methodsOfJoining.at(0).image);
					images = getFilePath(file);
				}
			});
		}

		const formattedName = await capitalizeFirstLetter(name);

		const result = await FounderNetworkModel.updateOne(
			{ 'methodsOfJoining._id': new mongoose.Types.ObjectId(Id) },
			{
				$set: {
					'methodsOfJoining.$.name': formattedName,
					'methodsOfJoining.$.designation': designation,
					'methodsOfJoining.$.image': images,
					'methodsOfJoining.$.email': email,
					'methodsOfJoining.$.updatedBy': userId,
					'methodsOfJoining.$.searchKeywords': tags,
				},
			},
		);

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'Methods not found',
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

export const getMethodsById = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const methods = await FounderNetworkModel.findOne(
			{
				methodsOfJoining: { $elemMatch: { _id: new mongoose.Types.ObjectId(Id) } },
			},
			{
				'methodsOfJoining.$': 1,
			},
		);

		if (!methods) {
			return {
				success: false,
				message: 'Method not found',
			};
		}

		return res.status(200).json({
			success: true,
			message: 'Retrived successfully',
			data: { method: methods.methodsOfJoining.at(0) },
		});
	} catch (error) {
		return serverError(error);
	}
};

export const deleteMethods = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);
		const methods = await FounderNetworkModel.findOne({ 'methodsOfJoining._id': Id, deletedAt: null });

		if (methods.methodsOfJoining.at(0).image) {
			singleFileRemover(methods.methodsOfJoining.at(0).image);
		}

		const result = await FounderNetworkModel.updateOne(
			{ 'methodsOfJoining._id': Id },
			{ $pull: { methodsOfJoining: { _id: Id } } },
		);

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'No methods found with the given ID',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Methods successfully deleted',
		});
	} catch (err) {
		console.error('Error deleting:', err);

		return res.status(500).json({
			success: false,
			message: 'An error occurred while deleting the person',
		});
	}
};
