import express from 'express';

import { updateHomePage, viewHomePage } from '../../../controllers/dashboard/HomePageController.js';

const homePageRouter = express.Router();

// homePageRouter.get('/:id',getPageById);

// dataRouter.get('/table-data',getCasestudyData);
homePageRouter.put('/update', updateHomePage);

homePageRouter.get('/view', viewHomePage);

// dataRouter.put('/status/:id', casestudyStatusUpdate);

// homePageRouter.delete('/delete/:id', deletePage);

export default homePageRouter;
