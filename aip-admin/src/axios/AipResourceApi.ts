// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class AipResourceApi {
  async add(body: any, headers: any) {
    const response = axiosClient.post(`/aip-resources/create`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/aip-resources/view/${id}`, headers);
    return response;
  }
  async getAll(headers: any) {
    const response = axiosClient.get(`/aip-resources/get-all`, headers);
    return response;
  }

  async updateStatus(id: string, headers: any) {
    const response = await axiosClient.put(
      `/aip-resources/status/${id}`,
      {},
      headers
    );
    return response;
  }
  async updateIsFeteatured(id: string, headers: any) {
    const response = await axiosClient.put(
      `/aip-resources/featured/${id}`,
      {},
      headers
    );
    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = await axiosClient.put(
      `/aip-resources/update/${id}`,
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
      `/aip-resources/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AipResourceApi();
