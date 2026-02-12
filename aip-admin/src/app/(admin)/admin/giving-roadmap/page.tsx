"use client";

import { reqAuthHeader } from "@/utils/reqAuthHeader";

import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import GivingRoadmapPage from "../../_shared/components/giving-roadmap/AddPage";
import GivingRoadmapApi from "@/axios/GivingRoadmapApi";
export const dynamic = "force-dynamic";

const defaultValues = async () => {
  try {
    const response = await GivingRoadmapApi.view(reqAuthHeader());

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const AddDescription: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["description"],
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

  return <GivingRoadmapPage values={data} />;
};

export default AddDescription;
