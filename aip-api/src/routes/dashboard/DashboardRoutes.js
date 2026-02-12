import express from 'express';
import dashboardPublicRoutes from './DashboardPublicRoutes.js';
import dashboardAuthRoutes from './DashboardAuthRoutes.js';



export const dashboardRouter = express.Router();

dashboardRouter.use(dashboardPublicRoutes);
dashboardRouter.use(dashboardAuthRoutes);

