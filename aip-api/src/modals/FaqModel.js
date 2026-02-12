import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema(
	{
		searchKeywords: {
			type: [
				{
					type: String,
					required: [true, 'please add the file path'],
				},
			],
			required: false,
		},
		category: {
			type: String,
			required: true,
		},
		question: {
			type: String,
			required: true,
		},
		answer: {
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

export const FaqModel = mongoose.model('faqs', faqSchema);
