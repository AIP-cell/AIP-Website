"use client";

import EditCollaborationAgendaPage from "@/app/(admin)/_shared/components/collaborations-agenda/EditPage";
import EditCollaborationPage from "@/app/(admin)/_shared/components/collaborations/EditPage";
import CollaborationAgendaApi from "@/axios/CollaborationAgendaApi";
import CollaborationApi from "@/axios/CollaborationApi";

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async (id: string) => {
  try {
    const response = await CollaborationAgendaApi.view(id, reqAuthHeader());

    return response.data.data.agenda;
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
    queryKey: ["agenda", params.id],
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

  return <EditCollaborationAgendaPage values={data} />;
};

export default Edit;
