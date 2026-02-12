import mongoose from 'mongoose';

const authSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: false,
		},
		phoneNumber: {
			type: String,
			required: false,
		},
		deletedAt: {
			type: Date,
			required: false,
		},
	},
	{ timestamps: true },
);

export const AuthModel = mongoose.model('admins', authSchema);
