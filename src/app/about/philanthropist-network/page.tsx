import React from "react";
import FourPillars from "./_components/FourPillars";
import JoinTheFlow from "./_components/JoinTheFlow";
import CaseStudies from "../aip-impact/_components/CaseStudies";
import PeopleWeWorkWith from "../aip-impact/_components/PeopleWeWorkWith";
import CurvePurple from "@public/svg/purpleCurveCaseStudy.svg";
import PhilanthropistHeroSection from "./_components/PhilanthropistHeroSection";
const page = () => {
  return (
    <div className="~tw-pt-[8rem]/[5rem]">
      <PhilanthropistHeroSection />
      <FourPillars />
      <JoinTheFlow />
      <CaseStudies bottomCaseStudyCurveSvg={CurvePurple} />
      <PeopleWeWorkWith />
    </div>
  );
};

export default page;
