import express from 'express';
import { uploadFile } from '../../../utils/fileUploader.js';

import {
	addBooks,
	bookStatusUpdate,
	deleteBooks,
	getBookById,
	updateBook,
} from '../../../controllers/dashboard/BooksController.js';
import { getBookData } from '../../../controllers/data-table/BookDataTable.js';

const bookRouter = express.Router();

bookRouter.post('/create', uploadFile('books').any(), addBooks);

bookRouter.get('/table-data', getBookData);

bookRouter.get('/view/:id', getBookById);

bookRouter.put('/status/:id', bookStatusUpdate);

bookRouter.put('/update/:id', uploadFile('books').any(), updateBook);

bookRouter.delete('/delete/:id', deleteBooks);

export default bookRouter;
