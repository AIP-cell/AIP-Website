// Start Home Page Types
export type THomePageData = {
  event: THomePageEvent;
  team: THomePageTeam[];
  count: THomePageCount;
  newsAndUpdates: THomePageNews;
};
export type THomePageEvent = {
  _id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  slug: string;
};
export type THomePageTeam = {
  _id: string;
  name: string;
  designation: string;
  description: string;
  linkedln: string;
  quote: string;
  organisation: string;
  slug: string;
  image: string;
  linkOrVideo: string;
  video: string;
  videoLink: string;
};
export type THomePageCount = {
  _id: string;
  coreFoundersCount: number;
  foundersCount: number;
  membersCount: number;
};
export type THomePageNews = {
  inTheMedia: THomePageNewsInTheMedia[];
  aipUpdates: THomePageNewsAipUpdates[];
  partner: THomePageNewsPartner[];
  worldOfPhilanthropy: THomePageNewsWorldOfPhilanthropy[];
};
export type THomePageNewsInTheMedia = {
  _id: string;
  description: string;
  image: string;
};
export type THomePageNewsAipUpdates = {
  _id: string;
  description: string;
  image: string;
};
export type THomePageNewsPartner = {
  _id: string;
  description: string;
  image: string;
};
export type THomePageNewsWorldOfPhilanthropy = {
  _id: string;
  description: string;
  image: string;
};
// End Home Page Types

// Start Aip Impact Types

export type TAipImpactPageData = {
  aipImpact: TAipImpact[];
};
export type TAipImpact = {
  casestudies: TCaseStudies[];
  people: TPeople[];
  testimonials: TTestimonials[];
  foundationFacts: TFoundationFacts;
};

export type TFoundationFacts = {
  coreFoundersCount: number;
  eventsCount: number;
  footprintCount: number;
  foundersCount: number;
  knowledgeProductsCount: number;
  membersCount: number;
  knowledgeResourcesCount: number;
  networkMembersCount: number;
  purposefulEngagementsCount: number;
  researchReportsCount: number;
};
export type TTestimonials = {
  name: string;
  designation: string;
  description: string;
  image: string;
  isActive: true;
  _id: string;
  linkOrVideo: string;
  video: string;
  videoLink: string;
  searchKeywords: [string];
};
export type TCaseStudies = {
  title: string;
  slug: string;
  organisationName: string;
  organisation: string;
  philanthropistName: string;
  foundationName: string;
  initiativeName: string;
  description: string;
  isLinkOrPdf: string;
  linkOrVideo: string;
  image: string;
  video: string;
  _id: string;
  file: string;
  fileLink: string;
  videoLink: string;
  links: [
    {
      link: string;
      _id: string;
    }
  ];
  searchKeywords: [string];
};
export type TPeople = {
  name: string;
  designation: string;
  image: string;
  isActive: true;
  _id: string;
  searchKeywords: [string];
};

// Enc Aip Impact Types\

// Start Aip journey
export type TAipJourney = {
  ourValues: TOurValues[];
};
export type TOurValues = {
  _id: string;
  description: string;
  title1: string;
  title2: string;
};
export type TJourney = {
  _id: string;
  description: string;
  image: string;
  searchKeywords: [string];
};
// End Aip journey

// Start Resource center

export type TAipResourcesCategory = {
  _id: string;
  title: string;
  domain: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  link: string;
  key: string;
  shortDescription: string;
  isLinkOrPdf: string;
  fileLink: string;
  file: string;
  category: string;
  city: string;
  readingTime: string;
  author: string;
};
export type TCuratedResourcesExpertsInner = {
  curatedResource: TCuratedResourcesInner;
};
export type TCuratedResourcesInner = {
  _id: string;
  title: string;
  domain: string;
  description: string;
  image: string;
  video: string;
  linkOrFile: string;
  linkOrVideo: string;
  expertName: string;
  file: string;
  date: string;
  links: TLinks[];
  galleryImages: TGalleryImages[];
  galleryVideos: TGalleryVideos[];
  fileLink: string;
  typeOfContent: string;
  videoLink: string;
};
export type TInnerBlog = {
  _id: string;
  title: string;
  readingTime: string;
  author: string;
  description: string;
  date: string;
  image: string;
  updatedAt: string;
  slug: string;
  twitter: string;
  linkedIn: string;
  youtube: string;
  otherLink: string;
  tags: string[];
};

// End Resource center

// Start Founder Network

export type TFounderNetworkPageData = {
  founderNetwork: TFounderNetwork[];
};
export type TFounderNetwork = {
  _id: string;
  description1: string;
  description2: string;
  testimonials: TTestimonials[];
  methodsOfJoining: TMethodsOfJoining[];
  casestudies: TCaseStudies[];
  people: TPeople[];
  teamMembers: TTeamMembers[];
};
export type TMethodsOfJoining = {
  name: string;
  designation: string;
  email: string;
  image: string;
  isActive: boolean;
  _id: string;
};

// End Founder Network
// Start Philanthropist Networks

export type TPhilanthropistNetworkPage = {
  philanthropistNetwork: TPhilanthropistNetwork[];
};
export type TPhilanthropistNetwork = {
  casestudies: TCaseStudies[];
  people: TPeople[];
};

// End Philanthropist Networks

// Start Faqs

export type TFaqsPageData = {
  faqs: TFaqs[];
  category: string;
};
export type TFaqs = {
  question: string;
  answer: string;
};

// End Faqs

// Start FinancialReport

export type TFinancialReportPageData = {
  reports: TReports[];
};
export type TReports = {
  financialReports: TFinancialReports[];
  year: string;
  originalYear: string;
};
export type TFinancialReports = {
  report: string;
  name: string;
};

// End FinancialReport

// Start NPOS

export type TNpos = {
  casestudies: TCaseStudies[];
  people: TPeople[];
};

// End NPOS

// Start People Of Aip

export type TCoreFoundersAndFounders = {
  teamMembers: TTeamMembers[];
  coreFounderMembers: TCoreFounders[];
};
export type TPeopleOfAip = {
  teamMembers: TTeamMembers[];
};
export type TCoreFounders = {
  _id: string;
  name: string;
  designation: string;
  description: string;
  quote: string;
  organisation: string;
  slug: string;
  linkOrVideo: string;
  image: string;
  linkedin: string;
  videoLink: string;
};
export type TTeamMembers = {
  _id: string;
  name: string;
  designation: string;
  description: string;
  quote: string;
  organisation: string;
  slug: string;
  linkOrVideo: string;
  image: string;
  linkedin: string;
  videoLink: string;
};

// End People Of Aip

// people aip

export type TPeopleAip = {
  boardOfDirectors: TboardOfDirectors[];
  teamAIP: TteamAIP[];
};

export type TboardOfDirectors = {
  _id: string;
  name: string;
  designation: string;
  quote: string;
  linkedln: string;
  linkOrVideo: string;
  slug: string;
  image: string;
};

export type TteamAIP = {
  _id: string;
  name: string;
  designation: string;
  quote: string;
  linkedln: string;
  linkOrVideo: string;
  slug: string;
  image: string;
};

// Start People Of Aip Get One

export type TPeopleOfAipGetOne = {
  teams: TPeopleOfAipTeams;
};
export type TPeopleOfAipTeams = {
  _id: string;
  name: string;
  designation: string;
  description: string;
  quote: string;
  linkedln: string;
  linkOrVideo: string;
  twitter: string;
  image: string;
  video: string;
  videoLink: string;
  slug: string;
  links: TLinks[];
  selectedWorks: TSelectedWorks[];
};

export type TLinks = {
  _id: string;
  name: string;
  link: string;
};
export type TSelectedWorks = {
  _id: string;
  name: string;
  title: string;
  description: string;
  domain: string;
  image: string;
  slug: string;
  category: string;
  date: string;
};

// End People Of Aip Get One

// Start Experts
export type TOurWorkExpertsData = {
  experts: TExperts[];
  selectedWorks: TSelectedWorks[];
};
export type TExperts = {
  _id: string;
  name: string;
  organisation: string;
  image: string;
};
// End Experts

// Start People Of Aip

export type TProjectPrograms = {
  _id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  slug: string;
};

// End People Of Aip
// Start People Of Aip

export type TRoadMap = {
  _id: string;
  link: string;
  isLink: boolean;
  isFile: boolean;
  file: string;
};

// End People Of Aip

// Start Inner People Of Aip

export type TOneProjectProgramsPage = {
  projectAndProgram: TOneProjectPrograms;
};
export type TOneProjectPrograms = {
  category: string;
  date: string;
  title: string;
  field: string;
  partners: TPartners;
  description: string;
  report: string;
  image: string;
  gallery: TGallery;
  media: TMedia[];
  testimonials: TTestimonials[];
};
export type TPartners = {
  name: string;
  image: string;
  link: string;
};
export type TGallery = {
  galleryImages: TGalleryImages[];
  galleryVideos: TGalleryVideos[];
};
export type TGalleryImages = {
  title: string;
  date: string;
  image: string;
  _id: string;
};
export type TGalleryVideos = {
  title: string;
  date: string;
  linkOrVideo: string;
  link: string;
  video: string;
  _id: string;
};
export type TMedia = {
  date: string;
  title: string;
  link: string;
  description: string;
  image: string;
  _id: string;
};

// End Inner People Of Aip

// Start Collaboration

export type TCollaborationPageData = {
  collaborations: TCollaborationsArray[];
  partners: TPartnerCollaboration[];
};
export type TCollaborationsArray = {
  _id: string;
  title: string;
  date: string;
  category: string;
  slug: string;
  description: string;
  collaborations: TCollaboration[];
};
export type TCollaboration = {
  _id: string;
  name: string;
  image: string;
};
export type TPartnerCollaboration = {
  _id: string;
  name: string;
};

// End Collaboration

// Start Inner Collaboration

export type TOneCollaborationPageData = {
  collaboration: TOneCollaboration;
};
export type TOneCollaboration = {
  _id: string;
  category: string;
  image: string;
  date: string;
  title: string;
  description: string;
  cities: TCities[];
};
export type TCities = {
  _id: string;
  name: string;
  fromDate: string;
  toDate: string;
  time: string;
  linkOrVideo: string;
  report: string;
  videoLink: string;
  youtube: string;
  twitter: string;
  organisationDetails: TOrganisationDetails[];
  catchupDetails: TCatchupDetails[];
  gallery: TGallery;
  agenda: TAgenda[];
  media: TMedia[];
  testimonials: TTestimonials[];
  Video: string;
  collaborations: TCollaboration[];
};
export type TOrganisationDetails = {
  image: string;
  link: string;
  _id: string;
};
export type TCatchupDetails = {
  image: string;
  link: string;
  _id: string;
};
export type TAgenda = {
  title: string;
  date: string;
  fromTime: string;
  toTime: string;
  description: string;
  _id: string;
};

// End Inner Collaboration

// Start Gallery Collaboration

export type TGalleryCollaboration = {
  title: string;
  description: string;
  gallery: TGallery;
};
// End Gallery Collaboration

// Start Search

export type TSearch = {
  _id: string;
  title: string;
  description: string;
  designation: string;
  organisationName: string;
  philanthropistName: string;
  initiativeName: string;
  image: string;
  question: string;
  answer: string;
  year: string;
  report: string;
  galleryImages: TGalleryImages[];
  video: string;
  name: string;
  slug: string;
  key: string;
  pages: object;
};

// End Search
export type TJob = {
  id: number;
  organization: number;
  hash: string;
  position_name: string;
  description: string;
  headcount: number;
  contract_details: string;
  career_page_url: string;
  address: string;
  is_pinned_in_career_page: boolean;
  is_remote: null;
  salary_max: null;
  salary_min: null;
  status: string;
};

export type TCareersPage = {
  jobs: TJob[];
  testimonials: TTestimonials[];
};
export type TAllPositions = {
  jobs: TJob[];
  totalCount: number;
  currentPage: number;
  pageCount: number;
};
export type TGetInTouch = {
  _id: string;
  email: string;
  phoneNumber: string;
  networkTeamName: string;
  networkTeamEmail: string;
  knowlwdgeTeamName: string;
  knowlwdgeTeamEmail: string;
};
