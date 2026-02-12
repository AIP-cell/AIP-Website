import express from 'express';
import { founderNetwork } from '../../../controllers/frontend/AipFounderNetworkController.js';

const aipFounderRouter = express.Router();

aipFounderRouter.get('/', founderNetwork);

export default aipFounderRouter;
