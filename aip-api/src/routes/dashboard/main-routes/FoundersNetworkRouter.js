import express from 'express';

import {
	updateDescription,
	viewDescription,
} from '../../../controllers/dashboard/AipFounderNetworkDescriptionController.js';

const founderNetworkRouter = express.Router();

// homePageRouter.get('/:id',getPageById);

// dataRouter.get('/table-data',getCasestudyData);
founderNetworkRouter.put('/update', updateDescription);

founderNetworkRouter.get('/view', viewDescription);

// dataRouter.put('/status/:id', casestudyStatusUpdate);

// homePageRouter.delete('/delete/:id', deletePage);

export default founderNetworkRouter;
