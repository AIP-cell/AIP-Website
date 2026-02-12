// eslint-disable-next-line import/no-named-as-default

import axiosClient from "./config/axiosConfigs";

class FaqApi {
  async create(body: any, headers: any) {
    const response = axiosClient.post(`/faq/create`, body, headers);

    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = axiosClient.put(`/faq/update/${id}`, body, headers);

    return response;
  }
  async getAll(headers: any) {
    const response = axiosClient.get(`/faq/get-all`, headers);

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/faq/view/${id}`, headers);

    return response;
  }
  async status(id: string, headers: any) {
    const response = axiosClient.put(`/faq/status/${id}`, {}, headers);

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(`/faq/delete/${id}`, headers);

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FaqApi();
