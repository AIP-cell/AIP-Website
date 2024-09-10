import ACardWithButton from "@/components/cards/aCards/ACardWithButton";
import PCardWithButton from "@/components/cards/pCards/PCardWithButton";
import Image from "next/image";
import Bg from "@public/svg/peach-bg-curve-founders.svg";
import React from "react";

const OurCoreFoundersContent = () => {
  return (
    <div className="tw-pt-[3rem] tw-relative">
      <Image
        src={Bg}
        alt=""
        className="tw-absolute  tw-top-[15.5rem]  tw-right-0"
      />
      <Image
        src={Bg}
        alt=""
        className="tw-absolute  tw-bottom-0  tw-left-0 tw-rotate-180"
      />
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <h2 className="~tw-text-h4/h2 tw-text-center tw-text-gray80 tw-leading-[3.2rem] tw-font-playFair">
          Our{" "}
          <span className="tw-text-textPurple tw-font-playFairItalic">
            Core-Founders
          </span>
        </h2>
        <p className="tw-font-inter ~tw-px-5/[20.938rem] tw-text-center tw-text-midGray tw-leading-[1.4rem] tw-pt-[1.25rem]">
          Our Founders are the foundations of the common purpose: create a
          transformative impact of philanthropic efforts across a range of
          sectors from education to healthcare to climate and the arts, with
          innovative initiatives and their profound effects on communities. Our
          founders are our banks, our north stars, all the same.
        </p>
      </div>
      <div className="sm:tw-flex-row tw-flex-col tw-flex ~tw-gap-[3.5rem]/[4.56rem] tw-pt-[5rem] tw-pr-12 ~tw-pl-12/[7.8rem] ">
        <ACardWithButton />
        <PCardWithButton />
      </div>
      <div className="sm:tw-flex-row tw-flex-col tw-flex ~tw-gap-[3.5rem]/[4.56rem] ~tw-pt-14/[5.25rem] tw-justify-end tw-pb-[7.37rem] tw-pl-12 ~tw-pr-12/[7.8rem]">
        <ACardWithButton />
        <PCardWithButton />
      </div>
    </div>
  );
};

export default OurCoreFoundersContent;
