import mongoose from 'mongoose';

const collaborationCitySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		collaborationId: {
			type: mongoose.Types.ObjectId,
			required: true,
		},
		fromDate: {
			type: Date,
			required: true,
		},
		toDate: {
			type: Date,
			required: true,
		},
		time: {
			type: Date,
			required: true,
		},
		linkOrVideo: {
			type: String,
			required: false,
		},
		video: {
			type: String,
			required: false,
		},
		youtube: {
			type: String,
			required: false,
		},
		twitter: {
			type: String,
			required: false,
		},
		report: {
			type: String,
			required: false,
		},
		videoLink: {
			type: String,
			required: false,
		},

		partners: [
			{
				type: mongoose.Types.ObjectId,
				required: false,
			},
		],
		organisationDetails: [
			{
				image: {
					type: String,
					required: true,
				},
				link: {
					type: String,
					required: true,
				},
			},
		],

		agenda: [
			{
				title: {
					type: String,
					required: true,
				},
				date: {
					type: Date,
					required: true,
				},
				fromTime: {
					type: Date,
					required: true,
				},
				toTime: {
					type: Date,
					required: true,
				},
				description: {
					type: String,
					required: true,
				},
			},
		],
		media: [
			{
				date: {
					type: Date,
					required: false,
				},
				title: {
					type: String,
					required: false,
				},
				link: {
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
		testimonials: [
			{
				designation: {
					type: String,
					required: true,
				},
				name: {
					type: String,
					required: true,
				},
				image: {
					type: String,
					required: false,
				},
				description: {
					type: String,
					required: true,
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

export const CollaborationCityModel = mongoose.model('collaborations_cities', collaborationCitySchema);
