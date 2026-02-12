import { reqAuthHeader } from "@/utils/reqAuthHeader";
import axiosClient from "./config/axiosConfigs";

export const dataTableApi = {
  getAipImpactCasestudiesTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `/aip-impact/casestudies/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getAipImpactPeopleTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `/aip-impact/people-we-work-with/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getAipImpactTestimonialTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `/aip-impact/testimonials/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getFoundersNetworkTestimonialTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `founders-network/testimonials/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getPhilanthropistCasestudiesTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `philanthropist-network/casestudies/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getPhilanthropistPeopleTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `philanthropist-network/people-we-work-with/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getYearTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `financial-report/year/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getFinancialReportTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `financial-report/report/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getTeamTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `team-aip/team/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getWorkTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `team-aip/selected-works/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getFaqTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(`faq/table-data?${urlParams}`, {
      ...reqAuthHeader(),
      ...(body ? { data: body } : {}),
    });

    return response;
  },
  getQuoteTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `home-page/quotes/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getMethodsTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `founders-network/methods/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getAipResourcesTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `aip-resources/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getCuratedResourcesTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `curated-resources/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getNpoTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `npo/casestudies/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getNpoPeopleTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `npo/npos-we-partner-with/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getPartnerTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(`partners/table-data?${urlParams}`, {
      ...reqAuthHeader(),
      ...(body ? { data: body } : {}),
    });

    return response;
  },
  getProjectAndProgramsTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `projects-programs/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getProjectAndProgramMediaTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `projects-programs/medias/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getProjectAndProgramTestimonialTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `projects-programs/testimonials/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getCollaborationTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `collaborations/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getCollaborationCityTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `collaborations/cities/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getCollaborationCityAgendaTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `collaborations/agendas/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getCollaborationCityMediaTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `collaborations/medias/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getCollaborationCityTestimonialTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `collaborations/testimonials/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getUserTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(`users/table-data?${urlParams}`, {
      ...reqAuthHeader(),
      ...(body ? { data: body } : {}),
    });

    return response;
  },
  getCareerTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(`careers/table-data?${urlParams}`, {
      ...reqAuthHeader(),
      ...(body ? { data: body } : {}),
    });

    return response;
  },
  getContactTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `contact-form/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getOurValuesTable: async function ({
    body,
    query,
  }: {
    body?: {};
    query?: {};
  }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `our-values/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
  getBlogTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(`blogs/table-data?${urlParams}`, {
      ...reqAuthHeader(),
      ...(body ? { data: body } : {}),
    });

    return response;
  },
  getBookTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(`books/table-data?${urlParams}`, {
      ...reqAuthHeader(),
      ...(body ? { data: body } : {}),
    });

    return response;
  },
  getGalleryTable: async function ({ body, query }: { body?: {}; query?: {} }) {
    const urlParams = new URLSearchParams(query ?? "");
    const response = await axiosClient.get(
      `galleries/table-data?${urlParams}`,
      {
        ...reqAuthHeader(),
        ...(body ? { data: body } : {}),
      }
    );

    return response;
  },
};
