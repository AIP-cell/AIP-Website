// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class AipCuratedResourceApi {
  async add(body: any, headers: any) {
    const response = axiosClient.post(`/curated-resources/create`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async viewExperts(headers: any) {
    const response = axiosClient.get(`/curated-resources/get-experts`, headers);
    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/curated-resources/view/${id}`, headers);
    return response;
  }
  async getAll(headers: any) {
    const response = axiosClient.get(`/curated-resources/get-all`);
    return response;
  }

  async updateStatus(id: string, headers: any) {
    const response = await axiosClient.put(
      `/curated-resources/status/${id}`,
      {},
      headers
    );
    return response;
  }
  async updateFeaturedStatus(id: string, headers: any) {
    const response = await axiosClient.put(
      `/curated-resources/featured/${id}`,
      {},
      headers
    );
    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = await axiosClient.put(
      `/curated-resources/update/${id}`,
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
      `/curated-resources/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AipCuratedResourceApi();
