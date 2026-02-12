import { AuthModel } from '../../modals/AuthModel.js';
import { GeneralInformationModel } from '../../modals/GeneralInformationModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const updateGeneralInformation = async (req, res, next) => {
	try {
		const { email, phoneNumber, networkTeamName, networkTeamEmail, knowlwdgeTeamName, knowlwdgeTeamEmail } = req.body;
		const { userId } = req.user;
		const generalInformation = await GeneralInformationModel.findOne();
		if (!generalInformation) {
			await GeneralInformationModel.create({
				email: email,
				phoneNumber: phoneNumber,
				networkTeamName: networkTeamName,
				networkTeamEmail: networkTeamEmail,
				knowlwdgeTeamName: knowlwdgeTeamName,
				knowlwdgeTeamEmail: knowlwdgeTeamEmail,
				createdBy: userId,
				updatedBy: userId,
				deletedAt: null,
			});
		} else {
			generalInformation.phoneNumber = phoneNumber;
			generalInformation.networkTeamName = networkTeamName;
			generalInformation.email = email;
			generalInformation.networkTeamEmail = networkTeamEmail;
			generalInformation.knowlwdgeTeamName = knowlwdgeTeamName;
			generalInformation.knowlwdgeTeamEmail = knowlwdgeTeamEmail;
			generalInformation.updatedBy = userId;
			await generalInformation.save();
		}

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const viewGeneralInformation = async (req, res, next) => {
	try {
		const generalInformation = (
			await GeneralInformationModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},
				{
					$lookup: {
						from: AuthModel.modelName,
						localField: 'updatedBy',
						foreignField: '_id',
						as: 'lastUpdated',
					},
				},
				{
					$unwind: {
						path: '$lastUpdated',
					},
				},
				{
					$project: {
						email: 1,
						phoneNumber: 1,
						networkTeamName: 1,
						networkTeamEmail: 1,
						knowlwdgeTeamName: 1,
						knowlwdgeTeamEmail: 1,
						updatedBy: '$lastUpdated.name',
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Retrived successfully',
			data: generalInformation,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
