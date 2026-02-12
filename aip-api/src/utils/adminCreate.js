import bcrypt from 'bcrypt';
import { AuthModel } from '../models/AuthModels.js';
import env from '../env.js';

export const createAdmin = async () => {
	if(env.ENV == 'local')
	{
		return;
	}
	const adminExists = await AuthModel.findOne({});

	if (!adminExists) {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(env.ADMIN_PASSWORD, salt);

		const newUser = new AuthModel({
			password: hash,
			email: env.ADMIN_EMAIL,
		});
		await newUser.save();
	}
};
