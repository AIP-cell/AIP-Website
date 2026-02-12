import { ContactUsFormModel } from '../../modals/ContactFormModal.js';
import { serverError } from '../../utils/errorHandler.js';

export const getContactData = async (req, res, next) => {
	try {
		const page = Math.abs(Number.parseInt(req.query.page) || 1);
		const pageSize = 15;
		const searchTerm = req.query.q;

		const aggregationPipeline = [
			{
				$match: { deletedAt: null },
			},
			{
				$sort: { createdAt: -1 },
			},
			{
				$facet: {
					paginatedResults: [{ $skip: (page - 1) * pageSize }, { $limit: pageSize }],
					totalCount: [
						{
							$count: 'count',
						},
					],
				},
			},
		];
		if (searchTerm) {
			aggregationPipeline.unshift({
				$match: {
					$and: [
						{ deletedAt: null },
						{
							$or: [{ name: { $regex: searchTerm, $options: 'i' } }],
						},
					],
				},
			});
		}

		const contact = await ContactUsFormModel.aggregate(aggregationPipeline);

		if (!contact || contact.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No contact found',
				data: {},
			});
		}
		const [result] = contact;
		return res.status(200).json({
			success: true,
			message: 'Contact form data fetched',
			data: {
				contacts: result.paginatedResults,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
