// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class ProjectAndProgramsGalleryApi {
  async add(body: any, id: any) {
    const response = axiosClient.post(
      `/projects-programs/galleries/create/${id}`,
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
      `/projects-programs/galleries/view/${id}`,
      headers
    );
    return response;
  }
  async updateStatusCasestudies(id: string, headers: any) {
    const response = await axiosClient.put(
      `/project-programs/galleries/status/${id}`,
      headers
    );
    return response;
  }
  async updateCasestudies(id: string, body: any) {
    const response = await axiosClient.put(
      `/project-programs/galleries/update/${id}`,
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
      `/project-programs/galleries/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjectAndProgramsGalleryApi();
