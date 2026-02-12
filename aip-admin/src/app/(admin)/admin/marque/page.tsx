"use client";

import AddHomePageCountPage from "@/app/(admin)/_shared/components/homepage-count/AddPage";
import HomePageApi from "@/axios/HomePageApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { cleanUpInnerHTML } from "@iconify/utils";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import AddMarquePage from "../../_shared/components/marque/AddPage";
import MarqueApi from "@/axios/MarqueApi";
export const dynamic = "force-dynamic";

const defaultValues = async () => {
  try {
    const response = await MarqueApi.view(reqAuthHeader());
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const AddCategories: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["marque"],
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

  return <AddMarquePage values={data} />;
};

export default AddCategories;
