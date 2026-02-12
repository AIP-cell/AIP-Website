import express from 'express';
import { philanthropistNetwork } from '../../../controllers/frontend/PhilanthropistNetworkController.js';

const philanthropistNetworkRouter = express.Router();

philanthropistNetworkRouter.get('/', philanthropistNetwork);

export default philanthropistNetworkRouter;
