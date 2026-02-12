import express from 'express';

import { uploadPdfFile } from '../../../utils/fileUploader.js';

import {
	addProjectAndPrograms,
	deletePrograms,
	getProjectyId,
	projectStatusUpdate,
	updateProject,
} from '../../../controllers/dashboard/ProjectAndProgramsController.js';
import { getProjectAndProgramData } from '../../../controllers/data-table/ProjectAndProgramDataTable.js';

const projectAndProgramRouter = express.Router();

projectAndProgramRouter.post('/create', uploadPdfFile('projects-programs').any(), addProjectAndPrograms);

projectAndProgramRouter.get('/table-data', getProjectAndProgramData);

projectAndProgramRouter.get('/view/:id', getProjectyId);

projectAndProgramRouter.put('/status/:id', projectStatusUpdate);

projectAndProgramRouter.put('/update/:id', uploadPdfFile('projects-programs').any(), updateProject);

projectAndProgramRouter.delete('/delete/:id', deletePrograms);

export default projectAndProgramRouter;
