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
};
export type THomePageTeam = {
  _id: string;
  name: string;
  designation: string;
  description: string;
  linkedln: string;
  image: string;
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
};
export type TTestimonials = {
  name: string;
  designation: string;
  description: string;
  image: string;
  isActive: true;
  _id: string;
  searchKeywords: [string];
};
export type TCaseStudies = {
  title: string;
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

// Enc Aip Impact Types

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
};
export type TCuratedResourcesExpertsInner = {
  curatedResource:TCuratedResourcesInner
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
  file: string;
  date: string;
  links: TLinks[];
  galleryImages: TGalleryImages[];
  galleryVideos: TGalleryVideos[];
  fileLink: string;
  typeOfContent: string;
  videoLink: string;
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

export type TPeopleOfAip = {
  teamMembers: TTeamMembers[];
};
export type TTeamMembers = {
  _id: string;
  name: string;
  designation: string;
  description: string;
  slug: string;
  linkOrVideo: string;
  videoLink: string;
};

// End People Of Aip

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
  slug: string;
  links: TLinks[];
};

export type TLinks = {
  link: string;
  _id: string;
};

// End People Of Aip

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

// Start Inner People Of Aip

export type TOneProjectProgramsPage = {
  projectAndProgram: TOneProjectPrograms;
};
export type TOneProjectPrograms = {
  category: string;
  date: string;
  title: string;
  field: string;
  partners: TPartners[];
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

// End Collaboration

// Start Inner Collaboration

export type TOneCollaborationPageData = {
  collaboration: TOneCollaboration;
};
export type TOneCollaboration = {
  _id: string;
  category: string;
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
  gallery: TGallery;
};
// End Gallery Collaboration
