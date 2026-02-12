"use client";

import EditProgramsPage from "@/app/(admin)/_shared/components/programs-projects/EditPage";
import PartnerApi from "@/axios/PartnerApi";
import ProjectAndProgramsApi from "@/axios/ProjectAndProgramsApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next-nprogress-bar";

import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const fetchProject = async (id: string) => {
  const response = await ProjectAndProgramsApi.view(id, reqAuthHeader());
  return response.data.data.project;
};

const fetchAllPartners = async () => {
  const response = await PartnerApi.getAll(reqAuthHeader());

  return response.data.data.partner;
};

const fetchData = async (id: string) => {
  const [values, partners] = await Promise.all([
    fetchProject(id),
    fetchAllPartners(),
  ]);

  return { values, partners };
};
interface Params {
  params: {
    id: string;
  };
}

const Edit: React.FC<Params> = ({ params }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["report", params.id],
    queryFn: () => fetchData(params.id),
    gcTime: 0,
  });

  const router = useRouter();

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

  const { values, partners } = data;

  return <EditProgramsPage values={values} data={partners} />;
};

export default Edit;
