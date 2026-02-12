import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import { singleFileRemover } from '../../utils/fileRemover.js';
import mongoose from 'mongoose';
import { PartnerModel } from '../../modals/PartnerModal.js';
import { getFilePath } from '../../utils/filePath.js';

export const addPartner = async (req, res, next) => {
	try {
		const { name, link } = req.body;

		const { userId } = req.user;

		if (!name || !link) {
			return res.status(422).json({
				success: true,
				message: 'Name and link is mandatory',
			});
		}

		const existingName = await PartnerModel.findOne({ name: name, deletedAt: null });

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Partner already exists',
			});
		}
		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			}
		});

		await PartnerModel.create({
			name: name,
			link: link,
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

export const deletePartner = async (req, res, next) => {
	try {
		const partnerId = req.params.id;

		const partner = await PartnerModel.findOne({ _id: partnerId });
		if (!partner) {
			return res.status(404).json({
				success: false,
				message: 'Partner not found',
			});
		}

		partner.deletedAt = dayjs();
		await partner.save();

		return res.status(200).json({
			success: true,
			message: 'Partner data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getPartnerById = async (req, res, next) => {
	try {
		const partnerId = req.params.id;

		const partner = await PartnerModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(partnerId),
					deletedAt: null,
				},
			},
		]);

		if (partner.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Partner data fetched',
				data: { partner: partner.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Partner not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const getAllPartners = async (req, res, next) => {
	try {
		const partner = await PartnerModel.aggregate([
			{
				$match: {
					deletedAt: null,
				},
			},
		]);

		if (partner.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Partner data fetched',
				data: { partner: partner },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Partner not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updatePartner = async (req, res, next) => {
	try {
		const partnerId = req.params.id;

		const { userId } = req.user;

		const { name, link } = req.body;
		if (!name || !link) {
			return res.status(422).json({
				success: true,
				message: 'Name and link is mandatory',
			});
		}

		const partner = await PartnerModel.findOne({ _id: partnerId, deletedAt: null });

		const existingPartner = await PartnerModel.findOne({
			name: name,
			_id: { $ne: partnerId },
			deletedAt: null,
		});

		if (existingPartner) {
			return res.status(409).json({
				success: false,
				message: 'Partner already exists',
			});
		}

		let image = req.body?.image;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(partner.image);
					image = getFilePath(file);
				}
			});
		}

		partner.name = name;
		partner.link = link;
		partner.image = image;
		partner.updatedBy = userId;

		await partner.save();

		return res.status(200).json({
			success: true,
			message: 'Work data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const partnertatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await PartnerModel.updateOne(
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
