import Image from "next/image";
import Link from "next/link";
import React from "react";
import JourneyHeroSection from "./_components/JourneyHeroSection";
import OurValueSection from "./_components/OurValueSection";
import ValueSlick from "../../../components/slick/ValueSlick";
import ShapeTheFlow from "../our-approach/_components/ShapeTheFlow";
import JourneySoFar from "./_components/JourneySoFar";
const valueDescArray = [
  "It highlights the belief that success is achieved through collaboration, and collective efforts of individuals and teams. . It promotes a culture of teamwork, shared responsibility, effective communication, and continuous learning, creating an environment where everyone can thrive and contribute to the organization's success.",
  "2 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  "3 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  "4 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
];
const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <JourneyHeroSection />
      <JourneySoFar/>
      <OurValueSection />
      <ValueSlick slickArray={valueDescArray} />
      {/* <Pillars /> */}
    </div>
  );
};

export default page;
