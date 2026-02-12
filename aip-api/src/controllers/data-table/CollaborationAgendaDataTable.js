import mongoose from 'mongoose';
import { CollaborationCityModel } from '../../modals/CollaborationCityModel.js';
import { serverError } from '../../utils/errorHandler.js';

export const getCollaborationAgendaData = async (req, res, next) => {
	try {
		const page = Math.abs(Number.parseInt(req.query.page) || 1);
		const pageSize = 15;
		const searchTerm = req.query.q;
		const Id = req.query.id;

		const aggregationPipeline = [
			{
				$match: { deletedAt: null, _id: new mongoose.Types.ObjectId(Id) },
			},
			{
				$unwind: '$agenda',
			},
			{
				$match: searchTerm
					? {
							$or: [
								{ 'agenda.title': { $regex: searchTerm, $options: 'i' } },
								{ 'agenda.description': { $regex: searchTerm, $options: 'i' } },
							],
						}
					: {},
			},
			{
				$sort: { 'agenda._id': -1 },
			},
			{
				$group: {
					_id: '$_id',
					agenda: { $push: '$agenda' },
				},
			},
			{
				$facet: {
					paginatedResults: [{ $skip: (page - 1) * pageSize }, { $limit: pageSize }],
					totalCount: [{ $count: 'count' }],
				},
			},
		];

		const agenda = await CollaborationCityModel.aggregate(aggregationPipeline);

		if (!agenda || agenda.length === 0) {
			return res.status(200).json({
				success: false,
				message: 'No agenda found',
				data: {},
			});
		}
		const [result] = agenda;
		return res.status(200).json({
			success: true,
			message: 'Agenda data fetched',
			data: {
				agendas: result.paginatedResults?.at(0)?.agenda,
				totalCount: result.totalCount.at(0)?.count,
				currentPage: page,
			},
		});
	} catch (error) {
		return next(serverError(error));
	}
};
