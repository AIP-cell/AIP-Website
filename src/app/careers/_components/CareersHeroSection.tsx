import BreadCrump from "@/components/bread-crump/BreadCrump";
import Image from "next/image";
import Bg from "@public/svg/about/giving-roadmap/givingRoadMapHeroSectionBg.svg";
import SmallBg from "@public/svg/careerHeroSvg.svg";

import OvalPurple from "@public/svg/ovalPurple.svg";
import React from "react";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";

const CareersHeroSection = () => {
  return (
    <div className="w-full relative">
      {/* top-[9rem] */}
      <Image
        src={Bg}
        alt=""
        className="hidden lg:block absolute top-[1rem]  h-[65rem] object-cover w-[300rem]"
      />
      <Image
        src={SmallBg}
        alt=""
        className="block md:hidden  absolute top-[-3rem] w-full"
      />
      <div className="container mx-auto relative">
        <BreadCrump textOne="Careers" linkOne="/careers" />
        <div className="text-center relative">
          <Image
            src={OvalPurple}
            alt=""
            className="absolute ~bottom-[4rem]/[2rem] size-[10rem] md:size-auto ~right-0/[7.8rem]"
          />
          {/* <p className=" ~px-5/[13.313rem] ~pt-[3.5rem]/[7.5rem] ~pb-[15rem]/[21.531rem] ~text-h4/h1 text-gray80 ~leading-[2.6rem]/[3.713rem] font-playFair tracking-[-.04rem]">
            <span className="font-playFairItalic text-textPurple">
              Inspiring. Supportive. Inclusive. Innovative. Growing.
            </span>
          </p> */}
          <WordStaggerAnimation
            text="<color>Inspiring. Supportive. Inclusive. Innovative. Growing.</color>"
            className="~px-5/[13.313rem] ~pt-[3.5rem]/[7.5rem] ~pb-[15rem]/[21.531rem] ~text-h4/h1 text-gray80 ~leading-[2.6rem]/[3.713rem] font-playFair tracking-[-.04rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default CareersHeroSection;
