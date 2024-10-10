import BreadCrump from "@/components/bread-crump/BreadCrump";
import Image from "next/image";
import Bg from "@public/svg/about/giving-roadmap/givingRoadMapHeroSectionBg.svg";
import OvalPurple from "@public/svg/ovalPurple.svg";
import React from "react";

const CareersHeroSection = () => {
  return (
    <div className="tw-w-full tw-relative">
      {/* tw-top-[9rem] */}
      <Image src={Bg} alt="" className="tw-absolute tw-top-[8rem]  tw-h-[65rem] tw-object-cover tw-w-[300rem]" />
      <div className="container tw-mx-auto tw-relative">
        <BreadCrump textOne="Careers" linkOne="/careers" />
        <div className="tw-text-center tw-relative">
          <Image
            src={OvalPurple}
            alt=""
            className="tw-absolute ~tw-bottom-[3rem]/[7rem] tw-right-[7.8rem]"
          />
          <p className=" ~tw-px-5/[20rem] ~tw-pt-[3.5rem]/[7.5rem] ~tw-pb-[15rem]/[21.531rem] tw-text-h1 tw-text-gray80 tw-leading-[3.713rem] tw-font-playFair tw-tracking-[-.04rem]">
            AIP is a peer network that
            <span className="tw-font-playFairItalic tw-text-textPurple">
              &nbsp;channels the flow
            </span>
            &nbsp;to accelerate strategic giving in India - a movement
            <span className="tw-font-playFairItalic tw-text-textPurple">
              &nbsp;by and for philanthropists
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersHeroSection;
