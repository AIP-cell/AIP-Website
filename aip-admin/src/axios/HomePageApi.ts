// eslint-disable-next-line import/no-named-as-default

import axiosClient from "./config/axiosConfigs";

interface Data {
  coreFoundersCount?: any;
  foundersCount?: any;
  membersCount?: any;
}

class HomePageApi {
  async update(body: Data, headers: any) {
    const response = axiosClient.put(`/home-page/update`, body, headers);

    return response;
  }
  async view(headers: any) {
    const response = axiosClient.get(`/home-page/view`, headers);

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(`demoPage/delete/${id}`, headers);

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HomePageApi();
