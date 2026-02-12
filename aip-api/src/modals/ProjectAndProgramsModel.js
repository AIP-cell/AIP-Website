import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const projectAndProgramsSchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		typeOfContent: {
			type: String,
			required: true,
		},
		field: {
			type: String,
			required: true,
		},
		organisation: {
			type: String,
			required: false,
		},
		partners: [
			{
				type: mongoose.Types.ObjectId,
				required: false,
			},
		],
		description: {
			type: String,
			required: true,
		},
		report: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: false,
		},
		media: [
			{
				date: {
					type: Date,
					required: true,
				},
				title: {
					type: String,
					required: true,
				},
				link: {
					type: String,
					required: true,
				},
				description: {
					type: String,
					required: true,
				},
				image: {
					type: String,
					required: false,
				},
			},
		],
		testimonials: [
			{
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
			},
		],
		gallery: {
			galleryImages: [
				{
					title: { type: String, required: false },
					date: { type: Date, required: false },
					image: { type: String, required: false },
				},
			],
			galleryVideos: [
				{
					title: { type: String, required: false },
					date: { type: Date, required: false },
					linkOrVideo: { type: String, required: false },
					link: { type: String, required: false },
					video: { type: String, required: false },
				},
			],
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
		slug: {
			type: String,
			slug: 'title',
			unique: true,
			slugPaddingSize: 3,
		},
	},
	{ timestamps: true },
);

export const ProjectAndProgramModel = mongoose.model('project_and_programs', projectAndProgramsSchema);
