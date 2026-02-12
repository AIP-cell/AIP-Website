import express from 'express';
import { getAllGallery } from '../../../controllers/frontend/GalleryController.js';

const galleryRouter = express.Router();

galleryRouter.get('/', getAllGallery);

export default galleryRouter;
