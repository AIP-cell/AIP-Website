import { FaqModel } from '../../modals/FaqModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getAllfaq = async (req, res, next) => {
	try {
		const { category } = req.query;
		const faqs = await FaqModel.aggregate([
			{
				$match: {
					isActive: true,
					category: category,
					deletedAt: null,
				},
			},

			{
				$project: {
					question: 1,
					answer: 1,
					_id: 0,
				},
			},
		]);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: faqs,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
