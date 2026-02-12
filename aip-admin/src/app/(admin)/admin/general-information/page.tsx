"use client";

import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import AddGeneralKnowledgePage from "../../_shared/components/general-information/AddPage";
import GeneralInformationApi from "@/axios/GeneralInformationApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
export const dynamic = "force-dynamic";

const defaultValues = async () => {
  try {
    const response = await GeneralInformationApi.view(reqAuthHeader());

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const AddGeneralInformations: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["general-informations"],
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

  return <AddGeneralKnowledgePage values={data} />;
};

export default AddGeneralInformations;
