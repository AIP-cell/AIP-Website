"use client";

import AddCuratedResourcesPage from "@/app/(admin)/_shared/components/curated-resources/AddPage";
import AddSelectWorkPage from "@/app/(admin)/_shared/components/team-aip-selected-works/AddPage";
import AipTeamApi from "@/axios/AipTeamApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async () => {
  try {
    const response = await AipTeamApi.getAll(reqAuthHeader());

    return response.data?.data?.teams;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const AddReport: React.FC = () => {
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

  return (
    <AddCuratedResourcesPage values={data} popperPlacement="bottom-start" />
  );
};

export default AddReport;
