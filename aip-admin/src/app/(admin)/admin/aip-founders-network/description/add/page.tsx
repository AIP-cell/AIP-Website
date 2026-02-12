"use client";

import AddFoundersNetworkPage from "@/app/(admin)/_shared/components/aip-founders-network-description/AddPage";
import FounderNetworkDescriptionApi from "@/axios/FounderNetworkDescriptionApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async () => {
  try {
    const response = await FounderNetworkDescriptionApi.view(reqAuthHeader());

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
    gcTime: 0,
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

  return <AddFoundersNetworkPage values={data} />;
};

export default AddDescription;
