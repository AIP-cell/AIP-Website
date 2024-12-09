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
};
