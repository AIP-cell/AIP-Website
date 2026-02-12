import Spinner from "@/app/(admin)/_shared/components/Spinner";
import React from "react";
export const dynamic = "force-dynamic";
const Loading: React.FC = async () => {
  return <Spinner />;
};

export default Loading;
