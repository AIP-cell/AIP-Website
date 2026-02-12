import { OurValuesModel } from '../../modals/OurValuesModal.js';
import { serverError } from '../../utils/errorHandler.js';

export const aipJourney = async (req, res, next) => {
	try {
		const ourValues = await OurValuesModel.aggregate([
			{
				$match: {
					deletedAt: null,
					isActive: true,
				},
			},
			{
				$project: {
					description: 1,
					title1: 1,
					title2: 1,
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: { ourValues: ourValues },
		});
	} catch (err) {
		return next(serverError(err));
	}
};
