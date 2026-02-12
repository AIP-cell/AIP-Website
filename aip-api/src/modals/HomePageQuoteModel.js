import mongoose from 'mongoose';

const homePageQuoteSchema = new mongoose.Schema(
	{
		coreFounder: {
			type: mongoose.Types.ObjectId,
			required: true,
		},
		quote: {
			type: String,
			required: true,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		updatedBy: {
			type: mongoose.Types.ObjectId,
			required: true,
		},
		deletedAt: {
			type: Date,
			required: false,
		},
	},
	{ timestamps: true },
);

export const HomePageQuoteModel = mongoose.model('home_page_quotes', homePageQuoteSchema);
