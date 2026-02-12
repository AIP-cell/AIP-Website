"use client";

import EditHomePageQuotePage from "@/app/(admin)/_shared/components/home-page-quotes/EditPage";
import AipTeamApi from "@/axios/AipTeamApi";
import QuoteApi from "@/axios/QuoteApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next-nprogress-bar";

import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const fetchQuote = async (id: string) => {
  const response = await QuoteApi.view(id, reqAuthHeader());
  return response.data.data.quote;
};

const fetchAllCoreFounders = async () => {
  const response = await AipTeamApi.getAllCoreFounders(reqAuthHeader());

  return response.data.data.teams;
};

const fetchData = async (id: string) => {
  const [values, teams] = await Promise.all([
    fetchQuote(id),
    fetchAllCoreFounders(),
  ]);

  return { values, teams };
};
interface Params {
  params: {
    id: string;
  };
}

const Edit: React.FC<Params> = ({ params }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["quote", params.id],
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
  const { values, teams } = data;

  return <EditHomePageQuotePage values={values} data={teams} />;
};

export default Edit;
