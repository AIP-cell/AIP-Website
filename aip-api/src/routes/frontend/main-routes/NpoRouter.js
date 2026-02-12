import express from 'express';
import { getNpo, getOneNpo, getOneNpoGallery } from '../../../controllers/frontend/NpoController.js';

const npoRouter = express.Router();

npoRouter.get('/', getNpo);
npoRouter.get('/:slug', getOneNpo);
npoRouter.get('/:slug/gallery', getOneNpoGallery);

export default npoRouter;
