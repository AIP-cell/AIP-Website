// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

interface Data {
  marque?: any;
  description?: any;
  link?: any;
}

class ModalApi {
  async update(body: Data, headers: any) {
    const response = axiosClient.put(`/modal/update`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async view(headers: any) {
    const response = axiosClient.get(`/modal/view`, headers);

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(`demoPage/delete/${id}`, headers);

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ModalApi();
