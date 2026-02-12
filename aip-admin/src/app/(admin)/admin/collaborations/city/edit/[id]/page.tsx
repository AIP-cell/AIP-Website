"use client";

import EditCollaborationsCityDataByPage from "@/app/(admin)/_shared/components/collaborations-city-data/EditPage";
import EditFinancialReportPage from "@/app/(admin)/_shared/components/financial-report/EditPage";
import CollaborationCityApi from "@/axios/CollaborationCityApi";
import FinancialReportApi from "@/axios/FinancialReportApi";
import PartnerApi from "@/axios/PartnerApi";
import YearApi from "@/axios/YearApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next-nprogress-bar";

import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const fetchCity = async (id: string) => {
  const response = await CollaborationCityApi.view(id, reqAuthHeader());
  return response.data.data.city;
};

const fetchAllPartner = async () => {
  const response = await PartnerApi.getAll(reqAuthHeader());

  return response.data.data.partner;
};

const fetchData = async (id: string) => {
  const [values, partners] = await Promise.all([
    fetchCity(id),
    fetchAllPartner(),
  ]);

  return { values, partners };
};
interface Params {
  params: {
    id: string;
  };
}

const Edit: React.FC<Params> = ({ params }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["report", params.id],
    queryFn: () => fetchData(params.id),
    gcTime: 0,
  });

  const router = useRouter();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ClipLoader size={50} color={"#50B9A8"} loading={isLoading} />
      </div>
    );
  }

  if (isError || !data) {
    return null;
  }

  const { values, partners } = data;

  return <EditCollaborationsCityDataByPage values={values} data={partners} />;
};

export default Edit;
