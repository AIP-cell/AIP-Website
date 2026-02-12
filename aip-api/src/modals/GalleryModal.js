import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const gallerySchema = new mongoose.Schema(
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
		category: {
			type: String,
			required: false,
		},

		description: {
			type: String,
			required: false,
		},
		domain: {
			type: String,
			required: false,
		},
		typeOfContent: {
			type: String,
			required: false,
		},

		image: {
			type: String,
			required: false,
		},

		date: {
			type: Date,
			required: false,
		},
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

export const GalleryModel = mongoose.model('galleries', gallerySchema);
