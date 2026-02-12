import express from 'express';
import { uploadFile, uploadPdfFile } from '../../../utils/fileUploader.js';

import {
	addNpoPeople,
	deletePeople,
	getPeopleById,
	updateNpoPeople,
} from '../../../controllers/dashboard/NpoPeopleController.js';
import { getNpoPeopleData } from '../../../controllers/data-table/NpoPeopleDataTable.js';

const npoPeopleRouter = express.Router();

npoPeopleRouter.post('/create', uploadFile('npo').any(), addNpoPeople);

npoPeopleRouter.get('/table-data', getNpoPeopleData);

npoPeopleRouter.get('/view/:id', getPeopleById);

// dataRouter.get('/view/:id', getCasestudyById);

npoPeopleRouter.put('/update/:id', uploadPdfFile('npo').any(), updateNpoPeople);

npoPeopleRouter.delete('/delete/:id', deletePeople);

export default npoPeopleRouter;
