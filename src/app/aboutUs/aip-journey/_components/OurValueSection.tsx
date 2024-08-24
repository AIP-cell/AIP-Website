import OvalPurple from "@/components/ovals/OvalPurple";
import React from "react";
const OurValueSection = () => {
  return (
    <div className="tw-pt-[12.5rem]  container tw-mx-auto">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center ">
        <h3 className="tw-text-h2Heading2 tw-text-darkGray tw-font-playFair tw-leading-[52.8px]">
          Our <i className="tw-text-textPurple">Values</i>
        </h3>
        <p className="tw-pt-[1.25rem]">
          The foundations that drive AIP to drive positive change
        </p>
      </div>
      <div className="tw-pt-[5rem]">
        <div className="tw-flex tw-gap-[5rem] tw-justify-center">
          <OvalPurple
            Class=""
            title="Respect "
            desc="Agency"
            textClass1="tw-text-h4Heading4 tw-font-playFair"
            textClass2="tw-font-playFair tw-text-h4Heading4"
          />
          <OvalPurple
            Class=""
            title="Respect "
            desc="Agency"
            textClass1="tw-text-h4Heading4 tw-font-playFair"
            textClass2="tw-font-playFair tw-text-h4Heading4"
          />
          <OvalPurple
            Class=""
            title="Respect "
            desc="Agency"
            textClass1="tw-text-h4Heading4 tw-font-playFair"
            textClass2=" tw-font-playFair tw-text-h4Heading4"
          />
        </div>
      </div>
    </div>
  );
};

export default OurValueSection;
