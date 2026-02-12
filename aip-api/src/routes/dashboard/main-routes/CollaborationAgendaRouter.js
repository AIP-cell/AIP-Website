import express from 'express';

import { uploadFile } from '../../../utils/fileUploader.js';

import {
	addCollaborationAgenda,
	deleteAgenda,
	getAgendaById,
	updateCollaborationAgenda,
} from '../../../controllers/dashboard/CollaborationAgendaController.js';
import { getCollaborationAgendaData } from '../../../controllers/data-table/CollaborationAgendaDataTable.js';

const collaborationAgendaRouter = express.Router();

collaborationAgendaRouter.post('/create/:id', uploadFile('collaborations').any(), addCollaborationAgenda);

collaborationAgendaRouter.get('/table-data', getCollaborationAgendaData);

collaborationAgendaRouter.get('/view/:id', getAgendaById);

collaborationAgendaRouter.put('/update/:id', uploadFile('collaborations').any(), updateCollaborationAgenda);

collaborationAgendaRouter.delete('/delete/:id', deleteAgenda);

export default collaborationAgendaRouter;
