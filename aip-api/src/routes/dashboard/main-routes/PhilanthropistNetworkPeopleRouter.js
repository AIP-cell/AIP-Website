import express from 'express';
import { uploadFile, uploadPdfFile } from '../../../utils/fileUploader.js';

import {
	addPhilanthropistNetworkPeople,
	deletePeople,
	getPeopleById,
	updatePhilanthropistPeople,
} from '../../../controllers/dashboard/PhilanthropistNetworkPeopleController.js';
import { getPhilanthropistPeopleData } from '../../../controllers/data-table/PhilanthropistPeopleDataTable.js';

const philanthropistNetworkPeopleRouter = express.Router();

philanthropistNetworkPeopleRouter.post('/create', uploadFile('aip-impact').any(), addPhilanthropistNetworkPeople);

philanthropistNetworkPeopleRouter.get('/table-data', getPhilanthropistPeopleData);

philanthropistNetworkPeopleRouter.get('/view/:id', getPeopleById);

// dataRouter.get('/view/:id', getCasestudyById);

philanthropistNetworkPeopleRouter.put('/update/:id', uploadPdfFile('aip-impact').any(), updatePhilanthropistPeople);

philanthropistNetworkPeopleRouter.delete('/delete/:id', deletePeople);

export default philanthropistNetworkPeopleRouter;
