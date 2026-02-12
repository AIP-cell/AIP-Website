import express from 'express';
import { uploadVideo } from '../../../utils/fileUploader.js';

import {
	addCuratedResources,
	deleteResource,
	getExpertCuratedResources,
	getResourceById,
	resourceFeatureUpdate,
	resourceStatusUpdate,
	updateResource,
} from '../../../controllers/dashboard/CuratedResourceController.js';
import { getCuratedResourceData } from '../../../controllers/data-table/CuratedResourceDataTable.js';

const curatedResourceRouter = express.Router();

curatedResourceRouter.post('/create', uploadVideo('curated-resource').any(), addCuratedResources);

curatedResourceRouter.get('/table-data', getCuratedResourceData);

curatedResourceRouter.get('/view/:id', getResourceById);

curatedResourceRouter.get('/get-experts', getExpertCuratedResources);

curatedResourceRouter.put('/status/:id', resourceStatusUpdate);

curatedResourceRouter.put('/featured/:id', resourceFeatureUpdate);

curatedResourceRouter.put('/update/:id', uploadVideo('curated-resource').any(), updateResource);

curatedResourceRouter.delete('/delete/:id', deleteResource);

export default curatedResourceRouter;
