// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class CollaborationApi {
  async add(id: string, body: any) {
    const response = axiosClient.post(
      `/collaborations/galleries/create/${id}`,
      body,
      {
        headers: {
          ...reqAuthHeader().headers,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(
      `/collaborations/galleries/view/${id}`,
      headers
    );
    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CollaborationApi();
