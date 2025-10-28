import NpoHeroSection from "./_components/NpoHeroSection";
import AipAndNpo from "./_components/AipAndNpo";
import NpoJoinTheFlow from "./_components/NpoJoinTheFlow";
import NpoSpotlight from "./_components/NpoSpotlight";
import NposPartners from "./_components/NposPartners";
import { Api } from "@/api/Api";
import { TNpos } from "@/api/type";
import { notFound } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Profit Organizations | Accelerate Indian Philanthropy (AIP)",
  description:
    "India has over 30 lakh non-profit organizations, making it challenging for philanthropists to find credible and impactful partners. AIP bridges this gap by connecting philanthropists with trusted NPOs aligned to their strategic giving goals.",
  alternates: {
    canonical: "/our-work/npo",
  },
};

export const dynamic = "force-dynamic";
const getNpoApi = async (): Promise<TNpos> => {
  const response = await Api.getNpos();
  return response?.data;
};
const page = async () => {
  const response = await getNpoApi();
  if (!response) {
    notFound();
  }
  const casestudies = response.casestudies;
  const people = response.people;
  return (
    <div className="pt-[5rem] overflow-x-hidden no-scrollbar">
      <NpoHeroSection />
      <AipAndNpo />
      <NpoJoinTheFlow />
      {casestudies && casestudies.length != 0 && (
        <NpoSpotlight casestudies={casestudies} />
      )}
      {people && people.length != 0 && <NposPartners people={people} />}
    </div>
  );
};

export default page;
