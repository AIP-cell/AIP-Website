import express from 'express';

import {
	addYear,
	deleteYear,
	getAllYears,
	getYearById,
	updateYear,
	yearStatusUpdate,
} from '../../../controllers/dashboard/YearController.js';
import { getYearData } from '../../../controllers/data-table/YearDataTable.js';

const yearRouter = express.Router();

yearRouter.post('/create', addYear);

yearRouter.get('/get-all', getAllYears);

yearRouter.get('/table-data', getYearData);

yearRouter.get('/view/:id', getYearById);

yearRouter.put('/status/:id', yearStatusUpdate);

yearRouter.put('/update/:id', updateYear);

yearRouter.delete('/delete/:id', deleteYear);

export default yearRouter;
