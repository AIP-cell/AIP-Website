import express from 'express';

import { uploadFile } from '../../../utils/fileUploader.js';

import {
	addCollaborationMedia,
	deleteMedia,
	getMediaById,
	updateCollaborationMedia,
} from '../../../controllers/dashboard/CollaborationMediaController.js';
import { getCollaborationMediaData } from '../../../controllers/data-table/CollaborationMediaDataTable.js';

const collaborationMediaRouter = express.Router();

collaborationMediaRouter.post('/create/:id', uploadFile('collaborations').any(), addCollaborationMedia);

collaborationMediaRouter.get('/table-data', getCollaborationMediaData);

collaborationMediaRouter.get('/view/:id', getMediaById);

collaborationMediaRouter.put('/update/:id', uploadFile('collaborations').any(), updateCollaborationMedia);

collaborationMediaRouter.delete('/delete/:id', deleteMedia);

export default collaborationMediaRouter;
