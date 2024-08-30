import Link from "next/link";
import React from "react";
import ImpactHeroSection from "./_components/ImpactHeroSection";
import CaseStudies from "./_components/CaseStudies";
import FoundationFacts from "./_components/FoundationFacts";

const page = () => {
  return (
    <div className="tw-relative">
      <ImpactHeroSection/>
      <CaseStudies/>
      <FoundationFacts/>
    </div>
  );
};

export default page;
