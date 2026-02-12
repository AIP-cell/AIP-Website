import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: false,
		},
		link: {
			type: String,
			required: true,
		},
		updatedBy: {
			type: mongoose.Types.ObjectId,
			required: false,
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			required: false,
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

export const PartnerModel = mongoose.model('partners', partnerSchema);
