// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class CollaborationAgendaApi {
  async add(id: any, body: any) {
    const response = axiosClient.post(
      `/collaborations/agendas/create/${id}`,
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
      `/collaborations/agendas/view/${id}`,
      headers
    );
    return response;
  }
  async updateStatusCasestudies(id: string, headers: any) {
    const response = await axiosClient.put(
      `/collaborations/agendas/status/${id}`,
      {},
      headers
    );
    return response;
  }
  async updateCasestudies(id: string, body: any) {
    const response = await axiosClient.put(
      `/collaborations/agendas/update/${id}`,
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
      `/collaborations/agendas/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CollaborationAgendaApi();
