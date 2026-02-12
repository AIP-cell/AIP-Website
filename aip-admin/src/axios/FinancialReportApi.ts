// eslint-disable-next-line import/no-named-as-default

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

class FinancialReportApi {
  async create(body: any, headers: any) {
    const response = axiosClient.post(`/financial-report/report/create`, body, {
      headers: {
        ...reqAuthHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }
  async update(id: string, body: any, headers: any) {
    const response = axiosClient.put(
      `/financial-report/report/update/${id}`,
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
  async getAll(headers: any) {
    const response = axiosClient.get(
      `/financial-report/report/get-all`,
      headers
    );

    return response;
  }
  async view(id: string, headers: any) {
    const response = axiosClient.get(
      `/financial-report/report/view/${id}`,
      headers
    );

    return response;
  }
  async status(id: string, headers: any) {
    const response = axiosClient.put(
      `/financial-report/report/status/${id}`,
      {},
      headers
    );

    return response;
  }

  async delete(id: string, headers: any) {
    const response = await axiosClient.delete(
      `/financial-report/report/delete/${id}`,
      headers
    );

    return response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FinancialReportApi();
