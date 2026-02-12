import mongoose from 'mongoose';

const careerTestimonials = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		designation: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
		image: {
			type: String,
			required: false,
		},
		videoLink: {
			type: String,
			required: false,
		},
		updatedBy: {
			type: mongoose.Types.ObjectId,
			required: false,
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			required: false,
		},
		deletedAt: {
			type: Date,
			required: false,
		},
	},
	{ timestamps: true },
);

export const CareerTestimonialModel = mongoose.model('careers_testimonials', careerTestimonials);
