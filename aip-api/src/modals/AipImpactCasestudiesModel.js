import mongoose from 'mongoose';

const aipImpactCasestudiesSchema = new mongoose.Schema(
	{
		foundationFacts: {
			networkMembersCount: {
				type: Number,
				required: true,
			},
			coreFoundersCount: {
				type: Number,
				required: true,
			},
			knowledgeResourcesCount: {
				type: Number,
				required: true,
			},
			researchReportsCount: {
				type: Number,
				required: true,
			},

			purposefulEngagementsCount: {
				type: Number,
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
		},
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
				philanthropistName: {
					type: String,
					required: false,
				},
				foundationName: {
					type: String,
					required: false,
				},
				initiativeName: {
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

export const AipImpactCasestudiesModel = mongoose.model('aip_impacts', aipImpactCasestudiesSchema);
