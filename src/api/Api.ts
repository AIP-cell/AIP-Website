import { generatingSearchParam } from "@/utils/UrlHelper";
import { axiosClient } from "./config/axiosClient";

export const Api = {
  getHomePage: async () => {
    try {
      const response = await axiosClient.get("home-page");
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getAipImpact: async () => {
    try {
      const response = await axiosClient.get("aip-impact");
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getAipResources: async (
    slug: string,
    data: {
      domain?: string;
      c_type?: string;
      date?: string;
    }
  ) => {
    try {
      const query = generatingSearchParam({
        ...data,
      });
      const response = await axiosClient.get(
        `aip-resources?category=${slug}&${query.toString()}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getCuratedResources: async (
    slug: string,
    data: {
      domain?: string;
      c_type?: string;
      o_type?: string;
      date?: string;
    }
  ) => {
    try {
      const query = generatingSearchParam({
        ...data,
      });
      const response = await axiosClient.get(
        `curated-resources?category=${slug}&${query.toString()}`
      );
      // const response = await axiosClient.get(
      //   `curated-resources?category=${slug}&${new URLSearchParams(data)}`
      // );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getCuratedResourcesExpertsInner: async (slug: string) => {
    try {
      const response = await axiosClient.get(`curated-resources/${slug}`);
      console.log("response,data:::", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getFounderNetwork: async () => {
    try {
      const response = await axiosClient.get(`founder-networks`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getPhilanthropistNetwork: async () => {
    try {
      const response = await axiosClient.get(`philanthropist-networks`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getFaq: async (category: string) => {
    try {
      const response = await axiosClient.get(`faqs?category=${category}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getFinancialReport: async () => {
    try {
      const response = await axiosClient.get(`financial-reports/report`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getNpos: async () => {
    try {
      const response = await axiosClient.get(`npos`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getNposCaseStudy: async (slug: string) => {
    try {
      const response = await axiosClient.get(`npos/${slug}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getPeopleOfAip: async (slug: string) => {
    try {
      const response = await axiosClient.get(`aip-team/${slug}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getPeopleOfAipGetOne: async (slug: string) => {
    try {
      const response = await axiosClient.get(`aip-team/get-one/${slug}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getOurWorkExperts: async () => {
    try {
      const response = await axiosClient.get(`experts`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getProjectsPrograms: async (data: {
    domain?: string;
    typeOfContent?: string;
    organizationType?: string;
    events?: string;
    date?: string;
  }) => {
    try {
      const query = generatingSearchParam({
        ...data,
      });
      const response = await axiosClient.get(
        `projects-programs?${query.toString()}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getOneProjectsPrograms: async (slug: string) => {
    try {
      const response = await axiosClient.get(`projects-programs/${slug}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getCollaborations: async (data: {
    type?: string;
    partnerType?: string;
    date?: string;
  }) => {
    try {
      const query = generatingSearchParam({
        ...data,
      });
      const response = await axiosClient.get(
        `collaborations?${query.toString()}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getOneCollaborations: async (slug: string) => {
    try {
      const response = await axiosClient.get(`collaborations/${slug}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getOneGalleryCollaborations: async (slug: string) => {
    try {
      const response = await axiosClient.get(`collaborations/${slug}/gallery`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getOneGalleryProjectAndPrograms: async (slug: string) => {
    try {
      const response = await axiosClient.get(`projects-programs/${slug}/gallery`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getSearch: async (data: {
    key?: string;
    field?: string;
    type?: string;
    date?: string;
  }) => {
    try {
      const query = generatingSearchParam({
        ...data,
      });
      const response = await axiosClient.get(`search?${query.toString()}`);

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getCareersPage: async () => {
    try {
      const response = await axiosClient.get(`careers/page`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getCareers: async (page: string) => {
    try {
      const response = await axiosClient.get(`careers?page=${page}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  postContact: async (body: object) => {
    console.log("body:::", body);
    try {
      const response = await axiosClient.post(`contact-form`, body);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
