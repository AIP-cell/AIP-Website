// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class BlogsApi {
  async add(body: any, headers: any) {
    const response = axiosClient.post(`/blogs/create`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/blogs/view/${id}`, headers);
    return response;
  }

  async updateStatus(id: string, headers: any) {
    const response = await axiosClient.put(`/blogs/status/${id}`, {}, headers);
    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = await axiosClient.put(`/blogs/update/${id}`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(`/blogs/delete/${id}`, headers);

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BlogsApi();
