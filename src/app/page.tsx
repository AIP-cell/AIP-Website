import React from "react";
import HeroSection from "./_components/HeroSection";
import GiveSection from "./_components/GiveSection";
import UpcomingEvents from "./_components/UpcomingEvents";
import MakeDifference from "./_components/MakeDifference";
import Founders from "./_components/Members";
import Story from "./_components/Story";
import Founder from "./_components/Founder";
import News from "./_components/News";

const page = () => {
  return (
    <div className="bg-bgLightPeach overflow-hidden">
      <HeroSection />
      <GiveSection />
      <UpcomingEvents />
      <MakeDifference />
      <Founders />
      <Story />
      <Founder />
      <News/>
    </div>
  );
};

export default page;
