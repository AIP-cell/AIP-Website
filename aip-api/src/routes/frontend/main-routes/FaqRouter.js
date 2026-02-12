import express from 'express';
import { getAllfaq } from '../../../controllers/frontend/FaqController.js';

const faqRouter = express.Router();

faqRouter.get('/', getAllfaq);

export default faqRouter;
