import React from "react";
import Image from "next/image";
import OvalPeach from "@/components/ovals/OvalPeach";
import OvalPurple from "@/components/ovals/OvalPurple";
import Bg from "@public/svg/about/aip-impact/foundationFactBg.svg";
import Link from "next/link";
type Props = {
  button?: string;
};
const FoundationFacts = ({ button }: Props) => {
  return (
    <div className=" tw-relative bg-container tw-mx-auto ~tw-pt-[5rem]/[12.5rem]">
      <Image
        src={Bg}
        alt=""
        className="tw-absolute tw-top-[-30rem] tw-w-full"
      />
      <div className="tw-relative container tw-mx-auto ">
        <h2 className=" tw-text-h2 tw-text-center tw-font-playFair">
          Foundation{" "}
          <span className="tw-text-textPurple tw-font-playFairItalic">
            {" "}
            Facts
          </span>
        </h2>
        <div className="tw-relative tw-pb-[50.8rem]">
          <OvalPeach
            mainClass="tw-absolute tw-top-[2.5rem] tw-left-[8.93rem]"
            text1="100"
            textClass1="tw-text-h3 tw-leading-[3.25rem]  tw-font-semibold !tw-text-black"
            sizeClass="tw-size-[17.38rem]"
            text2="Events"
            textClass2=" tw-leading-[1.4rem] !tw-text-black"
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
            textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold !tw-text-black"
            sizeClass="tw-size-[17.38rem]"
            text2="Founders"
            textClass2=" tw-leading-[1.4rem] !tw-text-black"
          />
          <OvalPurple
            mainClass="tw-absolute  tw-top-[19.75rem] tw-left-[7.18rem]"
            text1="100"
            textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold "
            sizeClass="tw-size-[17.38rem]"
            text2="Network Members"
            textClass2=" tw-leading-[1.4rem]"
          />
          <OvalPeach
            mainClass="tw-absolute tw-top-[26.688rem] tw-flex tw-w-full tw-justify-center tw-right-[3rem]"
            text1="3"
            textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold !tw-text-black"
            sizeClass="tw-size-[17.38rem]"
            text2="Footprint"
            textClass2=" tw-leading-[1.4rem] !tw-text-black"
          />
          <OvalPurple
            mainClass="tw-absolute  tw-top-[22.875rem] tw-right-[11.75rem]"
            text1="100"
            textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold"
            sizeClass="tw-size-[17.38rem]"
            text2="Knowledge Products"
            textClass2=" tw-leading-[1.4rem]"
          />
        </div>
        {/* tw-pt-[47rem] */}
        {button && (
          <div className="tw-flex tw-justify-center tw-absolute tw-bottom-0 tw-w-full ">
            <Link
              href="/about/aip-impact/foundation-fact-sheet"
              className="tw-bg-darkPurple tw-rounded-full"
            >
              <p className="tw-px-[1.75rem] tw-py-[0.75rem] tw-text-white tw-leading-[1.4rem]">
                {button}
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoundationFacts;
