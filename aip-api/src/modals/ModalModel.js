import mongoose from 'mongoose';

const modalSchema = new mongoose.Schema(
	{
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
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
		deletedAt: {
			type: Date,
			required: false,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true },
);

export const ModalsModel = mongoose.model('modals', modalSchema);
