import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import Wave from "react-wavify";
import NpoHeroSection from "./_components/NpoHeroSection";
import AipAndNpo from "./_components/AipAndNpo";
import NpoJoinTheFlow from "./_components/NpoJoinTheFlow";
import NpoSpotlight from "./_components/NpoSpotlight";
import NposPartners from "./_components/NposPartners";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <NpoHeroSection />
      <AipAndNpo/>
      <NpoJoinTheFlow/>
      <NpoSpotlight/>
      <NposPartners/>
    </div>
  );
};

export default page;
