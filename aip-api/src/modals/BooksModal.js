import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const bookSchema = new mongoose.Schema(
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

		author: {
			type: String,
			required: false,
		},
		twitter: {
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

		buttons: [
			{
				name: {
					type: String,
					required: false,
				},
				link: {
					type: String,
					required: false,
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
			default: false,
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

export const BookModel = mongoose.model('books', bookSchema);
