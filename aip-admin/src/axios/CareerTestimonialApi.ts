// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class CareerApi {
  async add(body: any) {
    const response = await axiosClient.post(`/careers/create`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/careers/view/${id}`, headers);
    return response;
  }
  async getAll(headers: any) {
    const response = axiosClient.get(`/careers/get-all`, headers);
    return response;
  }

  async updateStatus(id: string, headers: any) {
    const response = await axiosClient.put(
      `/careers/status/${id}`,
      {},
      headers
    );
    return response;
  }
  async update(id: string, body: any) {
    const response = await axiosClient.put(`/careers/update/${id}`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(`/careers/delete/${id}`, headers);

    return response;
  }

  async syncCareers(headers: any) {
    const response = await axiosClient.get(`/careers/sync`, headers);

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CareerApi();
