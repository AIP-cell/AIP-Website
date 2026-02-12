"use client";

import AddSelectWorkPage from "@/app/(admin)/_shared/components/team-aip-selected-works/AddPage";
import AipCuratedResourceApi from "@/axios/AipCuratedResourceApi";
import AipTeamApi from "@/axios/AipTeamApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

import { useQuery } from "@tanstack/react-query";

import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const fetchExperts = async () => {
  const response = await AipTeamApi.getAll(reqAuthHeader());

  return response.data.data.teams;
};

const fetchAllCuratedResource = async () => {
  const response = await AipCuratedResourceApi.viewExperts(reqAuthHeader());

  return response.data.data.resource;
};

const fetchData = async () => {
  const [values, resource] = await Promise.all([
    fetchExperts(),
    fetchAllCuratedResource(),
  ]);

  return { values, resource };
};

const Add: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["resource"],
    queryFn: () => fetchData(),
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

  const { values, resource } = data;

  return <AddSelectWorkPage values={values} data={resource} />;
};

export default Add;
