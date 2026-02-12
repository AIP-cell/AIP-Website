import express from 'express';
import { uploadFile, uploadPdfFile } from '../../../utils/fileUploader.js';

import {
	addAipImpactPeople,
	deletePeople,
	getPeopleById,
	updateAipImpactPeople,
} from '../../../controllers/dashboard/AipImpactPeopleController.js';
import { getAipImpactPeopleData } from '../../../controllers/data-table/AipImpactPeopleDataTable.js';

const aipImpactPeopleRouter = express.Router();

aipImpactPeopleRouter.post('/create', uploadFile('aip-impact').any(), addAipImpactPeople);

aipImpactPeopleRouter.get('/table-data', getAipImpactPeopleData);

aipImpactPeopleRouter.get('/view/:id', getPeopleById);

// dataRouter.get('/view/:id', getCasestudyById);

aipImpactPeopleRouter.put('/update/:id', uploadPdfFile('aip-impact').any(), updateAipImpactPeople);

aipImpactPeopleRouter.delete('/delete/:id', deletePeople);

export default aipImpactPeopleRouter;
