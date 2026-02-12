// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class JourneySoFarApi {
  async update(body: any, headers: any) {
    const response = axiosClient.put(
      `/aip-journey/journey-so-far/update`,
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
  async view(headers: any) {
    const response = axiosClient.get(
      `/aip-journey/journey-so-far/view`,
      headers
    );

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(
      `/aip-journey/journey-so-far/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new JourneySoFarApi();
