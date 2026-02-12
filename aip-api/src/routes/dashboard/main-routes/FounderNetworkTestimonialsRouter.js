import express from 'express';
import { uploadFile, uploadPdfFile } from '../../../utils/fileUploader.js';

import {
	addFoundersNetworkTestimonials,
	deleteTestimonials,
	getTestimonialsById,
	updateFounderNetworkTestimonials,
} from '../../../controllers/dashboard/FoundersNetworkTestimonialController.js';
import { getFounderNetworkTestimonialData } from '../../../controllers/data-table/FounderNetworkTestimonialDataTable.js';

const founderNetworkTestimonialRouter = express.Router();

founderNetworkTestimonialRouter.post('/create', uploadFile('founders-network').any(), addFoundersNetworkTestimonials);

founderNetworkTestimonialRouter.get('/table-data', getFounderNetworkTestimonialData);

founderNetworkTestimonialRouter.get('/view/:id', getTestimonialsById);

// dataRouter.get('/view/:id', getCasestudyById);

founderNetworkTestimonialRouter.put(
	'/update/:id',
	uploadPdfFile('founders-network').any(),
	updateFounderNetworkTestimonials,
);

founderNetworkTestimonialRouter.delete('/delete/:id', deleteTestimonials);

export default founderNetworkTestimonialRouter;
