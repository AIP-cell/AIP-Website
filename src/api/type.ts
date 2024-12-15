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

export type TAipResourcesCategory = {
  _id: string;
  title: string;
  domain: string;
  description: string;
  date: string;
  image: string;
};

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
