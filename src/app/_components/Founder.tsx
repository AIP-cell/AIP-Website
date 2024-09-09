import React from "react";
import FounderBg from "../../../public/svg/foundersBg.svg";
import ASvg from "../../../public/svg/aSvg.svg";
import PurPleCurveSvg from "../../../public/svg/purpleBgCurve.svg";
import BlueCurveSvg from "../../../public/svg/blueBgCurve.svg";
// import Ex from "../../../public/";
import Image from "next/image";
import ACardWithPlaySign from "@/components/cards/aCards/ACardWithPlaySign";
import PCardWithPlaySign from "@/components/cards/pCards/PCardWithPlaySign";
const Founder = () => {
  return (
    <div className="bg-container tw-mx-auto tw-relative">
        {/* <Image src={FounderBg} alt="" className="tw-absolute tw-w-full tw-top-[-22rem]" /> */}

      <div className=" container tw-mx-auto tw-relative ~tw-h-[70rem]/[110rem]">
        <Image src={FounderBg} alt="" className="tw-absolute tw-h-full tw-object-cover ~tw-top-[0rem]/[-18rem]" />
        <Image src={PurPleCurveSvg} alt="" className="tw-hidden md:tw-block tw-absolute tw-top-[18rem] tw-right-0" />
        <Image src={BlueCurveSvg} alt="" className="tw-hidden md:tw-block tw-absolute tw-bottom-[5rem] tw-left-0" />
        <div className="~tw-px-[1.25rem]/[7.8rem] tw-pt-[10.3rem]">
          <h3 className="~tw-text-h4/h2 tw-text-white/80 ~tw-leading-[2.6rem]/[3.3rem] tw-relative tw-font-playFair">
            From our <span className="tw-text-white tw-font-playFairItalic">Core-Founders</span>
          </h3> 
          <div className="tw-relative tw-pt-[3.43rem] ">
           <div className="tw-flex tw-gap-[4.56rem]">
              <ACardWithPlaySign/>
              <PCardWithPlaySign/>
           </div>
           <div className="tw-flex tw-justify-end tw-gap-[4.56rem] tw-pt-[3.5rem]">
              <ACardWithPlaySign/>
              <PCardWithPlaySign/>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
