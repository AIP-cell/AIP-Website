import express from 'express';

import { getMarque, updateMarque } from '../../../controllers/dashboard/MarqueController.js';

const marqueRouter = express.Router();

marqueRouter.put('/update', updateMarque);

marqueRouter.get('/view', getMarque);

export default marqueRouter;
