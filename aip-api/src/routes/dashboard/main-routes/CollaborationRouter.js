import express from 'express';

import { uploadFile } from '../../../utils/fileUploader.js';

import {
	addCollaborations,
	deleteCollaborations,
	getCollaborationId,
	updateCollaboration,
} from '../../../controllers/dashboard/CollaborationsController.js';
import { getCollaborationData } from '../../../controllers/data-table/CollaborationDataTable.js';

const collaborationRouter = express.Router();

collaborationRouter.post('/create', uploadFile('collaborations').any(), addCollaborations);

collaborationRouter.get('/table-data', getCollaborationData);

collaborationRouter.get('/view/:id', getCollaborationId);

collaborationRouter.put('/update/:id', uploadFile('collaborations').any(), updateCollaboration);

collaborationRouter.delete('/delete/:id', deleteCollaborations);

export default collaborationRouter;
