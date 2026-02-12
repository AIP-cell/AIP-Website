import dayjs from 'dayjs';
import { serverError } from '../../utils/errorHandler.js';
import mongoose from 'mongoose';
import { getFilePath } from '../../utils/filePath.js';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import { singleFileRemover } from '../../utils/fileRemover.js';
import { BlogsModel } from '../../modals/BlogsModel.js';
import { htmlToText } from 'html-to-text';

export const addBlogs = async (req, res, next) => {
	try {
		const { title, readingTime, author, description, date, twitter, linkedIn, youtube, otherLink, tags } = req.body;

		// if (!links) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'Link is mandatory',
		// 	});
		// }
		const { userId } = req.user;

		const formatedName = capitalizeFirstLetter(title);
		const formatedAuthor = capitalizeFirstLetter(author);

		const existingName = await BlogsModel.findOne({ name: formatedName, deletedAt: null });

		// Convert HTML to plain text
		const plainText = htmlToText(description, {
			wordwrap: false,
			selectors: [
				{
					selector: 'a',
					format: 'inline',
				},
			],
		});

		// Trim to 200 words
		const shortDescription = plainText.split(/\s+/).slice(0, 200).join(' ');

		if (existingName) {
			return res.status(409).json({
				success: false,
				message: 'Blog already exists',
			});
		}
		let image;

		req.files?.forEach((file) => {
			if (file.fieldname === 'image') {
				image = getFilePath(file);
			}
		});

		await BlogsModel.create({
			title: title,
			twitter: twitter,
			linkedIn: linkedIn,
			youtube: youtube,
			shortDescription: shortDescription,
			otherLink: otherLink,
			readingTime: readingTime,
			author: formatedAuthor,
			description: description,
			date: date,
			searchKeywords: tags,
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

export const deleteBlogs = async (req, res, next) => {
	try {
		const blogId = req.params.id;

		const blog = await BlogsModel.findOne({ _id: blogId });
		if (blog.image) {
			singleFileRemover(blog.image);
		}

		if (!blog) {
			return res.status(404).json({
				success: false,
				message: 'Blog not found',
			});
		}

		blog.deletedAt = dayjs();
		await blog.save();

		return res.status(200).json({
			success: true,
			message: 'Blog data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const getBlogById = async (req, res, next) => {
	try {
		const blogId = req.params.id;

		const blog = await BlogsModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(blogId),
					deletedAt: null,
				},
			},
		]);

		if (blog.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'Blog data fetched',
				data: { blog: blog.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'Blog not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateBlog = async (req, res, next) => {
	try {
		const blogId = req.params.id;

		const { title, readingTime, author, description, date, twitter, linkedIn, youtube, otherLink, tags } = req.body;

		const { userId } = req.user;
		// if (!links) {
		// 	return res.status(422).json({
		// 		success: true,
		// 		message: 'Link is mandatory',
		// 	});
		// }

		const formatedName = capitalizeFirstLetter(title);
		const formatedAuthor = capitalizeFirstLetter(author);
		const existingYear = await BlogsModel.findOne({
			title: formatedName,
			_id: { $ne: blogId },
			deletedAt: null,
		});
		const blog = await BlogsModel.findOne({
			_id: blogId,
			deletedAt: null,
		});

		if (existingYear) {
			return res.status(409).json({
				success: false,
				message: 'Blog already exists',
			});
		}

		const plainText = htmlToText(description, {
			wordwrap: false,
			selectors: [
				{
					selector: 'a',
					format: 'inline',
				},
			],
		});

		const shortDescription = plainText.split(/\s+/).slice(0, 200).join(' ');

		let image = req.body?.image;

		if (req.files && Array.isArray(req.files) && req.files.length != 0) {
			req.files?.map((file) => {
				if (file.fieldname === 'image') {
					singleFileRemover(blog.image);
					image = getFilePath(file);
				}
			});
		}

		blog.title = formatedName;
		blog.twitter = twitter;
		blog.linkedIn = linkedIn;
		blog.youtube = youtube;
		blog.shortDescription = shortDescription;
		blog.otherLink = otherLink;
		blog.author = formatedAuthor;
		blog.description = description;
		blog.date = date;
		blog.readingTime = readingTime;
		blog.tags = tags;
		blog.image = image;
		blog.updatedBy = userId;

		await blog.save();

		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
		});
	} catch (error) {
		return next(serverError(error));
	}
};
export const blogStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await BlogsModel.updateOne(
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
