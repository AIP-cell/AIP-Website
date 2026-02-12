import dayjs from 'dayjs';
import { ContactUsFormModel } from '../../modals/ContactFormModal.js';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';

export const deleteContactForm = async (req, res, next) => {
	try {
		const contactId = req.params.id;

		const contact = await ContactUsFormModel.findOne({ _id: contactId });

		contact.deletedAt = dayjs();
		await contact.save();

		return res.status(200).json({
			success: true,
			message: 'Contact details data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getContactById = async (req, res, next) => {
	try {
		const contactId = req.params.id;

		const contact = await ContactUsFormModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(contactId),
					deletedAt: null,
				},
			},
		]);

		if (contact.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Contact data fetched',
				data: { contact: contact.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Contact not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
