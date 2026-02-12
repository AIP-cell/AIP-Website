import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { FinancialReportModel } from '../../modals/FinancialReportModel.js';
import { capitalizeAllLetters } from '../../utils/capitalLetter.js';
import path from 'path';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addFinancialReport = async (req, res, next) => {
	try {
		const { name, year, tags } = req.body;
		const { userId } = req.user;

		if (!year || !name) {
			return res.status(422).json({
				success: true,
				message: 'Year and Name is mandatory',
			});
		}

		const formatedName = capitalizeAllLetters(name);

		let filePath;

		req.files?.forEach((file) => {
			if (file.fieldname === 'report[]') {
				filePath = 'uploads' + file.path.split(path.sep + 'uploads')[1];
			}
		});

		if (!filePath) {
			return res.status(422).json({
				success: true,
				message: 'Pdf is mandatory',
			});
		}

		await FinancialReportModel.create({
			year: year,
			name: formatedName,
			report: filePath,
			searchKeywords: tags,
			createdBy: userId,
			updatedBy: userId,
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

export const deleteReport = async (req, res, next) => {
	try {
		const reportId = req.params.id;

		const year = await FinancialReportModel.findOne({ _id: reportId });
		singleFileRemover(year.report);
		if (!year) {
			return res.status(404).json({
				success: false,
				message: 'Report not found',
			});
		}

		year.deletedAt = dayjs();
		await year.save();

		return res.status(200).json({
			success: true,
			message: 'Report data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getReportById = async (req, res, next) => {
	try {
		const reportId = req.params.id;

		const report = await FinancialReportModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(reportId),
					deletedAt: null,
				},
			},
		]);
		if (report.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Report data fetched',
				data: { report: report.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Report not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const getAllReport = async (req, res, next) => {
	try {
		const reports = await FinancialReportModel.aggregate([
			{
				$match: {
					deletedAt: null,
				},
			},
		]);

		if (reports.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Report data fetched',
				data: { reports: reports },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Report not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateReport = async (req, res, next) => {
	try {
		const reportId = req.params.id;

		const { year, name, tags } = req.body;

		const { userId } = req.user;

		const reports = await FinancialReportModel.findOne({ _id: reportId, deletedAt: null });

		if (!reports) {
			return res.status(404).json({
				success: false,
				message: 'Report not found',
			});
		}

		if (!year) {
			return res.status(404).json({
				success: false,
				message: 'Year is mandatory',
			});
		}

		const formatedName = capitalizeAllLetters(name);

		let filePath = req.body?.report;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'report[]') {
					singleFileRemover(reports.report);
					filePath = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				}
			});
		}

		if (!filePath) {
			return res.status(422).json({
				success: true,
				message: 'Pdf is mandatory',
			});
		}
		reports.year = year;
		reports.searchKeywords = tags;
		reports.name = formatedName;
		reports.report = filePath;
		reports.updatedBy = userId;
		await reports.save();

		return res.status(200).json({
			success: true,
			message: 'Report data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const reportStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await FinancialReportModel.updateOne(
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
