"use client";

import AddCollaborationsCityDataByPage from "@/app/(admin)/_shared/components/collaborations-city-data/AddPage";
import PartnerApi from "@/axios/PartnerApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async () => {
  try {
    const response = await PartnerApi.getAll(reqAuthHeader());

    return response.data.data.partner;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const AddCity: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["city"],
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

  return <AddCollaborationsCityDataByPage values={data} />;
};

export default AddCity;
