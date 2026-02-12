import mongoose from 'mongoose';

const selectedWorkSchema = new mongoose.Schema(
	{
		expert: {
			type: mongoose.Types.ObjectId,
			required: true,
		},
		curatedResource: {
			type: mongoose.Types.ObjectId,
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

export const SelectedWorkModel = mongoose.model('selected_works', selectedWorkSchema);
