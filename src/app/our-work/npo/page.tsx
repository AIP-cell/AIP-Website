import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import Wave from "react-wavify";
import NpoHeroSection from "./_components/NpoHeroSection";
import AipAndNpo from "./_components/AipAndNpo";
import NpoJoinTheFlow from "./_components/NpoJoinTheFlow";
import NpoSpotlight from "./_components/NpoSpotlight";
import NposPartners from "./_components/NposPartners";
import { Api } from "@/api/Api";
import { TNpos } from "@/api/type";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const getNpoApi = async (): Promise<TNpos> => {
  const response = await Api.getNpos();
  return response.data;
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
      {/* {casestudies && casestudies.length != 0 && (
        <NpoSpotlight casestudies={casestudies} />
      )} */}
      {people && people.length != 0 && <NposPartners people={people} />}
    </div>
  );
};

export default page;
