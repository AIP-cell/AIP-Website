import express from 'express';

import { updatePassword } from '../../../controllers/dashboard/AuthController.js';

const profileRouter = express.Router();

profileRouter.put('/update-password/:id', updatePassword);

export default profileRouter;
