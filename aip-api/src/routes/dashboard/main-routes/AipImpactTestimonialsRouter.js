import express from 'express';
import { uploadFile, uploadPdfFile } from '../../../utils/fileUploader.js';

import {
	addAipImpactTestimonials,
	deleteTestimonials,
	getTestimonialsById,
	updateAipImpactTestimonials,
} from '../../../controllers/dashboard/AipImpactTestimonialController.js';
import { getAipImpactTestimonialData } from '../../../controllers/data-table/AipImpactTestimonialDataTable.js';

const aipImpactTestimonialRouter = express.Router();

aipImpactTestimonialRouter.post('/create', uploadFile('aip-impact').any(), addAipImpactTestimonials);

aipImpactTestimonialRouter.get('/table-data', getAipImpactTestimonialData);

aipImpactTestimonialRouter.get('/view/:id', getTestimonialsById);

// dataRouter.get('/view/:id', getCasestudyById);

aipImpactTestimonialRouter.put('/update/:id', uploadPdfFile('aip-impact').any(), updateAipImpactTestimonials);

aipImpactTestimonialRouter.delete('/delete/:id', deleteTestimonials);

export default aipImpactTestimonialRouter;
