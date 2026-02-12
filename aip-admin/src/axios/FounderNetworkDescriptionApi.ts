// eslint-disable-next-line import/no-named-as-default

import axiosClient from "./config/axiosConfigs";

interface Data {
  description1: string;
  // description2: string;
}

class FounderNetworkDescriptionApi {
  async update(body: Data, headers: any) {
    const response = axiosClient.put(
      `/founders-network/description/update`,
      body,
      headers
    );

    return response;
  }
  async view(headers: any) {
    const response = axiosClient.get(
      `/founders-network/description/view`,
      headers
    );

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(
      `/founders-network/description/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FounderNetworkDescriptionApi();
