import React from "react";
import ServiceWeProvide from "./_components/ServiceWeProvide";
import JoinTheFlow from "./_components/JoinTheFlow";
import CaseStudies from "../aip-impact/_components/CaseStudies";
import PeopleWeWorkWith from "../aip-impact/_components/PeopleWeWorkWith";
import CurvePurple from "@public/svg/purpleCurveCaseStudy.svg"
import PhilanthropistHeroSection from "./_components/PhilanthropistHeroSection";
const page = () => {
  return (
    <div>
      <PhilanthropistHeroSection/>
      <ServiceWeProvide />
      <JoinTheFlow/>
      <CaseStudies bottomCaseStudyCurveSvg={CurvePurple}/>
      <PeopleWeWorkWith/>
    </div>
  );
};

export default page;
