// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class PhilanthropistPeopleApi {
  async add(body: any, headers: any) {
    const response = axiosClient.post(
      `/philanthropist-network/people-we-work-with/create`,
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
      `/philanthropist-network/people-we-work-with/view/${id}`,
      headers
    );
    return response;
  }
  async updateStatus(id: string, headers: any) {
    const response = await axiosClient.put(
      `/philanthropist-network/people-we-work-with/status/${id}`,
      {},
      headers
    );
    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = await axiosClient.put(
      `/philanthropist-network/people-we-work-with/update/${id}`,
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
      `/philanthropist-network/people-we-work-with/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PhilanthropistPeopleApi();
