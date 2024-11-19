import React from "react";
import HeroSection from "./_components/HeroSection";
import GiveSection from "./_components/GiveSection";
import Spotlight from "./_components/Spotlight";
import MakeDifference from "./_components/MakeDifference";
import Members from "./_components/Members";
import AipWay from "./_components/AipWay";
import Founder from "./_components/Founder";
import News from "./_components/News";
import CustomHeaderSelect from "@/components/custom/CustomHeaderSelect";

const page = () => {
  return (
    <div className="tw-bg-bgLightPeach tw-pt-[5rem] tw-overflow-hidden">
      <HeroSection />
      <GiveSection />
      <Spotlight />
      <MakeDifference />
      <Members />
      <AipWay />
      <Founder />
      <News/>
    </div>
  );
};

export default page;
