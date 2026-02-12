import mongoose from 'mongoose';

const founderNetworkSchema = new mongoose.Schema(
	{
		description1: {
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
		testimonials: [
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
				description: {
					type: String,
					required: false,
				},
				videoLink: {
					type: String,
					required: false,
				},
				linkOrVideo: {
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
				isActive: {
					type: Boolean,
					default: true,
				},
			},
		],
		methodsOfJoining: [
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
					required: true,
				},
				designation: {
					type: String,
					required: true,
				},
				email: {
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

export const FounderNetworkModel = mongoose.model('founder_networks', founderNetworkSchema);
