import express from 'express';
import { uploadFile, uploadPdfFile } from '../../../utils/fileUploader.js';

import {
	addFoundersNetworkMethods,
	deleteMethods,
	getMethodsById,
	updateFounderNetworkMethods,
} from '../../../controllers/dashboard/FoundersNetworkMethodsController.js';
import { getFounderNetworkMethodsData } from '../../../controllers/data-table/FounderNetworkMethodsDataTable.js';

const founderNetworkMethodsRouter = express.Router();

founderNetworkMethodsRouter.post('/create', uploadFile('founders-network').any(), addFoundersNetworkMethods);

founderNetworkMethodsRouter.get('/table-data', getFounderNetworkMethodsData);

founderNetworkMethodsRouter.get('/view/:id', getMethodsById);

// dataRouter.get('/view/:id', getCasestudyById);

founderNetworkMethodsRouter.put('/update/:id', uploadPdfFile('founders-network').any(), updateFounderNetworkMethods);

founderNetworkMethodsRouter.delete('/delete/:id', deleteMethods);

export default founderNetworkMethodsRouter;
