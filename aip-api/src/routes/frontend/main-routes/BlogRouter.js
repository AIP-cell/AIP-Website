import express from 'express';
import { getAllBlogs, getOneBlog } from '../../../controllers/frontend/BlogController.js';

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.get('/:slug', getOneBlog);

export default blogRouter;
