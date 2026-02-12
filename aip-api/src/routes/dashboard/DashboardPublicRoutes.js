import express from 'express';
import { authenticationRouter } from './main-routes/AuthRouter.js';

const dashboardPublicRoutes = express.Router();

dashboardPublicRoutes.use('/auth', authenticationRouter);

export default dashboardPublicRoutes;
