"use client";

import axios from "axios";
import { useRouter } from "next-nprogress-bar";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import AipTeamSelectedWorkApi from "@/axios/AipTeamSelectedWorkApi";
import AipTeamApi from "@/axios/AipTeamApi";
import AipCuratedResourceApi from "@/axios/AipCuratedResourceApi";
import EditSelectWorkPage from "@/app/(admin)/_shared/components/team-aip-selected-works/EditPage";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
export const dynamic = "force-dynamic";

const fetchSelectedWorkById = async (id: string) => {
  const response = await AipTeamSelectedWorkApi.view(id, reqAuthHeader());

  return response.data.data.work;
};

const fetchExperts = async () => {
  const response = await AipTeamApi.getAll(reqAuthHeader());

  return response.data.data.teams;
};

const fetchAllCuratedResource = async () => {
  const response = await AipCuratedResourceApi.viewExperts(reqAuthHeader());

  return response.data.data.resource;
};

const fetchData = async (id: string) => {
  const [values, experts, works] = await Promise.all([
    fetchSelectedWorkById(id),
    fetchExperts(),
    fetchAllCuratedResource(),
  ]);
  return { values, experts, works };
};
interface Params {
  params: {
    id: string;
  };
}

const Edit: React.FC<Params> = ({ params }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["SelectedWork", params.id],
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
    return <div>Error occurred</div>;
  }

  const { values, experts, works } = data;

  return (
    <EditSelectWorkPage
      values={values}
      experts={experts}
      works={works}
    ></EditSelectWorkPage>
  );
};

export default Edit;
