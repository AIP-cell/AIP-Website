// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class NpoCasestudiesApi {
  async add(body: any, headers: any) {
    const response = axiosClient.post(`/npo/casestudies/create`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/npo/casestudies/view/${id}`, headers);
    return response;
  }
  async updateStatusCasestudies(id: string, headers: any) {
    const response = await axiosClient.put(
      `/npo/casestudies/status/${id}`,
      headers
    );
    return response;
  }
  async updateCasestudies(id: string, body: any, headers: any) {
    const response = await axiosClient.put(
      `/npo/casestudies/update/${id}`,
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
  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(
      `/npo/casestudies/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new NpoCasestudiesApi();
