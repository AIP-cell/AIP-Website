"use client";

import AddProgramsGalleryPage from "@/app/(admin)/_shared/components/programs-projects-gallery/AddPage";

import ProjectAndProgramsGalleryApi from "@/axios/ProjectAndProgramsGalleryApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";

import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async (id: string) => {
  try {
    const response = await ProjectAndProgramsGalleryApi.view(
      id,
      reqAuthHeader()
    );
    console.log(response);
    return response.data.data.gallery;
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

const AddProject: React.FC<Params> = ({ params }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: () => defaultValues(params.id),
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
  console.log(data);
  if (isError || !data) {
    return null;
  }

  return (
    <AddProgramsGalleryPage values={data} popperPlacement="bottom-start" />
  );
};

export default AddProject;
