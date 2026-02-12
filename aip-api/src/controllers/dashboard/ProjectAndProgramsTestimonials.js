import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { ProjectAndProgramModel } from '../../modals/ProjectAndProgramsModel.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addProjectTestimonials = async (req, res, next) => {
	try {
		const { name, designation, description } = req.body;
		const projectId = req.params.id;
		let image;

		const { userId } = req.user;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			}
		});

		const formattedName = await capitalizeFirstLetter(name);

		await ProjectAndProgramModel.updateOne(
			{ _id: projectId },
			{
				$push: {
					testimonials: {
						name: formattedName,
						designation: designation,
						image: image,
						description: description,
					},
				},
				$set: { updatedBy: userId, createdBy: userId },
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

export const updateProjectTestimonials = async (req, res, next) => {
	try {
		const Id = req.params.id;
		const { name, designation, description } = req.body;
		let images = req.body.image;

		const { userId } = req.user;

		const testimonials = await ProjectAndProgramModel.findOne({ 'testimonials._id': Id, deletedAt: null });

		// Check if new image files are uploaded
		if (req.files && Array.isArray(req.files) && req.files.length > 0) {
			req.files.forEach((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(testimonials.testimonials.at(0).image);
					images = getFilePath(file);
				}
			});
		}

		const formattedName = await capitalizeFirstLetter(name);

		const result = await ProjectAndProgramModel.updateOne(
			{ 'testimonials._id': new mongoose.Types.ObjectId(Id) },
			{
				$set: {
					'testimonials.$.name': formattedName,
					'testimonials.$.designation': designation,
					'testimonials.$.image': images,
					'testimonials.$.description': description,
					updatedBy: userId,
				},
			},
		);

		if (result.nModified === 0) {
			return res.status(404).json({
				success: false,
				message: 'Testimonials not found',
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

export const getTestimonialsById = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const testimonial = await ProjectAndProgramModel.findOne(
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

export const deleteTestimonials = async (req, res) => {
	try {
		const Id = new mongoose.Types.ObjectId(req.params.id);

		const testimonials = await ProjectAndProgramModel.findOne({ 'testimonials._id': Id, deletedAt: null });

		if (testimonials.testimonials.at(0).image) {
			singleFileRemover(testimonials.testimonials.at(0).image);
		}

		const result = await ProjectAndProgramModel.updateOne(
			{ 'testimonials._id': Id },
			{ $pull: { testimonials: { _id: Id } } },
		);

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
