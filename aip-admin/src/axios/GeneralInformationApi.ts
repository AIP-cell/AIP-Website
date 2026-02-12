// eslint-disable-next-line import/no-named-as-default

import axiosClient from "./config/axiosConfigs";

class GeneralInformationApi {
  async update(body: any, headers: any) {
    const response = axiosClient.put(
      `/general-informations/update`,
      body,
      headers
    );

    return response;
  }
  async view(headers: any) {
    const response = axiosClient.get(`/general-informations/view`, headers);

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
export default new GeneralInformationApi();
