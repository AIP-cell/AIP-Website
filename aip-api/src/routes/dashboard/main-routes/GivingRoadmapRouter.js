import express from 'express';

import { updateGivingRoadmap, viewRoadmap } from '../../../controllers/dashboard/GivingRoadMapController.js';
import { uploadPdfFile } from '../../../utils/fileUploader.js';

const GivingRoadmapRouter = express.Router();

GivingRoadmapRouter.put('/update', uploadPdfFile('giving-roadmap').any(), updateGivingRoadmap);

GivingRoadmapRouter.get('/view', viewRoadmap);

export default GivingRoadmapRouter;
