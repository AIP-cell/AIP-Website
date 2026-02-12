// eslint-disable-next-line import/no-named-as-default

import axiosClient from "./config/axiosConfigs";

class OurValuesApi {
  async create(body: any, headers: any) {
    const response = axiosClient.post(`/our-values/create`, body, headers);

    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = axiosClient.put(`/our-values/update/${id}`, body, headers);

    return response;
  }
  async getAll(headers: any) {
    const response = axiosClient.get(`/our-values/get-all`, headers);

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/our-values/view/${id}`, headers);

    return response;
  }
  async status(id: string, headers: any) {
    const response = axiosClient.put(`/our-values/status/${id}`, {}, headers);

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(
      `/our-values/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new OurValuesApi();
