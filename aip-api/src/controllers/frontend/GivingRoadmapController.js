import { GivingRoadmapModel } from '../../modals/GivingRoadmapModal.js';
import { serverError } from '../../utils/errorHandler.js';

export const givingRoadmap = async (req, res, next) => {
	try {
		const givingRoadmap = (
			await GivingRoadmapModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},
				{
					$project: {
						isLink: 1,
						isFile: 1,
						file: 1,
						link: 1,
					},
				},
			])
		).at(0);
		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: givingRoadmap,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
