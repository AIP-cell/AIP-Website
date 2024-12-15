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
  getAipResources: async (data: {
    category: string;
    domain?: string;
    typeOfContent?: string;
    date?: string;
  }) => {
    try {
      const response = await axiosClient.get(
        `aip-resources?${new URLSearchParams(data)}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getCuratedResources: async (data: {
    category: string;
    domain?: string;
    typeOfContent?: string;
    date?: string;
  }) => {
    try {
      const response = await axiosClient.get(
        `curated-resources?${new URLSearchParams(data)}`
      );
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
  getPeopleOfAip: async (slug: string) => {
    try {
      const response = await axiosClient.get(`aip-team/${slug}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
