import express from 'express';
import { uploadVideo } from '../../../utils/fileUploader.js';

import {
	addNpoCaestudies,
	deleteNpo,
	getNpoById,
	updateNpoCasestudies,
} from '../../../controllers/dashboard/NpoCasestudiesController.js';
import { getNpoCasestudeisData } from '../../../controllers/data-table/NpoCasestudiesDataTable.js';

const npoRouter = express.Router();

npoRouter.post('/create', uploadVideo('npo').any(), addNpoCaestudies);

npoRouter.get('/table-data', getNpoCasestudeisData);

npoRouter.get('/view/:id', getNpoById);

// dataRouter.get('/view/:id', getCasestudyById);

npoRouter.put('/update/:id', uploadVideo('npo').any(), updateNpoCasestudies);

npoRouter.delete('/delete/:id', deleteNpo);

export default npoRouter;
