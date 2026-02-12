import express from 'express';

import { getModal, updateModal } from '../../../controllers/dashboard/ModalController.js';
import { uploadFile } from '../../../utils/fileUploader.js';

const modalRouter = express.Router();

modalRouter.put('/update', uploadFile('modal').any(), updateModal);

modalRouter.get('/view', getModal);

export default modalRouter;
