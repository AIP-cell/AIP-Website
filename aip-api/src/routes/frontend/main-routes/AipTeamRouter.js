import express from 'express';
import {
	getAdvisoryBoard,
	getOneTeamAip,
	getPeopleOfAip,
	teamAip,
} from '../../../controllers/frontend/TeamAipController.js';

const aipTeamRouter = express.Router();

aipTeamRouter.get('/', getPeopleOfAip);

aipTeamRouter.get('/advisory-board', getAdvisoryBoard);

aipTeamRouter.get('/:team', teamAip);

aipTeamRouter.get('/get-one/:slug', getOneTeamAip);

export default aipTeamRouter;
