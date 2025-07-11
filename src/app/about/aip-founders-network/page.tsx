import FounderNetworkHeroSection from "./_components/FounderNetworkHeroSection";
import { Api } from "@/api/Api";
import { TFounderNetwork } from "@/api/type";
import { notFound } from "next/navigation";
import NetworkContactSection from "./_components/NetworkContactSection";
import JoinTheFlow from "./_components/JoinTheFlow";
import CoreFoundersAndFounders from "./_components/CoreFoundersAndFounders";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about/aip-founders-network",
  },
};

export const dynamic = "force-dynamic";
const geFounderNetworkApi = async (): Promise<TFounderNetwork> => {
  const response = await Api.getFounderNetwork();
  return response?.data;
};

const page = async () => {
  const response = await geFounderNetworkApi();
  if (!response) {
    notFound();
  }

  const desc1 = response?.description1;
  return (
    <div className="pt-[5rem]">
      {desc1 && <FounderNetworkHeroSection desc1={desc1} />}

      <CoreFoundersAndFounders />

      <NetworkContactSection />
      <JoinTheFlow />
    </div>
  );
};

export default page;
