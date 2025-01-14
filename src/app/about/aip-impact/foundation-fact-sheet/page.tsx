import React from "react";
import FoundationFactHeroSection from "./_components/FoundationFactHeroSection";
import Testimonials from "./_components/Testimonials";
import ContactSection from "@/app/about/aip-impact/foundation-fact-sheet/_components/ContactSection";
import FoundationFacts from "../_components/FoundationFacts";
import { Api } from "@/api/Api";
import { TAipImpact } from "@/api/type";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const geAipImpactApi = async (): Promise<TAipImpact> => {
  const response = await Api.getAipImpact();
  return response.data;
};
const page = async () => {
  const response = await geAipImpactApi();
  if (!response) {
    notFound();
  }
  const testimonialsData = response.testimonials;
  const foundationFacts = response.foundationFacts;
  return (
    <div>
      <FoundationFactHeroSection />
      {foundationFacts && <FoundationFacts foundationFacts={foundationFacts} />}
      {testimonialsData.length!=0 && <Testimonials testimonialsData={testimonialsData} />}
      <ContactSection />
    </div>
  );
};

export default page;
