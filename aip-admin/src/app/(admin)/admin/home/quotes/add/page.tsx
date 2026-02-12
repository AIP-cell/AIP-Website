"use client";

import AddHomePageQuotePage from "@/app/(admin)/_shared/components/home-page-quotes/AddPage";
import AipTeamApi from "@/axios/AipTeamApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async () => {
  try {
    const response = await AipTeamApi.getAllCoreFounders(reqAuthHeader());

    return response.data.data.teams;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const AddQuote: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reports"],
    queryFn: defaultValues,
  });

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

  return <AddHomePageQuotePage values={data} />;
};

export default AddQuote;
