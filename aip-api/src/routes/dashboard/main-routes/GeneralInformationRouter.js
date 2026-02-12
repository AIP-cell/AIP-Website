import express from 'express';

import {
	updateGeneralInformation,
	viewGeneralInformation,
} from '../../../controllers/dashboard/GeneralInformationController.js';

const generalInformationRouter = express.Router();

generalInformationRouter.put('/update', updateGeneralInformation);

generalInformationRouter.get('/view', viewGeneralInformation);

export default generalInformationRouter;
