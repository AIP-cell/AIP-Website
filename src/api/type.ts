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
  worldOfPhilanthropy: THomePageNewsWorldOfPhilanthropy[]
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
