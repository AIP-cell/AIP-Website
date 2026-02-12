// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class GivingRoadmapApi {
  async update(body: any) {
    const response = axiosClient.put(`/giving-roadmap/update`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async view(headers: any) {
    const response = axiosClient.get(`/giving-roadmap/view`, headers);

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GivingRoadmapApi();
