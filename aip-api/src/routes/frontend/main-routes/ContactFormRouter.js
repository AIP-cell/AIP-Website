import express from 'express';
import { createContactForm } from '../../../controllers/frontend/ContactUsController.js';

const contactFormRouter = express.Router();

contactFormRouter.post('/', createContactForm);

export default contactFormRouter;
