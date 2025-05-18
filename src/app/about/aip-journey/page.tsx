import React from "react";
import JourneyHeroSection from "./_components/JourneyHeroSection";

import JourneySoFar from "./_components/JourneySoFar";
import OurValueUsingCarousel from "./_components/OurValueUsingCarousel";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import { TAipJourney } from "@/api/type";

export const dynamic = "force-dynamic";
const getAipJourneyApi = async (): Promise<TAipJourney> => {
  const response = await Api.getAipJourney();
  return response?.data;
};
const page = async () => {
  const response = await getAipJourneyApi();
  if (!response) {
    notFound();
  }
  const ourValueData = response.ourValues;
  return (
    <div className="pt-[5rem] overflow-hidden">
      <JourneyHeroSection />
      <JourneySoFar />
      <OurValueUsingCarousel ourValueData={ourValueData} />
    </div>
  );
};

export default page;
