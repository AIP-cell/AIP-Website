import express from 'express';

// import { authMiddleware } from '../../middleware/AuthMiddleware.js';
import homePageRouter from './main-routes/HomePageRouter.js';
import aipImpactCasestudiesRouter from './main-routes/AipImpactCasestudiesRouter.js';
import foundationFactRouter from './main-routes/AipImpactFoundationFactRouter.js';
import aipImpactPeopleRouter from './main-routes/AipImpactPeopleRouter.js';
import aipImpactTestimonialRouter from './main-routes/AipImpactTestimonialsRouter.js';
import founderNetworkRouter from './main-routes/FoundersNetworkRouter.js';
import founderNetworkTestimonialRouter from './main-routes/FounderNetworkTestimonialsRouter.js';
import philanthropistNetworkCasestudiesRouter from './main-routes/PhilanthropistNetworkCasestudiesRouter.js';
import philanthropistNetworkPeopleRouter from './main-routes/PhilanthropistNetworkPeopleRouter.js';
import yearRouter from './main-routes/YearRouter.js';
import financialReportRouter from './main-routes/FinancialReportRouter.js';
import aipTeamRouter from './main-routes/AipTeamRouter.js';
import selectedWorkRouter from './main-routes/SelectedWorkRouter.js';
import faqRouter from './main-routes/faqRouter.js';
import generalInformationRouter from './main-routes/GeneralInformationRouter.js';
import quoteRouter from './main-routes/HomePageQuoteRouter.js';
import founderNetworkMethodsRouter from './main-routes/FounderNetworkMethodsRouter.js';
import aipResourceRouter from './main-routes/AipResourceRouter.js';
import curatedResourceRouter from './main-routes/CuratedResourceRouter.js';
import npoRouter from './main-routes/NpoCasestudiesRouter.js';
import npoPeopleRouter from './main-routes/NpoPeopleRouter.js';
import { authMiddleware } from './../../middleware/AuthMiddleware.js';
import partnerRouter from './main-routes/PartnerRouter.js';
import projectAndProgramRouter from './main-routes/ProjectAndProgramsRouter.js';
import projectAndProgramGalleryRouter from './main-routes/ProjectAndProgramGalleryRouter.js';
import projectAndProgramMediaRouter from './main-routes/ProjectAndProgramMediaRouter.js';
import projectAndProgramTestimonialRouter from './main-routes/ProjectAndProgramTestimonialRouter.js';
import collaborationRouter from './main-routes/CollaborationRouter.js';
import collaborationCityRouter from './main-routes/CollaborationCityRouter.js';
import collaborationAgendaRouter from './main-routes/CollaborationAgendaRouter.js';
import collaborationGalleryRouter from './main-routes/CollaborationGalleryRouter.js';
import collaborationMediaRouter from './main-routes/CollaborationMediaRouter.js';
import collaborationTestimonialRouter from './main-routes/CollaborationTestimonialRouter.js';
import userRouter from './main-routes/UserRouter.js';
import careerTestimonialRouter from './main-routes/CareerTestimonialRouter.js';
import contactRouter from './main-routes/ContactRouter.js';
import JourneySoFarRouter from './main-routes/JourneySoFarRouter.js';
import ourValueRouter from './main-routes/OurValueRouter.js';
import GivingRoadmapRouter from './main-routes/GivingRoadmapRouter.js';
import blogRouter from './main-routes/BlogRouter.js';
import galleryRouter from './main-routes/GalleryRouter.js';
import profileRouter from './main-routes/ProfileRouter.js';
import bookRouter from './main-routes/BookRouter.js';
import marqueRouter from './main-routes/MargueRouter.js';
import modalRouter from './main-routes/ModalRouter.js';

const dashboardAuthRoutes = express.Router();

dashboardAuthRoutes.use(authMiddleware);

dashboardAuthRoutes.use('/home-page', homePageRouter);

dashboardAuthRoutes.use('/npo/casestudies', npoRouter);
dashboardAuthRoutes.use('/profile', profileRouter);

dashboardAuthRoutes.use('/aip-impact/casestudies', aipImpactCasestudiesRouter);
dashboardAuthRoutes.use('/aip-impact/foundation-facts', foundationFactRouter);
dashboardAuthRoutes.use('/aip-impact/testimonials', aipImpactTestimonialRouter);
dashboardAuthRoutes.use('/founders-network/description', founderNetworkRouter);
dashboardAuthRoutes.use('/founders-network/testimonials', founderNetworkTestimonialRouter);
dashboardAuthRoutes.use('/founders-network/methods', founderNetworkMethodsRouter);
dashboardAuthRoutes.use('/philanthropist-network/casestudies', philanthropistNetworkCasestudiesRouter);
dashboardAuthRoutes.use('/philanthropist-network/people-we-work-with', philanthropistNetworkPeopleRouter);

dashboardAuthRoutes.use('/financial-report/year', yearRouter);
dashboardAuthRoutes.use('/partners', partnerRouter);
dashboardAuthRoutes.use('/users', userRouter);

dashboardAuthRoutes.use('/financial-report/report', financialReportRouter);

dashboardAuthRoutes.use('/aip-impact/people-we-work-with', aipImpactPeopleRouter);

dashboardAuthRoutes.use('/npo/npos-we-partner-with', npoPeopleRouter);

dashboardAuthRoutes.use('/team-aip/team', aipTeamRouter);

dashboardAuthRoutes.use('/team-aip/selected-works', selectedWorkRouter);

dashboardAuthRoutes.use('/home-page/quotes', quoteRouter);

dashboardAuthRoutes.use('/faq', faqRouter);

dashboardAuthRoutes.use('/aip-resources', aipResourceRouter);

dashboardAuthRoutes.use('/curated-resources', curatedResourceRouter);

dashboardAuthRoutes.use('/projects-programs', projectAndProgramRouter);

dashboardAuthRoutes.use('/projects-programs/galleries', projectAndProgramGalleryRouter);

dashboardAuthRoutes.use('/projects-programs/medias', projectAndProgramMediaRouter);

dashboardAuthRoutes.use('/projects-programs/testimonials', projectAndProgramTestimonialRouter);
dashboardAuthRoutes.use('/collaborations', collaborationRouter);
dashboardAuthRoutes.use('/collaborations/cities', collaborationCityRouter);
dashboardAuthRoutes.use('/collaborations/agendas', collaborationAgendaRouter);
dashboardAuthRoutes.use('/collaborations/galleries', collaborationGalleryRouter);
dashboardAuthRoutes.use('/collaborations/medias', collaborationMediaRouter);
dashboardAuthRoutes.use('/collaborations/testimonials', collaborationTestimonialRouter);

dashboardAuthRoutes.use('/general-informations', generalInformationRouter);
dashboardAuthRoutes.use('/aip-journey', JourneySoFarRouter);
dashboardAuthRoutes.use('/careers', careerTestimonialRouter);
dashboardAuthRoutes.use('/contact-form', contactRouter);
dashboardAuthRoutes.use('/our-values', ourValueRouter);
dashboardAuthRoutes.use('/giving-roadmap', GivingRoadmapRouter);
dashboardAuthRoutes.use('/blogs', blogRouter);
dashboardAuthRoutes.use('/galleries', galleryRouter);
dashboardAuthRoutes.use('/books', bookRouter);
dashboardAuthRoutes.use('/marque', marqueRouter);
dashboardAuthRoutes.use('/modal', modalRouter);

export default dashboardAuthRoutes;
