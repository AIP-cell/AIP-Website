import express from 'express';

import {
	addFaq,
	deleteFaq,
	faqStatusUpdate,
	getFaqById,
	updateFaq,
} from '../../../controllers/dashboard/FaqController.js';
import { getFaqData } from '../../../controllers/data-table/FaqDataTable.js';

const faqRouter = express.Router();

faqRouter.post('/create', addFaq);

faqRouter.get('/table-data', getFaqData);

faqRouter.get('/view/:id', getFaqById);

faqRouter.put('/status/:id', faqStatusUpdate);

faqRouter.put('/update/:id', updateFaq);

faqRouter.delete('/delete/:id', deleteFaq);

export default faqRouter;
