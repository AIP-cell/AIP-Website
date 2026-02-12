"use client";

import AddCollaborationsGalleryPage from "@/app/(admin)/_shared/components/collaborations-gallery/AddPage";
import AddProgramsGalleryPage from "@/app/(admin)/_shared/components/programs-projects-gallery/AddPage";
import AddProgramsPage from "@/app/(admin)/_shared/components/programs-projects/AddPage";
import CollaborationGalleryApi from "@/axios/CollaborationGalleryApi";
import PartnerApi from "@/axios/PartnerApi";
import ProjectAndProgramsGalleryApi from "@/axios/ProjectAndProgramsGalleryApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { cleanFilterItem } from "@mui/x-data-grid/hooks/features/filter/gridFilterUtils";
import { useQuery } from "@tanstack/react-query";

import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async (id: string) => {
  try {
    const response = await CollaborationGalleryApi.view(id, reqAuthHeader());
    console.log(response);
    return response.data.data?.gallery;
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
    queryKey: ["gallery"],
    queryFn: () => defaultValues(params.id),
  });
  console.log(data);
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

  return (
    <AddCollaborationsGalleryPage
      values={data}
      popperPlacement="bottom-start"
    />
  );
};

export default AddProject;
