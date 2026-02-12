import express from 'express';
import { updateJourneySoFar, viewJourneySoFar } from '../../../controllers/dashboard/JourneySoFarController.js';
import { uploadFile } from '../../../utils/fileUploader.js';

const JourneySoFarRouter = express.Router();

JourneySoFarRouter.put('/journey-so-far/update', uploadFile('aip-journey').any(), updateJourneySoFar);

JourneySoFarRouter.get('/journey-so-far/view', uploadFile('aip-journey').any(), viewJourneySoFar);

export default JourneySoFarRouter;
