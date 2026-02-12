"use client";

import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

import AddModalPage from "../../_shared/components/modal/AddPage";
import ModalApi from "@/axios/ModalApi";
export const dynamic = "force-dynamic";

const defaultValues = async () => {
  try {
    const response = await ModalApi.view(reqAuthHeader());
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const AddCategories: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["modal"],
    queryFn: defaultValues,
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

  // if (isError || !data) {
  //   return null;
  // }

  return <AddModalPage values={data} />;
};

export default AddCategories;
