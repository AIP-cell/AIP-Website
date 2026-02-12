import express from 'express';
import frontendPublicRoutes from './FrontendPublicRoutes.js';
import frontendAuthRoutes from './FrontendAuthRoutes.js';

export const frontendRouter = express.Router();

frontendRouter.use(frontendPublicRoutes);
frontendRouter.use(frontendAuthRoutes);
