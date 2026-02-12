import express from 'express';

import {
	updateAipImpactFoundationPage,
	viewFoundationPage,
} from '../../../controllers/dashboard/AipImpactFoundationFactController.js';

const foundationFactRouter = express.Router();

// homePageRouter.get('/:id',getPageById);

// dataRouter.get('/table-data',getCasestudyData);
foundationFactRouter.put('/update', updateAipImpactFoundationPage);

foundationFactRouter.get('/view', viewFoundationPage);

// dataRouter.put('/status/:id', casestudyStatusUpdate);

// homePageRouter.delete('/delete/:id', deletePage);

export default foundationFactRouter;
