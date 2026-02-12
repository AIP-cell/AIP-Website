import express from 'express';
import { postAuthentication, validateToken } from '../../../controllers/dashboard/AuthController.js';
import { authMiddleware } from '../../../middleware/AuthMiddleware.js';

export const authenticationRouter = express.Router();

authenticationRouter.post('/login', postAuthentication);

authenticationRouter.get('/validate', authMiddleware, validateToken);
