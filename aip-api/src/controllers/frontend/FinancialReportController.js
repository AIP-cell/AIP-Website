import dayjs from 'dayjs';
import { FinancialReportModel } from '../../modals/FinancialReportModel.js';
import { serverError } from '../../utils/errorHandler.js';
import path from 'path';
// eslint-disable-next-line no-unused-vars
import zip from 'express-zip';
import fs from 'fs';
import { convertUtcToISTStage } from '../../utils/helperFunction.js';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

dayjs.extend(utc);
dayjs.extend(timezone);

// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export const financialReport = async (req, res, next) => {
	try {
		const reports = await FinancialReportModel.aggregate([
			{
				$match: {
					isActive: true,

					deletedAt: null,
				},
			},

			{
				$project: {
					year: convertUtcToISTStage('year'),
					report: 1,
					name: 1,
				},
			},
			{
				$group: {
					_id: '$year',
					financialReports: {
						$push: {
							report: '$report',
							name: '$name',
						},
					},
				},
			},
			{
				$project: {
					year: '$_id',
					financialReports: 1,
					_id: 0,
				},
			},
			{
				$sort: {
					year: -1,
				},
			},
		]);

		const formattedReports = reports.map((report) => {
			const startYear = dayjs(report.year).format('YYYY');
			const endYear = dayjs(report.year).add(1, 'year').format('YY');
			return {
				...report,
				year: `${startYear}-${endYear}`,
				originalYear: report.year,
			};
		});

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: formattedReports,
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const downloadPdf = async (req, res, next) => {
	try {
		const { year } = req.query;

		const date = dayjs(year).tz('Asia/Kolkata').startOf('year').utc().toDate();

		const startYear = dayjs(date).format('YYYY');
		const endYear = dayjs(date).add(1, 'year').format('YY');
		const formattedYear = `${startYear}-${endYear}`;
		const reports = await FinancialReportModel.aggregate([
			{
				$match: {
					isActive: true,
					year: date,
					deletedAt: null,
				},
			},
			{
				$project: {
					_id: 0,
					report: 1,
					name: 1,
				},
			},
		]);

		if (!reports.length) {
			return res.status(404).json({ success: false, message: 'No reports found' });
		}

		const filesToZip = reports.map((report) => ({
			path: path.join(process.cwd(), report.report),
			name: `${report.name}.pdf`,
		}));

		filesToZip.forEach((file) => {
			if (!fs.existsSync(file.path)) {
				return res.status(404).json({ success: false, message: `File not found: ${file.path}` });
			}
		});

		res.zip(filesToZip, `AIP Financial Reports And Certificate-${formattedYear}.zip`);
	} catch (err) {
		console.error('Error in downloading PDF:', err);
		return next(serverError(err));
	}
};
