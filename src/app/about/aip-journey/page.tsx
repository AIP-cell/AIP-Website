import Image from "next/image";
import Link from "next/link";
import React from "react";
import JourneyHeroSection from "./_components/JourneyHeroSection";
import OurValueSectionUsingRef from "./_components/OurValueSectionUsingRef";
import ValueSlick from "../../../components/slick/ValueSlick";
import ShapeTheFlow from "../our-approach/_components/ShapeTheFlow";
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
