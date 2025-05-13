import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import FounderNetworkHeroSection from "./_components/FounderNetworkHeroSection";
import CurvePeach from "@public/svg/peach-bg-curve-founders.svg";

import { Api } from "@/api/Api";
import { TFounderNetwork, TFounderNetworkPageData } from "@/api/type";
import { notFound } from "next/navigation";
import NetworkContactSection from "./_components/NetworkContactSection";
import JoinTheFlow from "./_components/JoinTheFlow";
import CaseStudies from "./_components/CaseStudies";
import PeopleWeWorkWith from "./_components/PeopleWeWorkWith";
import OurCoreFoundersContent from "./_components/OurCoreFoundersContent";
import CoreFoundersAndFounders from "./_components/CoreFoundersAndFounders";

export const dynamic = "force-dynamic";
const geFounderNetworkApi = async (): Promise<TFounderNetwork> => {
  const response = await Api.getFounderNetwork();
  return response?.data;
};



const page = async () => {
  const response = await geFounderNetworkApi();
  if (!response) {
    notFound();
  }
  // const founderNetwork = response.founderNetwork;
  const testimonials = response?.testimonials;
  const methodsOfJoining = response?.methodsOfJoining;
  const caseStudyData = response.casestudies;
  const peopleData = response.people;
  const desc1 = response?.description1;
  const desc2 = response?.description2;
  return (
    <div className="pt-[5rem]">
      {desc1 && <FounderNetworkHeroSection desc1={desc1} desc2={desc2} />}
      {/* {methodsOfJoining && methodsOfJoining.length != 0 && (
        <Join methodsOfJoining={methodsOfJoining} />
      )} */}
      {/* {testimonials && testimonials.length != 0 && (
        <TestimonialsFromFounders testimonials={testimonials} />
      )} */}

     <CoreFoundersAndFounders/>

      <NetworkContactSection />
      <JoinTheFlow />
      {caseStudyData.length != 0 && (
        <CaseStudies
          isReadMoreButton={true}
          bottomCaseStudyCurveSvg={CurvePeach}
          caseStudyData={caseStudyData}
        />
      )}
      {peopleData && peopleData.length != 0 && (
        <PeopleWeWorkWith peopleData={peopleData} />
      )}
    </div>
  );
};

export default page;
