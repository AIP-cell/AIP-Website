import express from 'express';
import {
	getOneProjectAndPrograms,
	getOneProjectAndProgramsGallery,
	getProjectAndPrograms,
} from '../../../controllers/frontend/ProjectAndProgramController.js';

const projectAndProgramRouter = express.Router();

projectAndProgramRouter.get('/', getProjectAndPrograms);

projectAndProgramRouter.get('/:slug', getOneProjectAndPrograms);
projectAndProgramRouter.get('/:slug/gallery', getOneProjectAndProgramsGallery);

export default projectAndProgramRouter;
