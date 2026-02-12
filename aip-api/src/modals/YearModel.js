import mongoose from 'mongoose';

const yearSchema = new mongoose.Schema(
	{
		year: {
			type: Date,
			required: true,
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

export const YearModel = mongoose.model('years', yearSchema);
