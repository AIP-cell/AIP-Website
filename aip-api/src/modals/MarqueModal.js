import mongoose from 'mongoose';

const marqueSchema = new mongoose.Schema(
	{
		marque: {
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

export const MarqueModel = mongoose.model('marques', marqueSchema);
