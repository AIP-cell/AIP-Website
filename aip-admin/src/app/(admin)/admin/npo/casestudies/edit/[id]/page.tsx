"use client";

import EditNpoCasestudiesPage from "@/app/(admin)/_shared/components/npo-casestudies/EditPage";
import NpoCaseStudiesApi from "@/axios/NpoCaseStudiesApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";
const defaultValues = async (id: string) => {
  try {
    const response = await NpoCaseStudiesApi.view(id, reqAuthHeader());

    return response.data.data.casestudies;
  } catch (error) {
    console.log(error);
  }
  return null;
};

interface Params {
  params: {
    id: string;
  };
}

const Edit: React.FC<Params> = ({ params }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["npo", params.id],
    queryFn: () => defaultValues(params.id),
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

  if (isError || !data) {
    return null;
  }

  return <EditNpoCasestudiesPage values={data} />;
};

export default Edit;
