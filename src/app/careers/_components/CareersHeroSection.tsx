import BreadCrump from "@/components/bread-crump/BreadCrump";
import Image from "next/image";
import Bg from "@public/svg/about/giving-roadmap/givingRoadMapHeroSectionBg.svg";
import SmallBg from "@public/svg/careerHeroSvg.svg";

import OvalPurple from "@public/svg/ovalPurple.svg";
import React from "react";

const CareersHeroSection = () => {
  return (
    <div className="tw-w-full tw-relative">
      {/* tw-top-[9rem] */}
      <Image
        src={Bg}
        alt=""
        className="tw-hidden lg:tw-block tw-tw-absolute tw-top-[1rem]  tw-h-[65rem] tw-object-cover tw-w-[300rem]"
      />
      <Image
        src={SmallBg}
        alt=""
        className="tw-block md:tw-hidden  tw-absolute tw-top-[-3rem] tw-w-full"
      />
      <div className="container tw-mx-auto tw-relative">
        <BreadCrump textOne="Careers" linkOne="/careers" />
        <div className="tw-text-center tw-relative">
          <Image
            src={OvalPurple}
            alt=""
            className="tw-absolute ~tw-bottom-[4rem]/[2rem] tw-size-[10rem] md:tw-size-auto ~tw-right-0/[7.8rem]"
          />
          <p className=" ~tw-px-5/[13.313rem] ~tw-pt-[3.5rem]/[7.5rem] ~tw-pb-[15rem]/[21.531rem] ~tw-text-h4/h1 tw-text-gray80 ~tw-leading-[2.6rem]/[3.713rem] tw-font-playFair tw-tracking-[-.04rem]">
            <span className="tw-font-playFairItalic tw-text-textPurple">
              Inspiring. Supportive. Inclusive. Innovative. Growing.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersHeroSection;
