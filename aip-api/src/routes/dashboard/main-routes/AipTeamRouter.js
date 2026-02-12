import express from 'express';
import { uploadVideo } from '../../../utils/fileUploader.js';

import {
	addAipTeam,
	deleteTeam,
	getAllCoreFounder,
	getAllTeam,
	getTeamById,
	teamStatusUpdate,
	updateTeam,
} from '../../../controllers/dashboard/AipTeamController.js';
import { getAipTeamData } from '../../../controllers/data-table/AipTeamDataTable.js';

const aipTeamRouter = express.Router();

aipTeamRouter.post('/create', uploadVideo('team-aip').any(), addAipTeam);

aipTeamRouter.get('/table-data', getAipTeamData);

aipTeamRouter.get('/view/:id', getTeamById);

aipTeamRouter.get('/get-all', getAllTeam);

aipTeamRouter.get('/get-all-core-founders', getAllCoreFounder);

aipTeamRouter.put('/status/:id', teamStatusUpdate);

aipTeamRouter.put('/update/:id', uploadVideo('team-aip').any(), updateTeam);

aipTeamRouter.delete('/delete/:id', deleteTeam);

export default aipTeamRouter;
