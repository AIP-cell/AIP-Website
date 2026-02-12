import mongoose from 'mongoose';

const careerOpenRoles = new mongoose.Schema(
	{
		id: {
			type: Number,
			required: true,
		},
		hash: {
			type: String,
			required: true,
		},
		organization_name: {
			type: String,
			required: false,
		},
		position_name: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
		country: {
			type: String,
			required: false,
		},
		state: {
			type: String,
			required: false,
		},
		city: {
			type: String,
			required: false,
		},
		address: {
			type: String,
			required: false,
		},
		zipcode: {
			type: String,
			required: false,
		},
		location_display: {
			type: String,
			required: false,
		},
		is_salary_visible: {
			type: String,
			required: false,
		},
		is_remote: {
			type: Boolean,
			required: false,
		},
		contract_details: {
			type: String,
			required: false,
		},
		is_pinned_in_career_page: {
			type: Boolean,
			required: false,
		},
		deletedAt: {
			type: Date,
			required: false,
		},
	},
	{ timestamps: true },
);

export const CareerOpenRolesModel = mongoose.model('careers_open_roles', careerOpenRoles);
