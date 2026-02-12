import express from 'express';
import { uploadPdfFile } from '../../../utils/fileUploader.js';
import {
	addAipImpactCaestudies,
	deleteCasestudies,
	getCasestudiesById,
	updateAipImpactCasestudies,
} from '../../../controllers/dashboard/AipImpactCasestudiesController.js';
import { getAipImpactCasestudeisData } from '../../../controllers/data-table/AipImpactCasestudiesDataTable.js';

const aipImpactCasestudiesRouter = express.Router();

aipImpactCasestudiesRouter.post('/create', uploadPdfFile('aip-impact').any(), addAipImpactCaestudies);

aipImpactCasestudiesRouter.get('/table-data', getAipImpactCasestudeisData);

aipImpactCasestudiesRouter.get('/view/:id', getCasestudiesById);

// dataRouter.get('/view/:id', getCasestudyById);

aipImpactCasestudiesRouter.put('/update/:id', uploadPdfFile('aip-impact').any(), updateAipImpactCasestudies);

aipImpactCasestudiesRouter.delete('/delete/:id', deleteCasestudies);

export default aipImpactCasestudiesRouter;
