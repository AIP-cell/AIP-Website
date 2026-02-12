import { ModalsModel } from '../../modals/ModalModel.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const getModal = async (req, res, next) => {
	try {
		const modal = await ModalsModel.findOne({
			deletedAt: null,
		});

		if (!modal) {
			return res.status(404).json({
				success: false,
				message: 'Modal not found',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Fetched successfully',
			data: modal,
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateModal = async (req, res, next) => {
	try {
		const { description, link } = req.body;
		const userId = req.user.id;

		let existingModal = await ModalsModel.findOne({
			deletedAt: null,
		});

		let image = req.body.image ? req.body.image : '';
		if (req.files && req.files.length > 0) {
			req.files?.forEach((file) => {
				if (image != '') {
					singleFileRemover(existingModal.image);
				}
				if (file.fieldname === 'image') {
					image = getFilePath(file);
				}
			});
		}
		console.log(image);
		if (!existingModal) {
			existingModal = await ModalsModel.create({
				description,
				image,
				link,
				createdBy: userId,
			});
		} else {
			existingModal.description = description;
			existingModal.image = image;
			existingModal.link = link;
			existingModal.updatedBy = userId;
		}

		await existingModal.save();

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const modalStatusUpdate = async (req, res, next) => {
	try {
		const modal = await ModalsModel.findOne({
			deletedAt: null,
		});

		if (!modal) {
			return res.status(404).json({
				success: false,
				message: 'Modal not found',
			});
		}

		// Toggle the status
		modal.isActive = !modal.isActive;
		await modal.save();

		return res.status(200).json({
			success: true,
			message: 'Status updated.',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
