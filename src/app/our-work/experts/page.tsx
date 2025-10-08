import ExpertHeroSection from "./_components/ExpertHeroSection";
import AipAndExperts from "./_components/AipAndExperts";
import AsAnExperts from "./_components/AsAnExperts";
import WhyPartner from "./_components/WhyPartner";
import NetworkOfExperts from "./_components/NetworkOfExperts";
import ExpertsShelves from "./_components/ExpertsShelves";
import { Api } from "@/api/Api";
import { TOurWorkExpertsData } from "@/api/type";
import { notFound } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/our-work/experts",
  },
};

export const dynamic = "force-dynamic";
const getOurWorkExpertsApi = async (): Promise<TOurWorkExpertsData> => {
  const response = await Api.getOurWorkExperts();
  return response?.data;
};
const page = async () => {
  const response = await getOurWorkExpertsApi();
  if (!response) {
    notFound();
  }
  const people = response?.experts;
  const expertShelves = response?.selectedWorks;
  return (
    <div className="~pt-[5rem]/[10rem]">
      <ExpertHeroSection />
      <AipAndExperts />
      <AsAnExperts />
      <WhyPartner />
      {people && people.length != 0 && <NetworkOfExperts people={people} />}
      {expertShelves && expertShelves.length != 0 && (
        <ExpertsShelves expertShelves={expertShelves} />
      )}
    </div>
  );
};

export default page;
