// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class PartnerApi {
  async add(body: any) {
    const response = await axiosClient.post(`/partners/create`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/partners/view/${id}`, headers);
    return response;
  }
  async getAll(headers: any) {
    const response = axiosClient.get(`/partners/get-all`, headers);
    return response;
  }

  async updateStatus(id: string, headers: any) {
    const response = await axiosClient.put(
      `/partners/status/${id}`,
      {},
      headers
    );
    return response;
  }
  async update(id: string, body: any) {
    const response = await axiosClient.put(`/partners/update/${id}`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(
      `/partners/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PartnerApi();
