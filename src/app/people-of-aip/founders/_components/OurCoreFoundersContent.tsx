import ACardWithButton from "@/components/cards/aCards/ACardWithButton";
import PCardWithButton from "@/components/cards/pCards/PCardWithButton";
import React from "react";

const OurCoreFoundersContent = () => {
  return (
    <div className="tw-pt-[3rem]">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <h2 className="tw-text-h2Heading2 tw-text-center tw-text-gray80 tw-leading-[3.2rem] tw-font-playFair">
          Our <i className="tw-text-textPurple">Core-Founders</i>
        </h2>
        <p className="tw-font-inter tw-px-[20.938rem] tw-text-center tw-text-midGray tw-leading-[1.4rem] tw-pt-[1.25rem]">
          Our Founders are the foundations of the common purpose: create a
          transformative impact of philanthropic efforts across a range of
          sectors from education to healthcare to climate and the arts, with
          innovative initiatives and their profound effects on communities. Our
          founders are our banks, our north stars, all the same.
        </p>
      </div>
      <div className="tw-flex tw-gap-[4.56rem] tw-pt-[5rem] tw-pl-[7.8rem]">
        <ACardWithButton/>
        <PCardWithButton/>
      </div>
      <div className="tw-flex tw-justify-end tw-gap-[4.56rem] tw-pt-[5.25rem] tw-pb-[7.37rem] tw-pr-[7.8rem]">
        <ACardWithButton/>
        <PCardWithButton/>
      </div>
    </div>
  );
};

export default OurCoreFoundersContent;
