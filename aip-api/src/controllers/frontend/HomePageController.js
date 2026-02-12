import { AipResource } from '../../enum/aipResourceEnum.js';
import { CuratedResourcesModel } from '../../modals/AipCuratedModal.js';
import { AipResourcesModel } from '../../modals/AipResourceModal.js';
import { AipTeamModel } from '../../modals/AipTeamModal.js';
import { CollaborationModel } from '../../modals/CollaborationModal.js';
import { HomePageModel } from '../../modals/HomePageModel.js';
import { serverError } from '../../utils/errorHandler.js';
import timezone from 'dayjs/plugin/timezone.js';
import dayjs from 'dayjs';
import { MarqueModel } from '../../modals/MarqueModal.js';
import { ModalsModel } from '../../modals/ModalModel.js';

dayjs.extend(timezone);

export const getHomePage = async (req, res, next) => {
	try {
		const tenDaysAgo = new Date();
		tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

		const team = await AipTeamModel.aggregate([
			{
				$match: {
					coreFounder: true,
					deletedAt: null,
				},
			},
			{
				$sort: {
					name: 1,
				},
			},
			{
				$project: {
					name: 1,
					designation: 1,
					organisation: 1,
					quote: 1,
					description: 1,
					linkedln: 1,
					image: 1,
					slug: 1,
					linkOrVideo: 1,
					video: 1,
					videoLink: 1,
				},
			},
		]);

		const count = (
			await HomePageModel.aggregate([
				{
					$match: {
						deletedAt: null,
					},
				},
				{
					$project: {
						coreFoundersCount: 1,
						foundersCount: 1,
						membersCount: 1,
					},
				},
			])
		).at(0);
		const inTheMedia = await AipResourcesModel.aggregate([
			{
				$match: {
					category: AipResource.inTheMedia,
					deletedAt: null,
					isActive: true,
					isFeatured: true,
				},
			},
			{
				$project: {
					image: 1,
					description: 1,
					linkOrFile: 1,
					fileLink: 1,
					file: 1,
				},
			},
		]);
		const aipUpdates = await AipResourcesModel.aggregate([
			{
				$match: {
					deletedAt: null,
					// date: { $gte: tenDaysAgo },
					isActive: true,
					isFeatured: true,
				},
			},
			{
				$sort: {
					createdAt: -1,
				},
			},
			{
				$limit: 10,
			},
			{
				$project: {
					image: 1,
					description: 1,
					linkOrFile: 1,
					fileLink: 1,
					file: 1,
				},
			},
		]);
		const partner = await CuratedResourcesModel.aggregate([
			{
				$match: {
					category: 'partners',
					deletedAt: null,
					isActive: true,
					isFeatured: true,
				},
			},
			{
				$project: {
					image: 1,
					description: 1,
				},
			},
		]);
		const worldOfPhilanthropy = await CuratedResourcesModel.aggregate([
			{
				$match: {
					category: 'worldOfPhilanthropy',
					deletedAt: null,
					isActive: true,
					isFeatured: true,
				},
			},
			{
				$project: {
					image: 1,
					description: 1,
				},
			},
		]);
		const marque = (
			await MarqueModel.aggregate([
				{
					$project: {
						marque: 1,
						link: 1,
					},
				},
			])
		)[0];
		const modal = (
			await ModalsModel.aggregate([
				{
					$project: {
						description: 1,
						image: 1,
						link: 1,
					},
				},
			])
		)[0];
		const event = (
			await CollaborationModel.aggregate([
				{
					$match: {
						deletedAt: null,
						isActive: true,
						date: { $gte: dayjs().tz('Asia/Kolkata').startOf('day').toDate() },
					},
				},
				{
					$sort: {
						date: 1,
					},
				},
				{
					$project: {
						slug: 1,
						title: 1,
						description: 1,
						image: 1,
						date: 1,
					},
				},
				{
					$limit: 1,
				},
			])
		).at(0);
		const newsAndUpdates = {
			inTheMedia,
			aipUpdates,
			partner,
			worldOfPhilanthropy,
		};
		return res.status(200).json({
			success: true,
			message: 'Updated successfully',
			data: {
				event,
				team,
				count,
				newsAndUpdates,
				marque,
				modal,
			},
		});
	} catch (err) {
		console.log(err);
		return next(serverError(err));
	}
};
