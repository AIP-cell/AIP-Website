import express from 'express';
import { getAllBooks, getOneBook } from '../../../controllers/frontend/BookController.js';

const bookRouter = express.Router();

bookRouter.get('/', getAllBooks);
bookRouter.get('/:slug', getOneBook);

export default bookRouter;
