import React from "react";
import FourPillars from "./_components/FourPillars";
import JoinTheFlow from "./_components/JoinTheFlow";
import CaseStudies from "../aip-impact/_components/CaseStudies";
import PeopleWeWorkWith from "../aip-impact/_components/PeopleWeWorkWith";
import PhilanthropistHeroSection from "./_components/PhilanthropistHeroSection";
import HelpingRivers from "./_components/HelpingRivers";
import NetworkContactSection from "./_components/NetworkContactSection";
import NetworkCaseStudies from "./_components/NetworkCaseStudies";


const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <PhilanthropistHeroSection />
      {/* <FourPillars /> */}
      <HelpingRivers/>
      <NetworkContactSection/>
      <JoinTheFlow />
      <NetworkCaseStudies/>
      {/* <CaseStudies  bottomCaseStudyCurveSvg={CurvePurple} /> */}
      <PeopleWeWorkWith />
    </div>
  );
};

export default page;
