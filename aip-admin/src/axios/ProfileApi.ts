import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

interface ProfileData {
  email: string;
  old_password: string;
  new_password: string;
  confirmed_password: string;
}

class ProfileApi {
  async resetPassword(id: string, body: ProfileData) {
    const response = await axiosClient.put(
      `profile/update-password/${id}`,
      body,
      {
        headers: {
          ...reqAuthHeader().headers,
        },
      }
    );
    return response;
  }
  async getEmail() {
    const response = await axiosClient.get(
      `profile/get-email`,

      {
        headers: {
          ...reqAuthHeader().headers,

          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  }
}

export default new ProfileApi();
