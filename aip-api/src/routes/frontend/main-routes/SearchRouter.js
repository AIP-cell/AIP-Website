import express from 'express';
import { search } from '../../../controllers/frontend/SearchController.js';

const searchRouter = express.Router();

searchRouter.get('/', search);

export default searchRouter;
