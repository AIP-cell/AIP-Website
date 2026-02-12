import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { CareerTestimonialModel } from '../../modals/CareerTestimonialModal.js';
import { getFilePath } from '../../utils/filePath.js';
import { fetchAndStoreData } from '../../utils/careers.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addTestimonials = async (req, res, next) => {
	try {
		const { name, designation, description, videoLink } = req.body;

		const { userId } = req.user;

		if (!name || !designation) {
			return res.status(422).json({
				success: true,
				message: 'Name and description is mandatory',
			});
		}

		const existingName = await CareerTestimonialModel.findOne({ name: name, deletedAt: null });

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Testimonial already exists',
			});
		}
		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			}
		});

		await CareerTestimonialModel.create({
			name: name,
			videoLink: videoLink,
			designation: designation,
			description: description,
			image: image,
			createdBy: userId,
			updatedBy: userId,
			deletedAt: null,
		});

		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const deleteTestimonial = async (req, res, next) => {
	try {
		const testimonialId = req.params.id;

		const testimonial = await CareerTestimonialModel.findOne({ _id: testimonialId });

		if (testimonial.image) {
			singleFileRemover(testimonial.image);
		}
		if (!testimonial) {
			return res.status(404).json({
				success: false,
				message: 'Testimonial not found',
			});
		}

		testimonial.deletedAt = dayjs();
		await testimonial.save();

		return res.status(200).json({
			success: true,
			message: 'Testimonial data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const syncCareers = async (req, res, next) => {
	try {
		await fetchAndStoreData();

		return res.status(200).json({
			success: true,
			message: 'Careers Synced',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getTestimonialById = async (req, res, next) => {
	try {
		const testimonialId = req.params.id;

		const testimonial = await CareerTestimonialModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(testimonialId),
					deletedAt: null,
				},
			},
		]);

		if (testimonial.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Testimonial data fetched',
				data: { testimonial: testimonial.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Testimonial not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateTestimonials = async (req, res, next) => {
	try {
		const testimonialId = req.params.id;

		const { userId } = req.user;

		const { name, designation, description, videoLink } = req.body;
		if (!name || !designation) {
			return res.status(422).json({
				success: true,
				message: 'Name and description is mandatory',
			});
		}

		const testimonial = await CareerTestimonialModel.findOne({ _id: testimonialId, deletedAt: null });

		const existingPartner = await CareerTestimonialModel.findOne({
			name: name,
			_id: { $ne: testimonialId },
			deletedAt: null,
		});

		if (existingPartner) {
			return res.status(409).json({
				success: false,
				message: 'Testimonial already exists',
			});
		}

		let image = req.body?.image;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(testimonial.image);
					image = getFilePath(file);
				}
			});
		}

		testimonial.name = name;
		testimonial.videoLink = videoLink;
		testimonial.image = image;
		testimonial.designation = designation;
		testimonial.description = description;
		testimonial.updatedBy = userId;

		await testimonial.save();

		return res.status(200).json({
			success: true,
			message: 'Work data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
