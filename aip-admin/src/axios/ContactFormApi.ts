// eslint-disable-next-line import/no-named-as-default
import axiosClient from "./config/axiosConfigs";

class ContactFormApi {
  async view(id: string, headers: any) {
    const response = axiosClient.get(`/contact-form/view/${id}`, headers);
    return response;
  }
  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(
      `/contact-form/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ContactFormApi();
