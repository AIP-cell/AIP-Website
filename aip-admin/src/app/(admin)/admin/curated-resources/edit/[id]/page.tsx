"use client";

import EditCuratedResourcesPage from "@/app/(admin)/_shared/components/curated-resources/EditPage";
import AipCuratedResourceApi from "@/axios/AipCuratedResourceApi";
import AipTeamApi from "@/axios/AipTeamApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next-nprogress-bar";

import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const fetchWork = async (id: string) => {
  const response = await AipCuratedResourceApi.view(id, reqAuthHeader());
  return response.data.data.resource;
};

const fetchAllExperts = async () => {
  const response = await AipTeamApi.getAll(reqAuthHeader());
  return response.data.data.teams;
};

const fetchData = async (id: string) => {
  const [values, experts] = await Promise.all([
    fetchWork(id),
    fetchAllExperts(),
  ]);

  return { values, experts };
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

  const { values, experts } = data;

  return (
    <EditCuratedResourcesPage
      values={values}
      data={experts}
      popperPlacement="bottom-start"
    />
  );
};

export default Edit;
