import React from "react";
import FoundationFactHeroSection from "./_components/FoundationFactHeroSection";
import FoundationFacts from "../_components/FoundationFacts";
import TestimonialSlick from "../../../../components/slick/TestimonialSlick";
import AipFootprints from "./_components/AipFootprints";
import Testimonials from "./_components/Testimonials";

const page = () => {
  return (
    <div>
      <FoundationFactHeroSection />
      <FoundationFacts />
      <Testimonials />
      <AipFootprints />
    </div>
  );
};

export default page;
