import Image from "next/image";
import Link from "next/link";
import React from "react";
import JourneyHeroSection from "./_components/JourneyHeroSection";
import OurValueSection from "./_components/OurValueSection";
import ValueSlick from "../../../components/slick/ValueSlick";
import ShapeTheFlow from "../our-approach/_components/ShapeTheFlow";
import JourneySoFar from "./_components/JourneySoFar";

const page = () => {
  return (
    <div className="pt-[5rem]">
      <JourneyHeroSection />
      <JourneySoFar/>
      <OurValueSection />
      
      {/* <Pillars /> */}
    </div>
  );
};

export default page;
