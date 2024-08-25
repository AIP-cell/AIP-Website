import Image from "next/image";
import Link from "next/link";
import React from "react";
import JourneyHeroSection from "./_components/JourneyHeroSection";
import OurValueSection from "./_components/OurValueSection";
import ValueSlick from "./_components/ValueSlick";
import OurThreeIs from "./_components/OurThreeIs";
const page = () => {
  return (
    <div>
      <JourneyHeroSection />   
      <OurValueSection/>
      <ValueSlick/>
      <OurThreeIs/>
    </div>
  );
};

export default page;
