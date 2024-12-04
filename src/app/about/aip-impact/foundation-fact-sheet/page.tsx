import React from "react";
import FoundationFactHeroSection from "./_components/FoundationFactHeroSection";
import TestimonialSlick from "../../../../components/slick/TestimonialSlick";
import AipFootprints from "./_components/AipFootprints";
import Testimonials from "./_components/Testimonials";
import ContactSection from "@/app/about/aip-impact/foundation-fact-sheet/_components/ContactSection";
import SheetFoundationFacts from "./_components/SheetFoundationFacts";
import FoundationFacts from "../_components/FoundationFacts";

const page = () => {
  return (
    <div>
      <FoundationFactHeroSection />
      <FoundationFacts/>
      {/* <SheetFoundationFacts /> */}
      <Testimonials />
      {/* <AipFootprints /> */}
      <ContactSection />
    </div>
  );
};

export default page;
