import express from 'express';
import { givingRoadmap } from '../../../controllers/frontend/GivingRoadmapController.js';

const givingRoadMapRouter = express.Router();

givingRoadMapRouter.get('/', givingRoadmap);

export default givingRoadMapRouter;
