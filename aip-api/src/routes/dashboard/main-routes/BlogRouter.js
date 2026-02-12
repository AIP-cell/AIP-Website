import express from 'express';
import { uploadFile } from '../../../utils/fileUploader.js';

import {
	addBlogs,
	blogStatusUpdate,
	deleteBlogs,
	getBlogById,
	updateBlog,
} from '../../../controllers/dashboard/BlogController.js';
import { getBlogData } from '../../../controllers/data-table/BlogDataTable.js';

const blogRouter = express.Router();

blogRouter.post('/create', uploadFile('team-aip').any(), addBlogs);

blogRouter.get('/table-data', getBlogData);

blogRouter.get('/view/:id', getBlogById);

blogRouter.put('/status/:id', blogStatusUpdate);

blogRouter.put('/update/:id', uploadFile('team-aip').any(), updateBlog);

blogRouter.delete('/delete/:id', deleteBlogs);

export default blogRouter;
