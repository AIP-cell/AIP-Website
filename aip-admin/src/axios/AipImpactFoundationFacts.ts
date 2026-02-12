// eslint-disable-next-line import/no-named-as-default

import axiosClient from "./config/axiosConfigs";

class AipImpactFoundationFactsApi {
  async update(body: any, headers: any) {
    const response = axiosClient.put(
      `/aip-impact/foundation-facts/update`,
      body,
      headers
    );

    return response;
  }
  async view(headers: any) {
    const response = axiosClient.get(
      `/aip-impact/foundation-facts/view`,
      headers
    );

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(
      `/aip-impact/foundation-facts/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AipImpactFoundationFactsApi();
