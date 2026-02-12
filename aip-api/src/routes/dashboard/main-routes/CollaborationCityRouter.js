import express from 'express';

import { uploadVideo } from '../../../utils/fileUploader.js';
import {
	addCollaborationsCity,
	deleteCollaborationCity,
	getCollaborationCityId,
	updateCollaborationCity,
} from '../../../controllers/dashboard/CollaborationCityController.js';
import { getCollaborationCityData } from '../../../controllers/data-table/CollaborationCityDataTable.js';

const collaborationCityRouter = express.Router();

collaborationCityRouter.post('/create/:id', uploadVideo('collaborations').any(), addCollaborationsCity);

collaborationCityRouter.get('/table-data', getCollaborationCityData);

collaborationCityRouter.get('/view/:id', getCollaborationCityId);

collaborationCityRouter.put('/update/:id', uploadVideo('collaborations').any(), updateCollaborationCity);

collaborationCityRouter.delete('/delete/:id', deleteCollaborationCity);

export default collaborationCityRouter;
