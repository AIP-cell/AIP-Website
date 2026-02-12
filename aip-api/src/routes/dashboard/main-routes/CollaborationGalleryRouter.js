import express from 'express';

import { uploadVideo } from '../../../utils/fileUploader.js';

import {
	addCollaborationGallery,
	getCollaborationGalleryById,
} from '../../../controllers/dashboard/CollaborationGalleryController.js';

const collaborationGalleryRouter = express.Router();

collaborationGalleryRouter.post('/create/:id', uploadVideo('collaborations').any(), addCollaborationGallery);

// projectAndProgramGalleryRouter.get('/table-data', getProjectAndProgramGalleryData);

collaborationGalleryRouter.get('/view/:id', getCollaborationGalleryById);

// projectAndProgramGalleryRouter.put('/update/:id', uploadFile('projects-programs').any(), updateProgramGallery);

// projectAndProgramGalleryRouter.delete('/delete/:id', deleteProjectGallery);

export default collaborationGalleryRouter;
