import express from 'express';
import {
	getCollaboration,
	getOneCollaborationGallery,
	getOneCollaborations,
} from '../../../controllers/frontend/CollaborationController.js';

const collaborationRouter = express.Router();

collaborationRouter.get('/', getCollaboration);

collaborationRouter.get('/:slug', getOneCollaborations);
collaborationRouter.get('/:slug/gallery', getOneCollaborationGallery);

export default collaborationRouter;
