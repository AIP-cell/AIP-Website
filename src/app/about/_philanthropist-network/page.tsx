import JoinTheFlow from "./_components/JoinTheFlow";
import PeopleWeWorkWith from "../aip-impact/_components/PeopleWeWorkWith";
import PhilanthropistHeroSection from "./_components/PhilanthropistHeroSection";
import HelpingRivers from "./_components/HelpingRivers";
import NetworkContactSection from "./_components/NetworkContactSection";
import NetworkCaseStudies from "./_components/NetworkCaseStudies";
import { Api } from "@/api/Api";
import { TPhilanthropistNetwork } from "@/api/type";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const geFounderNetworkApi = async (): Promise<TPhilanthropistNetwork> => {
  const response = await Api.getPhilanthropistNetwork();
  return response?.data;
};
const page = async () => {
  const response = await geFounderNetworkApi();
  if (!response) {
    notFound();
  }

  const casestudies = response?.casestudies;
  const peopleData = response?.people;
  return (
    <div className="pt-[5rem]">
      <PhilanthropistHeroSection />
      <HelpingRivers />
      <NetworkContactSection />
      <JoinTheFlow />
      <div className="~pb-[7rem]/[12.5rem]">
        {casestudies && casestudies?.length != 0 && (
          <NetworkCaseStudies casestudies={casestudies} />
        )}
      </div>
      {peopleData && peopleData.length != 0 && (
        <PeopleWeWorkWith peopleData={peopleData} />
      )}
    </div>
  );
};

export default page;
