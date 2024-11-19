import React from "react";
import FoundationFactHeroSection from "./_components/FoundationFactHeroSection";
import TestimonialSlick from "../../../../components/slick/TestimonialSlick";
import AipFootprints from "./_components/AipFootprints";
import Testimonials from "./_components/Testimonials";
import ContactSection from "@/app/about/aip-impact/foundation-fact-sheet/_components/ContactSection";
import SheetFoundationFacts from "./_components/SheetFoundationFacts";

const page = () => {
  return (
    <div>
      <FoundationFactHeroSection />
      <SheetFoundationFacts />
      <Testimonials />
      {/* <AipFootprints /> */}
      <ContactSection />
    </div>
  );
};

export default page;
