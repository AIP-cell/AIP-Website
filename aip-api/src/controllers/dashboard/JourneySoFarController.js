import { JourneySoFarModel } from '../../modals/AipJourneyModal.js';
import { AuthModel } from '../../modals/AuthModel.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const updateJourneySoFar = async (req, res, next) => {
	try {
		const { description } = req.body;

		const { userId } = req.user;

		let image = req.body?.image;

		const journeySoFar = await JourneySoFarModel.findOne();

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				singleFileRemover(journeySoFar.image);
				image = getFilePath(file);
			}
		});

		if (!journeySoFar) {
			await JourneySoFarModel.create({
				description: description,
				image: image,
				createdBy: userId,
				updatedBy: userId,
				deletedAt: null,
			});
		} else {
			journeySoFar.description = description;
			journeySoFar.image = image;
			journeySoFar.updatedBy = userId;
			await journeySoFar.save();
		}

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const viewJourneySoFar = async (req, res, next) => {
	try {
		const journeySoFar = (
			await JourneySoFarModel.aggregate([
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
						description: 1,
						image: 1,
						updatedBy: '$lastUpdated.name',
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
			data: journeySoFar,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
