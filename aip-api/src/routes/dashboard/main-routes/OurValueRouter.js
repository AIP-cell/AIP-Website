import express from 'express';

import {
	addOurValues,
	deleteOurValues,
	getOurValuesById,
	ourValueStatusUpdate,
	updateOurValues,
} from '../../../controllers/dashboard/OurValuesController.js';
import { getOurValueData } from '../../../controllers/data-table/OurValueDataTable.js';

const ourValueRouter = express.Router();

ourValueRouter.post('/create', addOurValues);

ourValueRouter.get('/table-data', getOurValueData);

ourValueRouter.get('/view/:id', getOurValuesById);

ourValueRouter.put('/status/:id', ourValueStatusUpdate);

ourValueRouter.put('/update/:id', updateOurValues);

ourValueRouter.delete('/delete/:id', deleteOurValues);

export default ourValueRouter;
