import { AipTeamModel } from '../modals/AipTeamModal.js';

export const getTeamMembers = async (key) => {
	const allowedKeys = ['coreFounder', 'founders', 'advisoryBoard', 'teamAIP', 'experts'];

	if (!allowedKeys.includes(key)) {
		throw new Error(`Invalid key provided. Allowed keys are: ${allowedKeys.join(', ')}`);
	}

	const pipeline = [
		{
			$match: {
				deletedAt: null,
				isActive: true,
				[key]: true,
			},
		},
		{
			$sort: {
				name: 1,
			},
		},
		{
			$project: {
				name: 1,
				designation: 1,
				description: 1,
				organisation: 1,
				quote: 1,
				slug: 1,
				image: 1,
				linkedin: '$linkedln',
				linkOrVideo: 1,
				videoLink: 1,
				video: 1,
			},
		},
	];

	return AipTeamModel.aggregate(pipeline);
};
