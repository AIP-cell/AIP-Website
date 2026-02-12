import { NpoModel } from '../modals/NpoModel.js';

export const generateUniqueSlug = async (title) => {
	const baseSlug = title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
	let uniqueSlug = baseSlug;
	let suffix = 1;

	while (await NpoModel.findOne({ 'casestudies.slug': uniqueSlug })) {
		uniqueSlug = `${baseSlug}-${String(suffix).padStart(3, '0')}`;
		suffix++;
	}

	return uniqueSlug;
};

export const generateUniqueSlugForUpdate = async (title, excludeId) => {
	const baseSlug = title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
	let uniqueSlug = baseSlug;
	let suffix = 1;

	while (
		await NpoModel.findOne({
			'casestudies.slug': uniqueSlug,
			...(excludeId && { 'casestudies._id': { $ne: excludeId } }),
		})
	) {
		uniqueSlug = `${baseSlug}-${String(suffix).padStart(3, '0')}`;
		suffix++;
	}

	return uniqueSlug;
};
