/* eslint-disable camelcase */
import dayjs from 'dayjs';
import { GalleryModel } from '../../modals/GalleryModal.js';
import { serverError } from '../../utils/errorHandler.js';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export const getAllGallery = async (req, res, next) => {
	try {
		const { category, q, c_type, domain, date } = req.query;

		let dateFilter = {};
		if (date) {
			const startOfDay = dayjs(date, 'DD-MM-YY').tz('Asia/Kolkata').startOf('day').toDate();
			const endOfDay = dayjs(date, 'DD-MM-YY').tz('Asia/Kolkata').endOf('day').toDate();
			dateFilter = { date: { $gte: startOfDay, $lte: endOfDay } };
		}

		const keywordFilter = q
			? {
					$or: [
						{ searchKeywords: { $regex: q, $options: 'i' } },
						{ title: { $regex: q, $options: 'i' } },
						{ description: { $regex: q, $options: 'i' } },
					],
				}
			: {};

		const gallery = await GalleryModel.aggregate([
			{
				$match: {
					deletedAt: null,
					isActive: true,
					...dateFilter,
					...keywordFilter,
					...(category && { category }),
					...(c_type && c_type != 'All' && { typeOfContent: c_type }),
					...(domain && domain !== 'All' && { domain }),
				},
			},
			{
				$sort: {
					date: -1,
				},
			},
			{
				$project: {
					title: 1,
					description: 1,
					image: 1,
					slug: 1,
				},
			},
		]);


		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: gallery,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
