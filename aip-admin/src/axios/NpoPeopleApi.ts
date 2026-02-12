// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class NpoPeopleApi {
  async add(body: any, headers: any) {
    const response = axiosClient.post(
      `/npo/npos-we-partner-with/create`,
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
      `/npo/npos-we-partner-with/view/${id}`,
      headers
    );
    return response;
  }
  async updateStatus(id: string, headers: any) {
    const response = await axiosClient.put(
      `/npo/npos-we-partner-with/status/${id}`,
      headers
    );
    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = await axiosClient.put(
      `/npo/npos-we-partner-with/update/${id}`,
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
      `/npo/npos-we-partner-with/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new NpoPeopleApi();
