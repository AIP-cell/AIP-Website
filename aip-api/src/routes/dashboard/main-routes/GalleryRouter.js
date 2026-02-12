import express from 'express';

import {
	addGallery,
	deleteGallery,
	GalleryStatusUpdate,
	getGalleryById,
	updateGallery,
} from '../../../controllers/dashboard/GalleryController.js';
import { getGalleryData } from '../../../controllers/data-table/GalleryDataTable.js';
import { uploadVideo } from '../../../utils/fileUploader.js';

const galleryRouter = express.Router();

galleryRouter.post('/create', uploadVideo('galleries').any(), addGallery);

galleryRouter.get('/table-data', getGalleryData);

galleryRouter.get('/view/:id', getGalleryById);

galleryRouter.put('/status/:id', GalleryStatusUpdate);

galleryRouter.put('/update/:id', uploadVideo('galleries').any(), updateGallery);

galleryRouter.delete('/delete/:id', deleteGallery);

export default galleryRouter;
