import express from 'express';

import { uploadFile } from '../../../utils/fileUploader.js';

import {
	addCollaborationTestimonials,
	deleteCollaboration,
	getCollaborationById,
	updateCollaborationTestimonials,
} from '../../../controllers/dashboard/CollaborationTestimonials.js';
import { getCollaborationTestimonialData } from '../../../controllers/data-table/CollaborationTestimonialDataTable.js';

const collaborationTestimonialRouter = express.Router();

collaborationTestimonialRouter.post('/create/:id', uploadFile('collaborations').any(), addCollaborationTestimonials);

collaborationTestimonialRouter.get('/table-data', getCollaborationTestimonialData);

collaborationTestimonialRouter.get('/view/:id', getCollaborationById);

collaborationTestimonialRouter.put('/update/:id', uploadFile('collaborations').any(), updateCollaborationTestimonials);

collaborationTestimonialRouter.delete('/delete/:id', deleteCollaboration);

export default collaborationTestimonialRouter;
