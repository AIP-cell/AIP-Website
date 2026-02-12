import mongoose from 'mongoose';

const givingRoadmapSchema = new mongoose.Schema(
	{
		link: {
			type: String,
			required: false,
		},
		file: {
			type: String,
			required: false,
		},
		isLink: {
			type: Boolean,
			required: true,
		},
		isFile: {
			type: Boolean,
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
	},
	{ timestamps: true },
);

export const GivingRoadmapModel = mongoose.model('giving_roadmaps', givingRoadmapSchema);
