import express from 'express';

import { uploadFile } from '../../../utils/fileUploader.js';

import {
	addProjectMedia,
	deleteMedia,
	getMediaById,
	updateProjectMedia,
} from '../../../controllers/dashboard/ProjectAndProgramsMediaController.js';
import { getProjectAndProgramMediaData } from '../../../controllers/data-table/ProjectAndProgramMediaDataTable.js';

const projectAndProgramMediaRouter = express.Router();

projectAndProgramMediaRouter.post('/create/:id', uploadFile('projects-programs').any(), addProjectMedia);

projectAndProgramMediaRouter.get('/table-data', getProjectAndProgramMediaData);

projectAndProgramMediaRouter.get('/view/:id', getMediaById);

projectAndProgramMediaRouter.put('/update/:id', uploadFile('projects-programs').any(), updateProjectMedia);

projectAndProgramMediaRouter.delete('/delete/:id', deleteMedia);

export default projectAndProgramMediaRouter;
