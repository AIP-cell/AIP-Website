import React from "react";
import JourneyHeroSection from "./_components/JourneyHeroSection";

import JourneySoFar from "./_components/JourneySoFar";
import OurValueUsingCarousel from "./_components/OurValueUsingCarousel";

const page = () => {
  return (
    <div className="pt-[5rem]">
      <JourneyHeroSection />
      <JourneySoFar />
      <OurValueUsingCarousel />
      {/* <OurValueSectionUsingRef /> */}
    </div>
  );
};

export default page;
