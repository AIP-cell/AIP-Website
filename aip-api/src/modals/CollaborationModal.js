import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const collaborationSchema = new mongoose.Schema(
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
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: false,
		},
		// city: [
		// 	{
		// 		name: {
		// 			type: String,
		// 			required: true,
		// 		},
		// 		fromDate: {
		// 			type: Date,
		// 			required: true,
		// 		},
		// 		toDate: {
		// 			type: Date,
		// 			required: true,
		// 		},
		// 		time: {
		// 			type: Date,
		// 			required: true,
		// 		},
		// 		linkOrVideo: {
		// 			type: String,
		// 			required: true,
		// 		},
		// 		linkOrFile: {
		// 			type: String,
		// 			required: true,
		// 		},
		// 		video: {
		// 			type: String,
		// 			required: false,
		// 		},
		// 		videolink: {
		// 			type: String,
		// 			required: false,
		// 		},
		// 		filelink: {
		// 			type: String,
		// 			required: false,
		// 		},
		// 		partners: [
		// 			{
		// 				type: mongoose.Types.ObjectId,
		// 				required: true,
		// 			},
		// 		],
		// 		organisationDetails: [
		// 			{
		// 				image: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 				link: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 			},
		// 		],
		// 		catchupDetails: [
		// 			{
		// 				image: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 				link: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 			},
		// 		],
		// 		agendaDetails: [
		// 			{
		// 				title: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 				date: {
		// 					type: Date,
		// 					required: true,
		// 				},
		// 				fromTime: {
		// 					type: Date,
		// 					required: true,
		// 				},
		// 				toTime: {
		// 					type: Date,
		// 					required: true,
		// 				},
		// 				description: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 			},
		// 		],
		// 		media: [
		// 			{
		// 				date: {
		// 					type: Date,
		// 					required: true,
		// 				},
		// 				title: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 				link: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 				description: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 				image: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 			},
		// 		],
		// 		testimonials: [
		// 			{
		// 				title: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 				name: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 				image: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 				description: {
		// 					type: String,
		// 					required: true,
		// 				},
		// 			},
		// 		],
		// 		galleryImages: [
		// 			{
		// 				title: { type: String, required: false },
		// 				date: { type: Date, required: false },
		// 				image: { type: String, required: false },
		// 			},
		// 		],
		// 		galleryVideos: [
		// 			{
		// 				title: { type: String, required: false },
		// 				date: { type: Date, required: false },
		// 				video: { type: String, required: false },
		// 			},
		// 		],
		// 	},
		// ],
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

export const CollaborationModel = mongoose.model('collaborations', collaborationSchema);
