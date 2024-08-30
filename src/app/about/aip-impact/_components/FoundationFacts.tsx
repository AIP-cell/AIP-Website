import React from "react";
import Image from "next/image";
import OvalPeach from "@/components/ovals/OvalPeach";
import OvalPurple from "@/components/ovals/OvalPurple";
import Bg from "@public/svg/aboutPage/aip-impact/foundationFactBg.svg";
const FoundationFacts = () => {
  return (
    <div className="tw-pt-[12.5rem] tw-relative bg-container tw-mx-auto">
      {/* <Image
        src={Bg}
        alt=""
        className="tw-absolute tw-top-0 tw-inset-x-0 tw-object-cover tw-w-full"
      /> */}
      <div className="tw-relative container tw-mx-auto">
        <h2 className=" tw-text-h2 tw-text-center tw-font-playFair">
          Foundation <i className="tw-text-textPurple"> Facts</i>
        </h2>
        <OvalPeach
          mainClass="tw-absolute tw-top-[2.5rem] tw-left-[8.93rem]"
          text1="100"
          textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold"
          sizeClass="tw-size-[17.38rem]"
          text2="Events"
          textClass2=" tw-leading-[1.4rem]"
        />
        <OvalPurple
          mainClass="tw-absolute tw-flex tw-w-full tw-justify-center  tw-top-[8.8rem] "
          text1="100"
          textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold"
          sizeClass="tw-size-[17.38rem]"
          text2="Events"
          textClass2=" tw-leading-[1.4rem]"
        />
        <OvalPeach
          mainClass="tw-absolute tw-top-[6.3rem] tw-right-[8rem]"
          text1="20+"
          textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold"
          sizeClass="tw-size-[17.38rem]"
          text2="Founders"
          textClass2=" tw-leading-[1.4rem]"
        />
        <OvalPurple
          mainClass="tw-absolute  tw-bottom-[11.25rem] tw-left-[7.18rem]"
          text1="100"
          textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold"
          sizeClass="tw-size-[17.38rem]"
          text2="Network Members"
          textClass2=" tw-leading-[1.4rem]"
        />
        <OvalPeach
          mainClass="tw-absolute tw-bottom-[6.81rem] tw-flex tw-w-full tw-justify-center tw-right-[3rem]"
          text1="3 continents"
          textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold"
          sizeClass="tw-size-[17.38rem]"
          text2="Footprint"
          textClass2=" tw-leading-[1.4rem]"
        />
        <OvalPurple
          mainClass="tw-absolute  tw-bottom-[8.18rem] tw-right-[11.75rem]"
          text1="100"
          textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold"
          sizeClass="tw-size-[17.38rem]"
          text2="Knowledge Products"
          textClass2=" tw-leading-[1.4rem]"
        />
        <div className="tw-flex tw-justify-center tw-pt-[47rem]">
          <button className="tw-bg-darkPurple tw-rounded-full">
            <p className="tw-px-[1.75rem] tw-py-[0.75rem] tw-text-white tw-leading-[1.4rem]">
              View More
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoundationFacts;
