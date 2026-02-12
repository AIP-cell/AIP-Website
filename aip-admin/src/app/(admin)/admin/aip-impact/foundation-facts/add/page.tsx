"use client";

import AddAipImpactFoundationFactPage from "@/app/(admin)/_shared/components/aip-impact-founcation-facts/AddPage";
import AipImpactFoundationFacts from "@/axios/AipImpactFoundationFacts";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async () => {
  try {
    const response = await AipImpactFoundationFacts.view(reqAuthHeader());
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const AddFoundationFacts: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["foundation-facts"],
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

  // if (isError || !data) {
  //   return null;
  // }

  return <AddAipImpactFoundationFactPage values={data} />;
};

export default AddFoundationFacts;
