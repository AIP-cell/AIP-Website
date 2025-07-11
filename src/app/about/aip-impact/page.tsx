import ImpactHeroSection from "./_components/ImpactHeroSection";
import CaseStudies from "./_components/CaseStudies";
import FoundationFacts from "./_components/FoundationFacts";
import CurvePeach from "@public/svg/peach-bg-curve-founders.svg";
import { Api } from "@/api/Api";
import { TAipImpact } from "@/api/type";
import { notFound } from "next/navigation";
import PeopleWeWorkWith from "./_components/PeopleWeWorkWith";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about/aip-impact",
  },
};

export const dynamic = "force-dynamic";
const geAipImpactApi = async (): Promise<TAipImpact> => {
  const response = await Api.getAipImpact();
  return response?.data;
};
const page = async () => {
  const response = await geAipImpactApi();
  if (!response) {
    notFound();
  }
  const caseStudyData = response.casestudies;
  const peopleData = response.people;
  const foundationFacts = response.foundationFacts;

  return (
    <div className="relative pt-[5rem] overflow-hidden">
      <ImpactHeroSection />
      {caseStudyData.length != 0 && (
        <CaseStudies
          bottomCaseStudyCurveSvg={CurvePeach}
          caseStudyData={caseStudyData}
        />
      )}
      {foundationFacts && (
        <FoundationFacts
          button="View more"
          foundationFacts={foundationFacts}
          className=" ~pb-[5rem]/[7.5rem]"
        />
      )}
      {peopleData && peopleData.length != 0 && (
        <PeopleWeWorkWith peopleData={peopleData} />
      )}
    </div>
  );
};

export default page;
