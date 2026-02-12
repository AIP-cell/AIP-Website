import express from 'express';

import { uploadFile } from '../../../utils/fileUploader.js';

import {
	addProjectTestimonials,
	deleteTestimonials,
	getTestimonialsById,
	updateProjectTestimonials,
} from '../../../controllers/dashboard/ProjectAndProgramsTestimonials.js';
import { getProjectAndProgramTestimonialData } from '../../../controllers/data-table/ProjectAndProgramTestimonialDataTable.js';

const projectAndProgramTestimonialRouter = express.Router();

projectAndProgramTestimonialRouter.post('/create/:id', uploadFile('projects-programs').any(), addProjectTestimonials);

projectAndProgramTestimonialRouter.get('/table-data', getProjectAndProgramTestimonialData);

projectAndProgramTestimonialRouter.get('/view/:id', getTestimonialsById);

projectAndProgramTestimonialRouter.put('/update/:id', uploadFile('projects-programs').any(), updateProjectTestimonials);

projectAndProgramTestimonialRouter.delete('/delete/:id', deleteTestimonials);

export default projectAndProgramTestimonialRouter;
