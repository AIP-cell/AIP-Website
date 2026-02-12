import express from 'express';
import { getInTouch } from '../../../controllers/frontend/GetInTouchController.js';

const getInTouchRouter = express.Router();

getInTouchRouter.get('/', getInTouch);

export default getInTouchRouter;
