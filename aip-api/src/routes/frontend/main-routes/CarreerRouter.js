import express from 'express';
import { getAllCareers, getCareerPage, getCities } from '../../../controllers/frontend/CarreersController.js';

const careerRouter = express.Router();

careerRouter.get('/', getAllCareers);
careerRouter.get('/page', getCareerPage);
careerRouter.get('/cities', getCities);

export default careerRouter;
