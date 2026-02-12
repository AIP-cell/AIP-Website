"use client";

import AddCollaborationPage from "@/app/(admin)/_shared/components/collaborations/AddPage";
import PartnerApi from "@/axios/PartnerApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import toast from "react-hot-toast";

const defaultValues = async () => {
  try {
    const response = await PartnerApi.getAll(reqAuthHeader());
    return response.data.data.partner;
  } catch (error) {
    console.log(error);
  }
  return null;
};

const AddCollaborations: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reports"],
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

  return <AddCollaborationPage values={data} />;
};

export default AddCollaborations;
