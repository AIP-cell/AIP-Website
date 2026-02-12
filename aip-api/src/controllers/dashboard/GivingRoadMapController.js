import { AuthModel } from '../../modals/AuthModel.js';
import { GivingRoadmapModel } from '../../modals/GivingRoadmapModal.js';
import { serverError } from '../../utils/errorHandler.js';
import { getFilePath } from '../../utils/filePath.js';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const updateGivingRoadmap = async (req, res, next) => {
	try {
		const { userId } = req.user;
		const { isLink, isFile, link } = req.body;

		const givingRoadmap = await GivingRoadmapModel.findOne();

		let filePath = req.body?.file;

		req.files?.forEach((file) => {
			if (file.fieldname === 'file[]') {
				singleFileRemover(givingRoadmap.file);
				filePath = getFilePath(file);
			}
		});

		if (isLink === 'true' && !link) {
			return res.status(422).json({
				success: true,
				message: 'Link is mandatory',
			});
		}
		if (isFile === 'true' && !filePath) {
			return res.status(422).json({
				success: true,
				message: 'File is mandatory',
			});
		}

		if (!givingRoadmap) {
			const newData = {
				isLink,
				isFile,
				createdBy: userId,
				updatedBy: userId,
				deletedAt: null,
			};

			if (isLink == 'true') {
				newData.link = link;
			}
			if (isFile == 'true') {
				newData.file = filePath;
			}

			await GivingRoadmapModel.create(newData);
		} else {
			givingRoadmap.isLink = isLink;
			givingRoadmap.isFile = isFile;

			givingRoadmap.link = isLink == 'true' ? link : null;

			givingRoadmap.file = isFile == 'true' ? filePath : null;

			givingRoadmap.updatedBy = userId;

			await givingRoadmap.save();
		}

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};
export const viewRoadmap = async (req, res, next) => {
	try {
		const givingRoadmap = (
			await GivingRoadmapModel.aggregate([
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
						isLink: 1,
						isFile: 1,
						file: 1,
						link: 1,

						updatedBy: '$lastUpdated.name',
					},
				},
			])
		).at(0);

		return res.status(200).json({
			success: true,
			message: 'Retrived successfully',
			data: givingRoadmap,
		});
	} catch (err) {
		return next(serverError(err));
	}
};
