// eslint-disable-next-line import/no-named-as-default

import axiosClient from "./config/axiosConfigs";

class QuoteApi {
  async create(body: any, headers: any) {
    const response = axiosClient.post(
      `/home-page/quotes/create`,
      body,
      headers
    );

    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = axiosClient.put(
      `/home-page/quotes/update/${id}`,
      body,
      headers
    );

    return response;
  }

  async view(id: string, headers: any) {
    const response = axiosClient.get(`/home-page/quotes/view/${id}`, headers);

    return response;
  }
  async status(id: string, headers: any) {
    const response = axiosClient.put(
      `/home-page/quotes/status/${id}`,
      {},
      headers
    );

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(
      `/home-page/quotes/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new QuoteApi();
