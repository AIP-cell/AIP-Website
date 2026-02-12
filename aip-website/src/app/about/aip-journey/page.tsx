import React from "react";
import JourneyHeroSection from "./_components/JourneyHeroSection";
import JourneySoFar from "./_components/JourneySoFar";
import OurValueUsingCarousel from "./_components/OurValueUsingCarousel";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import { TAipJourney } from "@/api/type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIP Journey | Philanthropy Movement for India's Wealth Creators",
  description:
    "AIP was formed about three years ago with the objective of helping India's wealth creators with their philanthropic work — enabling them to Give More, Give Sooner, and Give Better. Conceived by Ashish Dhawan, Rohini Nilekani, Amit Chandra, and Vishal Tulsyan, AIP is a movement of philanthropists and for philanthropists.",
  alternates: {
    canonical: "/about/aip-journey",
  },
};

export const dynamic = "force-dynamic";

const getAipJourneyApi = async (): Promise<TAipJourney> => {
  const response = await Api.getAipJourney();
  return response?.data;
};

const Page = async () => {
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

export default Page;
