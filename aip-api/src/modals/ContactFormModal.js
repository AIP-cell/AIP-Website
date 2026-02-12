import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: false,
		},
		message: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		deletedAt: {
			type: Date,
			required: false,
		},
	},
	{ timestamps: true },
);

export const ContactUsFormModel = mongoose.model('contact_forms', contactUsSchema);
