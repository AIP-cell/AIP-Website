"use client";

import EditPeoplePage from "@/app/(admin)/_shared/components/philanthropist-network-people/EditPage";
import AipImpactPeopleApi from "@/axios/AipImpactPeopleApi";
import PhilanthropistPeopleApi from "@/axios/PhilanthropistPeopleApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async (id: string) => {
  try {
    const response = await PhilanthropistPeopleApi.view(id, reqAuthHeader());

    return response.data.data.people;
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
    queryKey: ["people", params.id],
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

  return <EditPeoplePage values={data} />;
};

export default Edit;
