"use client";

import EditCollaborationMediaPage from "@/app/(admin)/_shared/components/collaborations-media/EditPage";
import EditCollaborationsTestimonialPage from "@/app/(admin)/_shared/components/collaborations-testimonial/EditPage";
import CollaborationMediaApi from "@/axios/CollaborationMediaApi";
import CollaborationTestimonialApi from "@/axios/CollaborationTestimonialApi";

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async (id: string) => {
  try {
    const response = await CollaborationTestimonialApi.view(
      id,
      reqAuthHeader()
    );

    return response.data.data.testimonial;
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
    queryKey: ["testimonial", params.id],
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

  return <EditCollaborationsTestimonialPage values={data} />;
};

export default Edit;
