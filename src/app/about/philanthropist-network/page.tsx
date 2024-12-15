import React from "react";
import FourPillars from "./_components/FourPillars";
import JoinTheFlow from "./_components/JoinTheFlow";
import CaseStudies from "../aip-impact/_components/CaseStudies";
import PeopleWeWorkWith from "../aip-impact/_components/PeopleWeWorkWith";
import PhilanthropistHeroSection from "./_components/PhilanthropistHeroSection";
import HelpingRivers from "./_components/HelpingRivers";
import NetworkContactSection from "./_components/NetworkContactSection";
import NetworkCaseStudies from "./_components/NetworkCaseStudies";
import { Api } from "@/api/Api";
import { TPhilanthropistNetwork, TPhilanthropistNetworkPage } from "@/api/type";

export const dynamic = "force-dynamic";
const geFounderNetworkApi = async (): Promise<TPhilanthropistNetwork> => {
  const response = await Api.getPhilanthropistNetwork();
  return response.data;
};
const page = async () => {
  const response = await geFounderNetworkApi();
  // const philanthropistNetwork = response.philanthropistNetwork.at(0);
  const casestudies = response!.casestudies;
  const peopleData = response!.people;
  return (
    <div className="pt-[5rem]">
      <PhilanthropistHeroSection />
      {/* <FourPillars /> */}
      <HelpingRivers />
      <NetworkContactSection />
      <JoinTheFlow />
      <NetworkCaseStudies casestudies={casestudies} />
      {/* <CaseStudies  bottomCaseStudyCurveSvg={CurvePurple} /> */}
      <PeopleWeWorkWith peopleData={peopleData} />
    </div>
  );
};

export default page;
