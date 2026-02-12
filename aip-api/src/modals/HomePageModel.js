import mongoose from 'mongoose';

const homePageSchema = new mongoose.Schema(
	{
		coreFoundersCount: {
			type: Number,
			required: false,
		},
		foundersCount: {
			type: Number,
			required: false,
		},
		membersCount: {
			type: Number,
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

export const HomePageModel = mongoose.model('home_pages', homePageSchema);
