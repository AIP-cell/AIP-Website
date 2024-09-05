import BreadCrump from "@/components/bread-crump/BreadCrump";
import Image from "next/image";
import Bg from "@public/svg/about/giving-roadmap/givingRoadMapHeroSectionBg.svg";
import OvalPurple from "@public/svg/ovalPurple.svg";
import React from "react";

const CareersHeroSection = () => {
  return (
    <div className="bg-container tw-mx-auto tw-relative">
      <Image src={Bg} alt="" className="tw-absolute tw-top-[9rem] tw-w-full" />
      <div className="container tw-mx-auto tw-relative">
        <BreadCrump textOne="Careers" linkOne="/careers" />
        <div className="tw-text-center tw-relative">
          <Image
            src={OvalPurple}
            alt=""
            className="tw-absolute tw-bottom-[7rem] tw-right-[7.8rem]"
          />
          <p className=" tw-px-[20.938rem] tw-pt-[7.5rem] tw-pb-[21.531rem] tw-text-h1 tw-text-gray80 tw-leading-[3.713rem] tw-font-playFair tw-tracking-[-.04rem]">
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
