import express from 'express';
import {
	getAipCuratedResource,
	getOneAipCuratedResource,
} from '../../../controllers/frontend/CuratedResourceController.js';

const curatedResourceRouter = express.Router();

curatedResourceRouter.get('/', getAipCuratedResource);
curatedResourceRouter.get('/:slug', getOneAipCuratedResource);

export default curatedResourceRouter;
