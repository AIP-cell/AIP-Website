import express from 'express';
import { uploadFile } from '../../../utils/fileUploader.js';

import {
	addSelectedWork,
	deleteWork,
	getWorkById,
	updateWork,
	worktatusUpdate,
} from '../../../controllers/dashboard/AipSelectedWorkController.js';
import { getSelectedWorkData } from '../../../controllers/data-table/SelectedWorkDataTable.js';

const selectedWorkRouter = express.Router();

selectedWorkRouter.post('/create', uploadFile('team-aip').any(), addSelectedWork);

selectedWorkRouter.get('/table-data', getSelectedWorkData);

selectedWorkRouter.get('/view/:id', getWorkById);

selectedWorkRouter.put('/status/:id', worktatusUpdate);

selectedWorkRouter.put('/update/:id', uploadFile('team-aip').any(), updateWork);

selectedWorkRouter.delete('/delete/:id', deleteWork);

export default selectedWorkRouter;
