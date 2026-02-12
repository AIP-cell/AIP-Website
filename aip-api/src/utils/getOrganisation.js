import axios from 'axios';

export const getJobs = async () => {
	try {
		const baseUrl =
			'https://api.manatal.com/open/v3/career-page/the-convergence-foundation/jobs/?ordering=created_at&page_size=1000';
		let jobs = [];
		let nextUrl = baseUrl;

		while (nextUrl) {
			const response = await axios.get(nextUrl);
			const data = response.data;

			jobs = jobs.concat(data.results || []);

			nextUrl = data.next;
		}

		return jobs;
	} catch (error) {
		console.error('Error fetching organizations:', error.message);
		throw new Error('Failed to fetch organizations');
	}
};
