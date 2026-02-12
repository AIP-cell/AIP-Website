import mongoose from 'mongoose';

const informationSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		networkTeamName: {
			type: String,
			required: true,
		},
		networkTeamEmail: {
			type: String,
			required: true,
		},
		knowlwdgeTeamName: {
			type: String,
			required: true,
		},
		knowlwdgeTeamEmail: {
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

export const GeneralInformationModel = mongoose.model('general_informations', informationSchema);
