import mongoose from 'mongoose';

const journeySoFarSchema = new mongoose.Schema(
	{
		description: {
			type: String,
			required: true,
		},
		image: {
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

export const JourneySoFarModel = mongoose.model('journey-so-far', journeySoFarSchema);
