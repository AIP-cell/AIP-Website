// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class ProjectAndProgramsApi {
  async add(body: any) {
    const response = axiosClient.post(`/projects-programs/create`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/projects-programs/view/${id}`, headers);
    return response;
  }
  async updateStatusCasestudies(id: string, headers: any) {
    const response = await axiosClient.put(
      `/projects-programs/status/${id}`,
      {},
      headers
    );
    return response;
  }
  async updateCasestudies(id: string, body: any) {
    const response = await axiosClient.put(
      `/projects-programs/update/${id}`,
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
      `/projects-programs/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectAndProgramsApi();
