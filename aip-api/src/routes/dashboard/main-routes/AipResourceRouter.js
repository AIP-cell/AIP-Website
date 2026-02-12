import express from 'express';

import {
	addAipResources,
	deleteResource,
	getResourceById,
	resourceFeaturedUpdate,
	resourceStatusUpdate,
	updateResource,
} from '../../../controllers/dashboard/AipResourceController.js';
import { getAipResourceData } from '../../../controllers/data-table/AipResourceDataTable.js';
import { uploadVideo } from '../../../utils/fileUploader.js';

const aipResourceRouter = express.Router();

aipResourceRouter.post('/create', uploadVideo('aip-resource').any(), addAipResources);

aipResourceRouter.get('/table-data', getAipResourceData);

aipResourceRouter.get('/view/:id', getResourceById);

aipResourceRouter.put('/status/:id', resourceStatusUpdate);

aipResourceRouter.put('/featured/:id', resourceFeaturedUpdate);

aipResourceRouter.put('/update/:id', uploadVideo('aip-resource').any(), updateResource);

aipResourceRouter.delete('/delete/:id', deleteResource);

export default aipResourceRouter;
