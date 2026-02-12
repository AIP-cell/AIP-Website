import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { FaqModel } from '../../modals/FaqModel.js';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';

export const addFaq = async (req, res, next) => {
	try {
		const { category, question, answer, tags } = req.body;
		const { userId } = req.user;
		if (!category) {
			return res.status(422).json({
				success: true,
				message: 'Category is mandatory',
			});
		}
		if (!question) {
			return res.status(422).json({
				success: true,
				message: 'Question is mandatory',
			});
		}
		if (!answer) {
			return res.status(422).json({
				success: true,
				message: 'Answer is mandatory',
			});
		}
		const formatedQuestion = capitalizeFirstLetter(question);

		const existingQuestion = await FaqModel.findOne({ question: formatedQuestion, category: category });

		if (existingQuestion) {
			return res.status(409).json({
				success: false,
				message: 'Question already exists',
			});
		}

		await FaqModel.create({
			category: category,
			answer: answer,
			createdBy: userId,
			updatedBy: userId,
			searchKeywords: tags,

			question: formatedQuestion,
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

export const deleteFaq = async (req, res, next) => {
	try {
		const faqId = req.params.id;

		const faq = await FaqModel.findOne({ _id: faqId });

		if (!faq) {
			return res.status(404).json({
				success: false,
				message: 'Faq not found',
			});
		}

		faq.deletedAt = dayjs();
		await faq.save();

		return res.status(200).json({
			success: true,
			message: 'Faq data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getFaqById = async (req, res, next) => {
	try {
		const faqId = req.params.id;

		const faq = await FaqModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(faqId),
					deletedAt: null,
				},
			},
		]);

		if (faq.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Faq data fetched',
				data: { faq: faq.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Faq not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateFaq = async (req, res, next) => {
	try {
		const faqId = req.params.id;
		const { userId } = req.user;

		const { category, question, answer, tags } = req.body;
		if (!category) {
			return res.status(422).json({
				success: true,
				message: 'Category is mandatory',
			});
		}
		if (!question) {
			return res.status(422).json({
				success: true,
				message: 'Question is mandatory',
			});
		}
		if (!answer) {
			return res.status(422).json({
				success: true,
				message: 'Answer is mandatory',
			});
		}

		const faq = await FaqModel.findOne({ _id: faqId, deletedAt: null });

		if (!faq) {
			return res.status(404).json({
				success: false,
				message: 'Faq not found',
			});
		}
		const formatedQuestion = capitalizeFirstLetter(question);
		const existingFaq = await FaqModel.findOne({
			question: formatedQuestion,
			category: category,
			_id: { $ne: faqId },
			deletedAt: null,
		});

		if (existingFaq) {
			return res.status(409).json({
				success: false,
				message: 'Faq already exists',
			});
		}

		faq.category = category;
		faq.answer = answer;
		faq.question = question;
		faq.searchKeywords = tags;
		faq.updatedBy = userId;
		await faq.save();

		return res.status(200).json({
			success: true,
			message: 'Faq data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const faqStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await FaqModel.updateOne(
			{ _id: new mongoose.Types.ObjectId(req.params.id) },
			[
				{
					$set: {
						isActive: {
							$not: '$isActive',
						},
					},
				},
			],
			{
				new: true,
			},
		);

		return res.status(200).json({
			success: true,
			message: 'Status updated.',
			data: { updateStatus: updateStatus },
		});
	} catch (error) {
		return next(serverError(error));
	}
};
