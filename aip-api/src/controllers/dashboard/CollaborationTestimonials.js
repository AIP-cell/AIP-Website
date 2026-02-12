import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { CollaborationCityModel } from '../../modals/CollaborationCityModel.js';
import { CollaborationModel } from '../../modals/CollaborationModal.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addCollaborationTestimonials = async (req, res, next) => {
	try {
		const { name, designation, description } = req.body;
		const cityId = req.params.id;
		let image;

		const { userId } = req.user;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			}
		});

		const formattedName = await capitalizeFirstLetter(name);

		await CollaborationCityModel.updateOne(
			{ _id: cityId },
			{
				$push: {
					testimonials: {
						name: formattedName,
						designation: designation,
						image: image,
						description: description,
					},
				},
			},
		);

		const city = await CollaborationCityModel.findOne(
			{ _id: new mongoose.Types.ObjectId(cityId) },
			{ collaborationId: 1 },
		);
		if (city && city.collaborationId) {
			await CollaborationModel.updateOne(
				{ _id: city.collaborationId },
				{
					$set: { updatedBy: userId },
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

export const updateCollaborationTestimonials = async (req, res, next) => {
	try {
		const Id = req.params.id;
		const { name, designation, description } = req.body;
		let images = req.body.image;

		const { userId } = req.user;

		const testimonials = await CollaborationCityModel.findOne({ 'testimonials._id': Id, deletedAt: null });

		if (req.files && Array.isArray(req.files) && req.files.length > 0) {
			req.files.forEach((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(testimonials.testimonials.at(0).image);
					images = getFilePath(file);
				}
			});
		}

		const formattedName = await capitalizeFirstLetter(name);

		const result = await CollaborationCityModel.updateOne(
			{ 'testimonials._id': new mongoose.Types.ObjectId(Id) },
			{
				$set: {
					'testimonials.$.name': formattedName,
					'testimonials.$.designation': designation,
					'testimonials.$.image': images,
					'testimonials.$.description': description,
				},
			},
		);

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'Testimonials not found',
			});
		}

		const city = await CollaborationCityModel.findOne(
			{ 'testimonials._id': new mongoose.Types.ObjectId(Id) },
			{ collaborationId: 1 },
		);
		if (city && city.collaborationId) {
			await CollaborationModel.updateOne(
				{ _id: city.collaborationId },
				{
					$set: { updatedBy: userId },
				},
			);
		}

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getCollaborationById = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const testimonial = await CollaborationCityModel.findOne(
			{
				testimonials: { $elemMatch: { _id: new mongoose.Types.ObjectId(Id) } },
			},
			{
				'testimonials.$': 1,
			},
		);

		if (!testimonial) {
			return {
				success: false,
				message: 'Testimonial not found',
			};
		}

		return res.status(200).json({
			success: true,
			message: 'Retrived successfully',
			data: { testimonial: testimonial },
		});
	} catch (error) {
		return serverError(error);
	}
};

export const deleteCollaboration = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const testimonials = await CollaborationCityModel.findOne({ 'testimonials._id': Id, deletedAt: null });

		const result = await CollaborationCityModel.updateOne(
			{ 'testimonials._id': Id },
			{ $pull: { testimonials: { _id: Id } } },
		);

		if (testimonials.testimonials.at(0).image) {
			singleFileRemover(testimonials.testimonials.at(0).image);
		}

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'No testimonial found with the given ID',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Testimonial successfully deleted',
		});
	} catch (err) {
		console.error('Error deleting:', err);

		return res.status(500).json({
			success: false,
			message: 'An error occurred while deleting the person',
		});
	}
};
