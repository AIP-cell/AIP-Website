import express from 'express';
import { uploadPdfFile } from '../../../utils/fileUploader.js';

import {
	addFinancialReport,
	deleteReport,
	getReportById,
	reportStatusUpdate,
	updateReport,
} from '../../../controllers/dashboard/FinancialReportController.js';
import { getFinancialReportData } from '../../../controllers/data-table/FinancialReportDataTable.js';

const financialReportRouter = express.Router();

financialReportRouter.post('/create', uploadPdfFile('financial-report').any(), addFinancialReport);

financialReportRouter.get('/table-data', getFinancialReportData);

financialReportRouter.get('/view/:id', getReportById);

financialReportRouter.put('/status/:id', reportStatusUpdate);

financialReportRouter.put('/update/:id', uploadPdfFile('financial-report').any(), updateReport);

financialReportRouter.delete('/delete/:id', deleteReport);

export default financialReportRouter;
