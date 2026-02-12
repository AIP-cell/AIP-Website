import express from 'express';
import { getHomePage } from '../../../controllers/frontend/HomePageController.js';

const homePageRouter = express.Router();

homePageRouter.get('/', getHomePage);

export default homePageRouter;
