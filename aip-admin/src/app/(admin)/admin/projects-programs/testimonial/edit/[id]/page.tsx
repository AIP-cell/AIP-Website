"use client";

import EditProgramMediaPage from "@/app/(admin)/_shared/components/programs-projects-media/EditPage";
import EditProgramsTestimonialPage from "@/app/(admin)/_shared/components/programs-projects-testimonial/EditPage";

import ProjectAndProgramsMediaApi from "@/axios/ProjectAndProgramsMediaApi";
import ProjectAndProgramsTestimonialApi from "@/axios/ProjectAndProgramsTestimonialApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async (id: string) => {
  try {
    const response = await ProjectAndProgramsTestimonialApi.view(
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
    queryKey: ["media", params.id],
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

  return <EditProgramsTestimonialPage values={data} />;
};

export default Edit;
