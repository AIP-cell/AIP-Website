import express from 'express';

import { uploadFile } from '../../../utils/fileUploader.js';

import {
	addPartner,
	deletePartner,
	getAllPartners,
	getPartnerById,
	partnertatusUpdate,
	updatePartner,
} from '../../../controllers/dashboard/PartnerController.js';
import { getPartnerData } from '../../../controllers/data-table/PartnerDataTable.js';

const partnerRouter = express.Router();

partnerRouter.post('/create', uploadFile('partners').any(), addPartner);

partnerRouter.get('/table-data', getPartnerData);

partnerRouter.get('/view/:id', getPartnerById);

partnerRouter.get('/get-all', getAllPartners);

partnerRouter.put('/status/:id', partnertatusUpdate);

partnerRouter.put('/update/:id', uploadFile('partners').any(), updatePartner);

partnerRouter.delete('/delete/:id', deletePartner);

export default partnerRouter;
