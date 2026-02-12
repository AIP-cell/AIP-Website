import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const aipTeamSchema = new mongoose.Schema(
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
		coreFounder: {
			type: Boolean,
			default: false,
		},
		boardOfDirectors: {
			type: Boolean,
			default: false,
		},
		founders: {
			type: Boolean,
			default: false,
		},
		advisoryBoard: {
			type: Boolean,
			default: false,
		},
		teamAIP: {
			type: Boolean,
			default: false,
		},
		experts: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			required: false,
		},
		designation: {
			type: String,
			required: false,
		},
		organisation: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
		quote: {
			type: String,
			required: false,
		},
		linkedln: {
			type: String,
			required: false,
		},

		twitter: {
			type: String,
			required: false,
		},
		image: {
			type: String,
			required: false,
		},
		videos: [
			{
				title: { type: String, required: false },
				date: { type: Date, required: false },
				linkOrVideo: { type: String, required: false },
				link: { type: String, required: false },
				video: { type: String, required: false },
				image: { type: String, required: false },
			},
		],
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
			slug: 'name',
			unique: true,
			slugPaddingSize: 3,
		},
	},
	{ timestamps: true },
);

export const AipTeamModel = mongoose.model('aip_teams', aipTeamSchema);
