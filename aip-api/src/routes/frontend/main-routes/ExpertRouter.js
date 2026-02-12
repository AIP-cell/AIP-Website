import express from 'express';
import { getExpertPage } from '../../../controllers/frontend/ExpertController.js';

const expertRouter = express.Router();

expertRouter.get('/', getExpertPage);

export default expertRouter;
