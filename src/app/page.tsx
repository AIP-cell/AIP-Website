import React from "react";
import HeroSection from "./_components/HeroSection";
import GiveSection from "./_components/GiveSection";
import UpcomingEvents from "./_components/UpcomingEvents";
import MakeDifference from "./_components/MakeDifference";
import Members from "./_components/Members";
import Story from "./_components/Story";
import Founder from "./_components/Founder";
import News from "./_components/News";
import CustomHeaderSelect from "@/components/custom/CustomHeaderSelect";

const page = () => {
  return (
    <div className="tw-bg-bgLightPeach tw-pt-[5rem] tw-overflow-hidden">
      {/* <ExampleListBox/> */}
      <HeroSection />
      <GiveSection />
      <UpcomingEvents />
      <MakeDifference />
      <Members />
      <Story />
      <Founder />
      <News/>
    </div>
  );
};

export default page;
