import express from 'express';
import { aipJourney } from '../../../controllers/frontend/AipJourneyController.js';

const aipJourneyRouter = express.Router();

aipJourneyRouter.get('/', aipJourney);

export default aipJourneyRouter;
