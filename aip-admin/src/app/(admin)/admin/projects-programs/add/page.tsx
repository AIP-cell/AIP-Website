"use client";

import AddProgramsPage from "@/app/(admin)/_shared/components/programs-projects/AddPage";
import PartnerApi from "@/axios/PartnerApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import toast from "react-hot-toast";

import { ClipLoader } from "react-spinners";
export const dynamic = "force-dynamic";

const defaultValues = async () => {
  try {
    const response = await PartnerApi.getAll(reqAuthHeader());

    return response.data.data.partner;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const AddProject: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: defaultValues,
  });

  const router = useRouter();
  const [toastShown, setToastShown] = useState(false);

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
  if ((isError || !data) && !toastShown) {
    toast.error("Please add partners first.");
    setToastShown(true);
    router.push("/admin/partners/add");
    return null;
  }

  return <AddProgramsPage values={data} />;
};

export default AddProject;
