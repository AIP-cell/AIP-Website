// eslint-disable-next-line import/no-named-as-default

import axiosClient from "./config/axiosConfigs";

class UserApi {
  async create(body: any, headers: any) {
    const response = axiosClient.post(`/users/create`, body, headers);

    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = axiosClient.put(`/users/update/${id}`, body, headers);

    return response;
  }
  async getAll(headers: any) {
    const response = axiosClient.get(`/users/get-all`, headers);

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/users/view/${id}`, headers);

    return response;
  }
  async status(id: string, headers: any) {
    const response = axiosClient.put(`/users/status/${id}`, {}, headers);

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(`/users/delete/${id}`, headers);

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserApi();
