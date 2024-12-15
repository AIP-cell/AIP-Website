import React from "react";
import FoundationFactHeroSection from "./_components/FoundationFactHeroSection";
import TestimonialSlick from "../../../../components/slick/TestimonialSlick";
import AipFootprints from "./_components/AipFootprints";
import Testimonials from "./_components/Testimonials";
import ContactSection from "@/app/about/aip-impact/foundation-fact-sheet/_components/ContactSection";
import SheetFoundationFacts from "./_components/SheetFoundationFacts";
import FoundationFacts from "../_components/FoundationFacts";
import { Api } from "@/api/Api";
import { TAipImpact, TAipImpactPageData } from "@/api/type";

const geAipImpactApi = async (): Promise<TAipImpact> => {
  const response = await Api.getAipImpact();
  return response.data;
};
const page = async () => {
  const response = await geAipImpactApi();
  const testimonialsData = response.testimonials;
  const foundationFacts = response.foundationFacts;
  return (
    <div>
      <FoundationFactHeroSection />
      <FoundationFacts foundationFacts={foundationFacts} />
      {/* <SheetFoundationFacts /> */}
      <Testimonials testimonialsData={testimonialsData} />
      {/* <AipFootprints /> */}
      <ContactSection />
    </div>
  );
};

export default page;
