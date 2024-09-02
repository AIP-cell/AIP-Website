import Image from "next/image";
import Link from "next/link";
import React from "react";
import JourneyHeroSection from "./_components/JourneyHeroSection";
import OurValueSection from "./_components/OurValueSection";
import ValueSlick from "../../../components/slick/ValueSlick";
import OurThreeIs from "./_components/OurThreeIs";
const valueDescArray = [
  "1 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  "2 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  "3 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  "4 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
];
const page = () => {
  return (
    <div>
      <JourneyHeroSection />
      <OurValueSection />
      <ValueSlick slickArray={valueDescArray} />
      <OurThreeIs />
    </div>
  );
};

export default page;
