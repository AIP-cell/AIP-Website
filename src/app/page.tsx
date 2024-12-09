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

const getHomePageApi = async (): Promise<THomePageData> => {
  const response = await Api.getHomePage();
  return response.data;
};
const page = async () => {
  const response = await getHomePageApi();
  // console.log("home response:::", response);
  const eventData = response.event;
  const teamData = response.team;
  const countData = response.count;
  // const newsAndUpdates = response.newsAndUpdates;
  return (
    <div className="tw-bg-bgLightPeach tw-pt-[5rem] tw-overflow-hidden">
      <HeroSection />
      <GiveSection />
      <Spotlight eventData={eventData} />
      <MakeDifference />
      <Members countData={countData} />
      <AipWay />
      <Founder teamData={teamData} />
      <News />
    </div>
  );
};

export default page;
