import express from 'express';
import { downloadPdf, financialReport } from '../../../controllers/frontend/FinancialReportController.js';

const financialReportRouter = express.Router();

financialReportRouter.get('/report', financialReport);
financialReportRouter.get('/download', downloadPdf);

export default financialReportRouter;
