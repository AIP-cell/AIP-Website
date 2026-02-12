// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class AipTeamApi {
  async add(body: any, headers: any) {
    const response = axiosClient.post(`/team-aip/team/create`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/team-aip/team/view/${id}`, headers);
    return response;
  }
  async getAll(headers: any) {
    const response = axiosClient.get(`/team-aip/team/get-all`, headers);
    return response;
  }
  async getAllCoreFounders(headers: any) {
    const response = axiosClient.get(
      `/team-aip/team/get-all-core-founders`,
      headers
    );
    return response;
  }
  async updateStatus(id: string, headers: any) {
    const response = await axiosClient.put(
      `/team-aip/team/status/${id}`,
      {},
      headers
    );
    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = await axiosClient.put(
      `/team-aip/team/update/${id}`,
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
      `/team-aip/team/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AipTeamApi();
