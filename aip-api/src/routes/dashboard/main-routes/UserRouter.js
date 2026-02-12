import express from 'express';

import {
	createUsers,
	deleteUser,
	getUserById,
	updateUser,
	userStatusUpdate,
} from '../../../controllers/dashboard/AuthController.js';
import { getUserData } from '../../../controllers/data-table/UserDataTable.js';

const userRouter = express.Router();

userRouter.post('/create', createUsers);

userRouter.get('/table-data', getUserData);

userRouter.get('/view/:id', getUserById);

userRouter.put('/status/:id', userStatusUpdate);

userRouter.put('/update/:id', updateUser);

userRouter.delete('/delete/:id', deleteUser);

export default userRouter;
