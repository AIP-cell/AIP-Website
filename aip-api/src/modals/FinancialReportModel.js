import mongoose from 'mongoose';

const financialReportSchema = new mongoose.Schema(
	{
		year: {
			type: Date,
			required: true,
		},
		searchKeywords: {
			type: [
				{
					type: String,
					required: [true, 'please add the file path'],
				},
			],
			required: false,
		},
		report: {
			type: String,
			required: false,
		},
		name: {
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

export const FinancialReportModel = mongoose.model('financial_reports', financialReportSchema);
