import express from 'express';
import { uploadPdfFile } from '../../../utils/fileUploader.js';

import {
	addPhilanthropistNetworkCaestudies,
	deleteCasestudies,
	getCasestudiesById,
	updatePhilanthropistNetworkCasestudies,
} from '../../../controllers/dashboard/PhilanthropistNetworkCasestudiesController.js';
import { getPhilanthropistData } from '../../../controllers/data-table/PhilanthropistCasestudiesDataTable.js';

const philanthropistNetworkCasestudiesRouter = express.Router();

philanthropistNetworkCasestudiesRouter.post(
	'/create',
	uploadPdfFile('philanthropist-network').any(),
	addPhilanthropistNetworkCaestudies,
);

philanthropistNetworkCasestudiesRouter.get('/table-data', getPhilanthropistData);

philanthropistNetworkCasestudiesRouter.get('/view/:id', getCasestudiesById);

// dataRouter.get('/view/:id', getCasestudyById);

philanthropistNetworkCasestudiesRouter.put(
	'/update/:id',
	uploadPdfFile('philanthropist-network').any(),
	updatePhilanthropistNetworkCasestudies,
);

philanthropistNetworkCasestudiesRouter.delete('/delete/:id', deleteCasestudies);

export default philanthropistNetworkCasestudiesRouter;
