// eslint-disable-next-line import/no-named-as-default

import axiosClient from "./config/axiosConfigs";

class YearApi {
  async create(body: any, headers: any) {
    const response = axiosClient.post(
      `/financial-report/year/create`,
      body,
      headers
    );

    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = axiosClient.put(
      `/financial-report/year/update/${id}`,
      body,
      headers
    );

    return response;
  }
  async getAll(headers: any) {
    const response = axiosClient.get(`/financial-report/year/get-all`, headers);

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(
      `/financial-report/year/view/${id}`,
      headers
    );

    return response;
  }
  async status(id: string, headers: any) {
    const response = axiosClient.put(
      `/financial-report/year/status/${id}`,
      {},
      headers
    );

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(
      `/financial-report/year/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new YearApi();
