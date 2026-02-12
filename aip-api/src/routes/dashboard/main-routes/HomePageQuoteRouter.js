import express from 'express';
import {
	addQuote,
	deleteQuote,
	getQuoteById,
	quoteStatusUpdate,
	updateQuote,
} from '../../../controllers/dashboard/HomePageQuoteController.js';
import { getQuoteData } from '../../../controllers/data-table/QuoteTableData.js';

const quoteRouter = express.Router();

quoteRouter.post('/create', addQuote);

quoteRouter.get('/table-data', getQuoteData);

quoteRouter.get('/view/:id', getQuoteById);

quoteRouter.put('/status/:id', quoteStatusUpdate);

quoteRouter.put('/update/:id', updateQuote);

quoteRouter.delete('/delete/:id', deleteQuote);

export default quoteRouter;
