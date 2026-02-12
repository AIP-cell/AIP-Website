import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const aipCuratedSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		expert: {
			type: mongoose.Types.ObjectId,
			required: false,
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
		category: {
			type: String,
			required: true,
		},
		domain: {
			type: String,
			required: true,
		},
		typeOfContent: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: true,
		},
		organisation: {
			type: String,
			required: false,
		},
		videoLink: {
			type: String,
			required: false,
		},

		image: {
			type: String,
			required: false,
		},
		video: {
			type: String,
			required: false,
		},
		fileLink: {
			type: String,
			required: false,
		},
		linkOrFile: {
			type: String,
			required: true,
		},
		linkOrVideo: {
			type: String,
			required: false,
		},
		file: {
			type: String,
			required: false,
		},
		date: {
			type: Date,
			required: true,
		},
		links: [
			{
				link: {
					type: String,
					required: true,
				},
				name: {
					type: String,
					required: true,
				},
			},
		],
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
				video: { type: String, required: false },
			},
		],
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
		isFeatured: {
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

export const CuratedResourcesModel = mongoose.model('curated_resources', aipCuratedSchema);
