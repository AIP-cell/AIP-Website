import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import FounderNetworkHeroSection from "./_components/FounderNetworkHeroSection";

import Link from "next/link";
import Image from "next/image";
import Join from "./_components/Join";
import TestimonialsFromFounders from "./_components/TestimonialsFromFounders";
import { Api } from "@/api/Api";
import { TFounderNetwork, TFounderNetworkPageData } from "@/api/type";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const geFounderNetworkApi = async (): Promise<TFounderNetwork> => {
  const response = await Api.getFounderNetwork();
  return response.data;
};
const page = async () => {
  const response = await geFounderNetworkApi();
  if (!response) {
    notFound();
  }
  // const founderNetwork = response.founderNetwork;
  const testimonials = response?.testimonials;
  const methodsOfJoining = response?.methodsOfJoining;
  const desc1 = response?.description1;
  const desc2 = response?.description2;

  return (
    <div className="pt-[5rem]">
      {desc1 && desc2 && (
        <FounderNetworkHeroSection desc1={desc1} desc2={desc2} />
      )}
      {methodsOfJoining && <Join methodsOfJoining={methodsOfJoining} />}
      {testimonials && <TestimonialsFromFounders testimonials={testimonials} />}
    </div>
  );
};

export default page;
