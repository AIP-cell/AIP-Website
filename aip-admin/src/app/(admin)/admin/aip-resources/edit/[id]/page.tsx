"use client";

import EditAipFounderNetworkTestimonialPage from "@/app/(admin)/_shared/components/aip-founder-network-testimonials/EditPage";
import EditAipResourcesPage from "@/app/(admin)/_shared/components/aip-resources/EditPage";
import AipResourceApi from "@/axios/AipResourceApi";
import FoundersNetworkTestimonialsApi from "@/axios/FoundersNetworkTestimonialsApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async (id: string) => {
  try {
    const response = await AipResourceApi.view(id, reqAuthHeader());

    return response.data.data.resource;
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
    queryKey: ["resource", params.id],
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

  return <EditAipResourcesPage values={data} />;
};

export default Edit;
