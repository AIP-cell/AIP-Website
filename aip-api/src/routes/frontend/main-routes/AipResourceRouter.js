import express from 'express';
import { getAipResource, getOneAipResourceGallery } from '../../../controllers/frontend/AipResourceController.js';

const aipResourceRouter = express.Router();

aipResourceRouter.get('/', getAipResource);
aipResourceRouter.get('/:slug/gallery', getOneAipResourceGallery);

export default aipResourceRouter;
