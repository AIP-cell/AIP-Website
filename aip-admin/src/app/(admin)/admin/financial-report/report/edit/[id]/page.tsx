"use client";

import EditFinancialReportPage from "@/app/(admin)/_shared/components/financial-report/EditPage";
import FinancialReportApi from "@/axios/FinancialReportApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next-nprogress-bar";

import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async (id: string) => {
  const response = await FinancialReportApi.view(id, reqAuthHeader());
  return response.data.data.report;
};

interface Params {
  params: {
    id: string;
  };
}

const Edit: React.FC<Params> = ({ params }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["report", params.id],
    queryFn: () => defaultValues(params.id),
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
        <ClipLoader size={50} color={"#5E165B"} loading={isLoading} />
      </div>
    );
  }

  if (isError || !data) {
    return null;
  }

  return (
    <EditFinancialReportPage values={data} popperplacement="bottom-start" />
  );
};

export default Edit;
