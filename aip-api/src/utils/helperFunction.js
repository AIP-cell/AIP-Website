export const convertUtcToISTStage = (utcField) => {
	return {
		$dateToString: {
			format: '%Y-%m-%d %H:%M:%S',
			date: `$${utcField}`,
			timezone: 'Asia/Kolkata',
		},
	};
};
