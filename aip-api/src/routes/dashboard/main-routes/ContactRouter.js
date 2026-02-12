import express from 'express';
import { getContactData } from '../../../controllers/data-table/ContactFormDataTable.js';
import { deleteContactForm, getContactById } from '../../../controllers/dashboard/ContactFormController.js';

const contactRouter = express.Router();

contactRouter.get('/table-data', getContactData);

contactRouter.get('/view/:id', getContactById);

contactRouter.delete('/delete/:id', deleteContactForm);

export default contactRouter;
