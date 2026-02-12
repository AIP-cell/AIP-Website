// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class FounderNetworkTestimonialApi {
  async add(body: any, headers: any) {
    const response = axiosClient.post(
      `/founders-network/testimonials/create`,
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
      `/founders-network/testimonials/view/${id}`,
      headers
    );
    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = await axiosClient.put(
      `/founders-network/testimonials/update/${id}`,
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
      `/founders-network/testimonials/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FounderNetworkTestimonialApi();
