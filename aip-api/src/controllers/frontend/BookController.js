import { BookModel } from '../../modals/BooksModal.js';
import { serverError } from '../../utils/errorHandler.js';

export const getAllBooks = async (req, res, next) => {
	try {
		const books = await BookModel.aggregate([
			{
				$match: {
					deletedAt: null,
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
					image: 1,
					description: 1,
					author: 1,
					slug: 1,
				},
			},
		]);
		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: books,
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getOneBook = async (req, res, next) => {
	try {
		const bookSlug = req.params.slug;
		const book = (
			await BookModel.aggregate([
				{
					$match: {
						slug: bookSlug,
						deletedAt: null,
					},
				},
				{
					$project: {
						title: 1,
						image: 1,
						description: 1,
						author: 1,
						slug: 1,
						buttons: 1,
						updatedAt: 1,
						tags: '$searchKeywords',
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: book,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
