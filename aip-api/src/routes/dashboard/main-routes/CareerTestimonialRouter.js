import express from 'express';

import { uploadFile } from '../../../utils/fileUploader.js';
import {
	addTestimonials,
	deleteTestimonial,
	getTestimonialById,
	syncCareers,
	updateTestimonials,
} from '../../../controllers/dashboard/CareersTestimonialController.js';
import { getTestimonialData } from '../../../controllers/data-table/CareerTestimonialDataTable.js';

const careerTestimonialRouter = express.Router();

careerTestimonialRouter.post('/create', uploadFile('careers').any(), addTestimonials);

careerTestimonialRouter.get('/table-data', getTestimonialData);

careerTestimonialRouter.get('/view/:id', getTestimonialById);

careerTestimonialRouter.put('/update/:id', uploadFile('careers').any(), updateTestimonials);

careerTestimonialRouter.delete('/delete/:id', deleteTestimonial);

careerTestimonialRouter.get('/sync', syncCareers);

export default careerTestimonialRouter;
