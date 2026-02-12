import { GeneralInformationModel } from '../../modals/GeneralInformationModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getInTouch = async (req, res, next) => {
	try {
		const informations = (
			await GeneralInformationModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},

				{
					$project: {
						year: 1,
						email: 1,
						phoneNumber: 1,
						networkTeamName: 1,
						networkTeamEmail: 1,
						knowlwdgeTeamName: 1,
						knowlwdgeTeamEmail: 1,
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Fetched',
			data: informations,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
