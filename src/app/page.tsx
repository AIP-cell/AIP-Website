import React from "react";
import HeroSection from "./_components/HeroSection";
import GiveSection from "./_components/GiveSection";
import Spotlight from "./_components/Spotlight";
import MakeDifference from "./_components/MakeDifference";
import Members from "./_components/Members";
import AipWay from "./_components/AipWay";
import Founder from "./_components/Founder";
import News from "./_components/News";
import { Api } from "@/api/Api";
import { THomePageData } from "@/api/type";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const getHomePageApi = async (): Promise<THomePageData> => {
  const response = await Api.getHomePage();
  return response?.data;
};
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ selected: string }>;
}) => {
  const asyncSearchParams = await searchParams;
  const response = await getHomePageApi();
  if (!response) {
    notFound();
  }
  const eventData = response?.event;
  const teamData = response?.team;
  const countData = response?.count;
  const newsData = response?.newsAndUpdates;

  return (
    <div className="bg-bgLightPeach pt-[5rem] overflow-hidden">
      <HeroSection />
      <GiveSection />
      {eventData && <Spotlight eventData={eventData} />}
      <MakeDifference />
      {countData && <Members countData={countData} />}
      <AipWay />
      {teamData && <Founder teamData={teamData} />}
      {/* {newsData && ( */}
      <News newsData={newsData} searchParams={asyncSearchParams.selected} />
      {/* )} */}
    </div>
  );
};

export default page;
