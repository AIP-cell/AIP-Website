import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';

import { HomePageQuoteModel } from '../../modals/HomePageQuoteModel.js';

export const addQuote = async (req, res, next) => {
	try {
		const { userId } = req.user;

		const { coreFounder, quote } = req.body;
		if (!coreFounder || !quote) {
			return res.status(422).json({
				success: true,
				message: 'CoreFounder and quote is mandatory',
			});
		}

		const existingName = await HomePageQuoteModel.findOne({ coreFounder: coreFounder, deletedAt: null });

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Core founder quote already exists',
			});
		}

		await HomePageQuoteModel.create({
			quote: quote,
			createdBy: userId,
			updatedBy: userId,
			coreFounder: coreFounder,
			deletedAt: null,
		});

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const deleteQuote = async (req, res, next) => {
	try {
		const quoteId = req.params.id;

		const quote = await HomePageQuoteModel.findOne({ _id: quoteId });

		if (!quote) {
			return res.status(404).json({
				success: false,
				message: 'Quote not found',
			});
		}

		quote.deletedAt = dayjs();
		await quote.save();

		return res.status(200).json({
			success: true,
			message: 'Quote data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getQuoteById = async (req, res, next) => {
	try {
		const quoteId = req.params.id;

		const quote = await HomePageQuoteModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(quoteId),
					deletedAt: null,
				},
			},
		]);

		if (quote.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Quote data fetched',
				data: { quote: quote.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Quote not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateQuote = async (req, res, next) => {
	try {
		const quoteId = req.params.id;

		const { userId } = req.user;

		const { coreFounder, quote } = req.body;

		const quotes = await HomePageQuoteModel.findOne({ _id: quoteId, deletedAt: null });

		if (!quotes) {
			return res.status(404).json({
				success: false,
				message: 'Quote not found',
			});
		}

		const existingQuote = await HomePageQuoteModel.findOne({
			coreFounder: coreFounder,
			quote: quote,
			_id: { $ne: quoteId },
			deletedAt: null,
		});

		if (existingQuote) {
			return res.status(409).json({
				success: false,
				message: 'Core founder quote already exists',
			});
		}

		quotes.coreFounder = coreFounder;
		quotes.updatedBy = userId;
		quotes.quote = quote;

		await quotes.save();

		return res.status(200).json({
			success: true,
			message: 'Quote data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const quoteStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await HomePageQuoteModel.updateOne(
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
