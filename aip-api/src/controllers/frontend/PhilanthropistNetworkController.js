import { PhilanthropistNetworkModel } from '../../modals/PhilanthropistNetworkModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const philanthropistNetwork = async (req, res, next) => {
	try {
		const philanthropistNetwork = (
			await PhilanthropistNetworkModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},
				{
					$project: {
						casestudies: 1,

						people: 1,
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: philanthropistNetwork,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
