import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { ProjectAndProgramModel } from '../../modals/ProjectAndProgramsModel.js';
import { capitalizeAllLetters, capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import path from 'path';
import { singleFileRemover } from '../../utils/fileRemover.js';

export const addProjectAndPrograms = async (req, res, next) => {
	try {
		const { title, tags, date, partners, category, description, domain, typeOfContent, organisation } = req.body;
		const { userId } = req.user;

		const formatedTitle = capitalizeFirstLetter(title);

		const existingName = await ProjectAndProgramModel.findOne({ title: title });

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Program already exists',
			});
		}
		let filePath;
		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'report[]') {
				filePath = 'uploads' + file.path.split(path.sep + 'uploads')[1];
			} else if (file.fieldname === 'image') {
				image = 'uploads' + file.path.split(path.sep + 'uploads')[1];
			}
		});

		if (!filePath) {
			return res.status(422).json({
				success: true,
				message: 'Report is mandatory',
			});
		}

		await ProjectAndProgramModel.create({
			title: formatedTitle,
			date: date,
			searchKeywords: tags,
			partners: partners,
			category: category,
			description: description,
			field: domain,
			typeOfContent: typeOfContent,
			organisation: organisation,
			report: filePath,
			image: image,
			createdBy: userId,
			updatedBy: userId,
			deletedAt: null,
		});

		return res.status(200).json({
			success: true,
			message: 'Added successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const deletePrograms = async (req, res, next) => {
	try {
		const programId = req.params.id;

		const program = await ProjectAndProgramModel.findOne({ _id: programId });

		if (program.report) {
			singleFileRemover(program.report);
		}

		if (program.image) {
			singleFileRemover(program.image);
		}

		if (!program) {
			return res.status(404).json({
				success: false,
				message: 'Program not found',
			});
		}

		program.deletedAt = dayjs();
		await program.save();

		return res.status(200).json({
			success: true,
			message: 'Program data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getProjectyId = async (req, res, next) => {
	try {
		const projectId = req.params.id;

		const project = await ProjectAndProgramModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(projectId),
					deletedAt: null,
				},
			},
		]);

		if (project.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Report data fetched',
				data: { project: project.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Report not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateProject = async (req, res, next) => {
	try {
		const projectId = req.params.id;

		const { userId } = req.user;

		const { title, date, tags, partners, collaborations, category, description, domain, typeOfContent, organisation } =
			req.body;

		const projects = await ProjectAndProgramModel.findOne({ _id: projectId, deletedAt: null });

		if (!projects) {
			return res.status(404).json({
				success: false,
				message: 'Project not found',
			});
		}

		const formatedTitle = capitalizeAllLetters(title);

		const existingProject = await ProjectAndProgramModel.findOne({
			name: formatedTitle,
			_id: { $ne: projectId },
			deletedAt: null,
		});

		if (existingProject) {
			return res.status(409).json({
				success: false,
				message: 'Project already exists',
			});
		}

		let filePath = req.body?.report;
		let image = req.body?.image;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'report[]') {
					singleFileRemover(projects.report);
					filePath = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				} else if (file.fieldname === 'image') {
					singleFileRemover(projects.image);
					image = 'uploads' + file.path.split(path.sep + 'uploads')[1];
				}
			});
		}

		if (!filePath) {
			return res.status(422).json({
				success: true,
				message: 'Pdf is mandatory',
			});
		}
		projects.searchKeywords = tags;
		projects.title = title;
		projects.date = date;
		projects.partners = collaborations;
		projects.category = category;
		projects.description = description;
		projects.field = domain;
		projects.typeOfContent = typeOfContent;
		projects.organisation = organisation;
		projects.report = filePath;
		projects.partners = partners;
		projects.image = image;
		projects.updatedBy = userId;
		await projects.save();

		return res.status(200).json({
			success: true,
			message: 'Project data updated',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const projectStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await ProjectAndProgramModel.updateOne(
			{ _id: new mongoose.Types.ObjectId(req.params.id) },
			[
				{
					$set: {
						isActive: {
							$not: '$isActive',
						},
					},
				},
			],
			{
				new: true,
			},
		);

		return res.status(200).json({
			success: true,
			message: 'Status updated.',
			data: { updateStatus: updateStatus },
		});
	} catch (error) {
		return next(serverError(error));
	}
};
