import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { getFilePath } from '../../utils/filePath.js';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { singleFileRemover } from '../../utils/fileRemover.js';
import { BookModel } from '../../modals/BooksModal.js';

export const addBooks = async (req, res, next) => {
	try {
		const { title, author, description, tags, buttons } = req.body;

		// if (!links) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'Link is mandatory',
		// 	});
		// }
		const { userId } = req.user;

		const formatedName = capitalizeFirstLetter(title);
		const formatedAuthor = capitalizeFirstLetter(author);

		const existingName = await BookModel.findOne({ name: formatedName, deletedAt: null });

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Blog already exists',
			});
		}
		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			}
		});

		await BookModel.create({
			title: title,

			buttons: buttons,
			author: formatedAuthor,
			description: description,

			searchKeywords: tags,
			image: image,
			createdBy: userId,
			updatedBy: userId,
			deletedAt: null,
		});

		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const deleteBooks = async (req, res, next) => {
	try {
		const bookId = req.params.id;

		const book = await BookModel.findOne({ _id: bookId });
		if (book.image) {
			singleFileRemover(book.image);
		}

		if (!book) {
			return res.status(404).json({
				success: false,
				message: 'Book not found',
			});
		}

		book.deletedAt = dayjs();
		await book.save();

		return res.status(200).json({
			success: true,
			message: 'Book data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getBookById = async (req, res, next) => {
	try {
		const bookId = req.params.id;

		const book = await BookModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(bookId),
					deletedAt: null,
				},
			},
		]);

		if (book.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Book data fetched',
				data: { book: book.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Book not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateBook = async (req, res, next) => {
	try {
		const bookId = req.params.id;

		const { title, author, description, tags, buttons } = req.body;

		const { userId } = req.user;
		// if (!links) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'Link is mandatory',
		// 	});
		// }

		const formatedName = capitalizeFirstLetter(title);
		const formatedAuthor = capitalizeFirstLetter(author);
		const existingBook = await BookModel.findOne({
			title: formatedName,
			_id: { $ne: bookId },
			deletedAt: null,
		});
		const book = await BookModel.findOne({
			_id: bookId,
			deletedAt: null,
		});

		if (existingBook) {
			return res.status(409).json({
				success: false,
				message: 'Book already exists',
			});
		}

		let image = req.body?.image;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(book.image);
					image = getFilePath(file);
				}
			});
		}

		book.title = formatedName;

		book.author = formatedAuthor;
		book.description = description;

		book.tags = tags;
		book.buttons = buttons;

		book.image = image;
		book.updatedBy = userId;

		await book.save();

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const bookStatusUpdate = async (req, res, next) => {
	try {
		const bookId = req.params.id;

		const currentBook = await BookModel.findOne({ _id: new mongoose.Types.ObjectId(bookId), deletedAt: null });

		if (!currentBook) {
			return res.status(404).json({
				success: false,
				message: 'Book not found',
			});
		}

		if (!currentBook.isActive) {
			await BookModel.updateMany({ deletedAt: null }, { $set: { isActive: false } });

			await BookModel.updateOne({ _id: new mongoose.Types.ObjectId(bookId) }, { $set: { isActive: true } });
		} else {
			await BookModel.updateOne({ _id: new mongoose.Types.ObjectId(bookId) }, { $set: { isActive: false } });
		}

		return res.status(200).json({
			success: true,
			message: 'Status updated.',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
