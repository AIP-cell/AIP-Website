import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from '../../../env.js';
import { serverError } from '../../utils/errorHandler.js';
import { AuthModel } from '../../modals/AuthModel.js';
import mongoose from 'mongoose';
import { capitalizeFirstLetter } from '../../utils/capitalLetter.js';
import dayjs from 'dayjs';
import { verifyTurnstileToken } from '../../utils/recaptcha.js';

export const postAuthentication = async (req, res, next) => {
	try {
		const reqEmail = req.body.email.trim();
		const reqPassword = req.body.password.trim();

		const data = await verifyTurnstileToken(req.body.recaptcha_token);

		if (!data.success) {
			return res.status(433).json({
				success: true,
				message: 'reCAPTCHA validation failed',
			});
		}

		const user = await AuthModel.findOne({ email: reqEmail });

		if (!user) {
			return res.status(401).json({
				success: false,
				message: 'Authentication failed. User not found.',
			});
		}

		const isPasswordValid = bcrypt.compareSync(reqPassword, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({
				success: false,
				message: 'Authentication failed. Invalid password.',
			});
		}

		const accessToken = jwt.sign({ userId: user._id, role: user.role }, env.JWT_SECRET_KEY, {
			expiresIn: env.JWT_EXPIRES,
		});

		const userData = { email: user.email, role: user.role, name: user?.name, id: user?._id };

		return res.status(200).json({
			success: true,
			accessToken,
			userData,
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const createUsers = async (req, res, next) => {
	try {
		const { name, phoneNumber, email, password, confirmPassword } = req.body;

		const existingUser = await AuthModel.findOne({
			$or: [{ name: name }, { email: { $regex: new RegExp(`^${email}$`, 'i') } }],
			deletedAt: null,
		});

		if (password !== confirmPassword) {
			return res.status(422).json({
				success: false,
				message: 'Password does not match',
			});
		}

		if (existingUser) {
			return res.status(422).json({
				success: false,
				message: 'User already exists',
			});
		}

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		await AuthModel.create({
			email: email,
			name: name,
			phoneNumber: phoneNumber,
			role: '2',
			password: hash,
			deletedAt: null,
		});

		return res.status(200).json({
			success: true,
			message: 'User created successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getUserById = async (req, res, next) => {
	try {
		const userId = req.params.id;

		const user = await AuthModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(userId),
					deletedAt: null,
				},
			},
		]);

		if (user.length > 0) {
			return res.status(200).json({
				success: true,
				message: 'User data fetched',
				data: { user: user.at(0) },
			});
		}
		return res.status(404).json({
			success: false,
			message: 'User not found',
			data: {},
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const updateUser = async (req, res, next) => {
	try {
		const userId = req.params.id;
		const { name, phoneNumber, email, password, confirmPassword } = req.body;
		if (password !== confirmPassword) {
			return res.status(422).json({
				success: false,
				message: 'Password does not match',
			});
		}

		const user = await AuthModel.findOne({ _id: userId });
		if (!user) {
			return {
				success: false,
				message: 'User not found',
			};
		}
		const formattedName = await capitalizeFirstLetter(name);

		const existingUser = await AuthModel.findOne({
			$or: [{ name: formattedName }, { email: { $regex: new RegExp(`^${email}$`, 'i') } }],
			deletedAt: null,
			_id: { $ne: user._id },
		});

		if (existingUser) {
			return { message: 'User already exists!', success: false };
		}

		if (password) {
			if (password !== confirmPassword) {
				return {
					success: false,
					message: 'new password and confirm password are not same',
				};
			}

			const salt = bcrypt.genSaltSync(10);
			const newHash = bcrypt.hashSync(password, salt);

			user.password = newHash;
		}

		user.email = email;
		user.name = formattedName;

		user.phoneNumber = phoneNumber;

		await user.save();

		return res.status(200).json({
			success: true,
			message: 'User updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const deleteUser = async (req, res, next) => {
	try {
		const userId = req.params.id;

		const user = await AuthModel.findOne({ _id: userId });

		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'User not found',
			});
		}

		user.deletedAt = dayjs();
		await user.save();

		return res.status(200).json({
			success: true,
			message: 'User data deleted',
		});
	} catch (error) {
		return next(serverError(error));
	}
};

export const validateToken = async (req, res, next) => {
	try {
		const accessToken = req.headers.authorization;
		const { userId } = req.user;

		const user = await AuthModel.findById(userId);

		if (!user) {
			return res.status(401).json({
				success: false,
				message: 'Authentication failed. User not found.',
			});
		}

		const userData = { email: user.email, role: 'admin' };

		return res.status(200).json({
			success: true,
			accessToken: accessToken,
			userData: userData,
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const getAuthDetails = async (req, res, next) => {
	try {
		const authDetails = await AuthModel.find({});

		return res.status(200).json({
			success: true,
			data: { authDetails: authDetails },
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const postAuth = async (req, res, next) => {
	try {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(env.ADMIN_PASSWORD, salt);

		// const hash = bcrypt.hashSync(req.body.password, salt);
		await AuthModel.create({
			password: hash,
			email: env.ADMIN_EMAIL,
			// email: req.body.email,
		});

		return res.status(200).json({
			success: true,
			message: 'User Created',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const updatePassword = async (req, res, next) => {
	try {
		const { email, oldPassword, newPassword, confirmedPassword } = req.body;

		const user = await AuthModel.findOne({ email: email });

		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'There is no user with this email',
			});
		}

		const isPasswordValid = bcrypt.compareSync(oldPassword, user.password);
		const isPasswordSame = bcrypt.compareSync(newPassword, user.password);

		if (!isPasswordValid) {
			return res.status(201).json({
				success: false,
				message: 'Old password is incorrect',
			});
		}
		if (isPasswordSame) {
			return res.status(201).json({
				success: false,
				message: 'Old password and new password are cannot be same',
			});
		}
		if (newPassword !== confirmedPassword) {
			return res.status(201).json({
				success: false,
				message: 'new password and confirm password are not same',
			});
		}

		// Generate a new hash for the new password
		const salt = bcrypt.genSaltSync(10);
		const newHash = bcrypt.hashSync(newPassword, salt);

		// Update the user's password
		user.password = newHash;
		await user.save();

		return res.status(200).json({
			success: true,
			message: 'Password updated successfully',
		});
	} catch (err) {
		return next(serverError(err));
	}
};

export const userStatusUpdate = async (req, res, next) => {
	try {
		const updateStatus = await AuthModel.updateOne(
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
