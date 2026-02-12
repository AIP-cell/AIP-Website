import mongoose from 'mongoose';

const philanthropistNetworkSchema = new mongoose.Schema(
	{
		casestudies: [
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
				title: {
					type: String,
					required: false,
				},
				organisationName: {
					type: String,
					required: false,
				},
				description: {
					type: String,
					required: true,
				},
				isLinkOrPdf: {
					type: String,
					required: false,
				},
				file: {
					type: String,
					required: false,
				},
				fileLink: {
					type: String,
					required: false,
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
			},
		],
		people: [
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
				name: {
					type: String,
					required: false,
				},
				designation: {
					type: String,
					required: false,
				},
				image: {
					type: String,
					required: false,
				},
				isActive: {
					type: Boolean,
					default: true,
				},
				updatedBy: {
					type: mongoose.Types.ObjectId,
					required: false,
				},
				createdBy: {
					type: mongoose.Types.ObjectId,
					required: false,
				},
			},
		],
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

export const PhilanthropistNetworkModel = mongoose.model('philanthropist_network', philanthropistNetworkSchema);
