import express from 'express';
import { aipImpact } from '../../../controllers/frontend/AipImpactController.js';

const aipImpactRouter = express.Router();

aipImpactRouter.get('/', aipImpact);

export default aipImpactRouter;
