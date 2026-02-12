import { CareerOpenRolesModel } from '../modals/CareerOpenRolesModal.js';
import { getJobs } from './getOrganisation.js';

export const fetchAndStoreData = async () => {
	try {
		const [jobs] = await Promise.all([getJobs()]);
		await saveDataToDatabase({ jobs });

		console.log('Data successfully fetched and stored.');
	} catch (err) {
		console.error('Error in fetchAndStoreData:', err.message);
	}
};

const saveDataToDatabase = async ({ jobs }) => {
	try {
		await CareerOpenRolesModel.deleteMany({});

		if (jobs.length > 0) {
			const jobBulkOps = jobs.map((job) => ({
				updateOne: {
					filter: { id: job.id },
					update: { $set: job },
					upsert: true,
				},
			}));
			await CareerOpenRolesModel.bulkWrite(jobBulkOps);
		}
	} catch (err) {
		console.error('Error saving data to the database:', err.message);
	}
};
