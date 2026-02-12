import express from 'express';

import { uploadVideo } from '../../../utils/fileUploader.js';

import {
	addProgramsGallery,
	geProjectGalleryById,
} from '../../../controllers/dashboard/ProjectAndProgramGalleryController.js';

const projectAndProgramGalleryRouter = express.Router();

projectAndProgramGalleryRouter.post('/create/:id', uploadVideo('projects-programs').any(), addProgramsGallery);

// projectAndProgramGalleryRouter.get('/table-data', getProjectAndProgramGalleryData);

projectAndProgramGalleryRouter.get('/view/:id', geProjectGalleryById);

// projectAndProgramGalleryRouter.put('/update/:id', uploadFile('projects-programs').any(), updateProgramGallery);

// projectAndProgramGalleryRouter.delete('/delete/:id', deleteProjectGallery);

export default projectAndProgramGalleryRouter;
