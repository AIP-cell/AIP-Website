"use client";

import AipTeamApi from "@/axios/AipTeamApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import EditTeamAipPage from "@/app/(admin)/_shared/components/team-aip/EditPage";

export const dynamic = "force-dynamic";

const defaultValues = async (id: string) => {
  try {
    const response = await AipTeamApi.view(id, reqAuthHeader());

    return response.data.data.team;
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
    queryKey: ["team", params.id],
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

  return <EditTeamAipPage values={data} />;
};

export default Edit;
