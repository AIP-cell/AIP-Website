import express from 'express';
import env from './env.js';
import cors from 'cors';
import cron from 'node-cron';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import { cwd } from 'process';

import ConnectDB from './src/config/db.js';
import { fetchAndStoreData } from './src/utils/careers.js';

import { dashboardRouter } from './src/routes/dashboard/DashboardRoutes.js';
import { frontendRouter } from './src/routes/frontend/FrontendRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(mongoSanitize());
app.use('/uploads', express.static(cwd() + '/uploads', { maxAge: 31557600 }));

app.use(
	helmet({
		crossOriginEmbedderPolicy: false,
		crossOriginResourcePolicy: { policy: 'cross-origin' },
		contentSecurityPolicy: {
			directives: {
				// eslint-disable-next-line quotes
				defaultSrc: ["'self'"],
				// eslint-disable-next-line quotes
				imgSrc: ["'self'", 'data:', '*.ubnhb.in'],
				// eslint-disable-next-line quotes
				connectSrc: ["'self'", '*.ubnhb.in'],
			},
		},
	}),
);

cron.schedule('0 */6 * * *', async () => {
	console.log('Cron job started');
	await fetchAndStoreData();
	console.log('Cron job completed');
});

// dashboard route
app.use('/api/admin', dashboardRouter);

app.use('/api/frontend', frontendRouter);

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

// // error handler
app.use((err, req, res, next) => {
	if (err.status === 404) {
		res.status(404).json({
			success: false,
			message: 'Page Not Found',
		});
	} else {
		const errorStatus = err.status || 500;
		const errorMessage = err.message || 'Something went wrong';
		res.status(errorStatus).json({
			success: false,
			status: errorStatus,
			message: errorMessage,
		});
	}
	next();
});

const { PORT } = env;

ConnectDB();
app.listen(PORT, () => {
	console.log(`server listening to the port ${PORT}`);
});
