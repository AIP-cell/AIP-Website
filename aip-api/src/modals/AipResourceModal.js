import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const aipResourceSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			default: true,
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
			default: true,
		},
		domain: {
			type: String,
			default: true,
		},
		typeOfContent: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		date: {
			type: Date,
			required: true,
		},
		fileLink: {
			type: String,
			required: false,
		},
		linkOrFile: {
			type: String,
			required: true,
		},
		file: {
			type: String,
			required: false,
		},
		image: {
			type: String,
			required: false,
		},

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

export const AipResourcesModel = mongoose.model('aip_resources', aipResourceSchema);
