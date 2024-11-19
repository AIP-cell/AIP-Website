import React from "react";
import Image from "next/image";
import OvalPeach from "@/components/ovals/OvalPeach";
import OvalPurple from "@/components/ovals/OvalPurple";
import Bg from "@public/svg/about/aip-impact/foundationFactBg.svg";
import Link from "next/link";
import OvalPeachCount from "@/components/ovals/OvalPeachCount";
type Props = {
  button?: string;
};
const SheetFoundationFacts = ({ button }: Props) => {
  return (
    <div className="tw-relative tw-w-full ~tw-pt-[5rem]/[16rem]">
      <Image
        src={Bg}
        alt=""
        className="tw-hidden lg:tw-block tw-h-[95rem]  tw-absolute tw-top-[-15rem] tw-w-[500rem]"
      />
      <div className="tw-relative container tw-mx-auto ">
        <h2 className=" ~tw-text-h4/h2 tw-text-center tw-font-playFair ~tw-leading-[2.6rem]/[3.3rem]">
          Foundation{" "}
          <span className="tw-text-textPurple tw-font-playFairItalic">
            Facts
          </span>
        </h2>
        <div className="tw-relative tw-pb-[50.8rem]">
          <OvalPeach
            mainClass="tw-absolute tw-top-[2.5rem] ~tw-left-0/[8.93rem]"
            text1="100"
            textClass1="tw-text-h3 tw-leading-[3.25rem]  tw-font-semibold !tw-text-black"
            sizeClass="~tw-size-[14.25rem]/[17.38rem]"
            text2="Events"
            textClass2=" tw-leading-[1.4rem] !tw-text-gray80"
          />
          <OvalPeach
            mainClass="tw-absolute tw-flex tw-w-full tw-justify-center  tw-top-[8.8rem] tw-right-0 md:tw-right-auto"
            text1="4"
            textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold !tw-text-black"
            sizeClass="~tw-size-[14.25rem]/[17.38rem]"
            text2="Founders"
            textClass2=" tw-leading-[1.4rem] !tw-text-gray80"
          />

          <OvalPeachCount
            mainClass="tw-absolute tw-top-[6.3rem] ~tw-right-0/[8rem]"
            countEnd={20}
            sizeClass="~tw-size-[14.25rem]/[17.38rem]"
            text2="Founders"
            textClass2=" tw-leading-[1.4rem] "
          />

          <OvalPurple
            mainClass="tw-absolute  tw-top-[21rem] tw-right-0 md:tw-right-auto md:tw-left-[16.24rem] "
            text1="31"
            textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold "
            sizeClass="~tw-size-[14.25rem]/[17.38rem]"
            text2="Network"
            textClass2=" tw-leading-[1.4rem]"
            text3="Members"
            textClass3=" tw-leading-[1.4rem]"
          />
          <OvalPurple
            mainClass="tw-absolute tw-top-[25rem] tw-flex   tw-left-0 md:tw-left-auto md:!tw-right-[21rem] "
            text1="3"
            textClass1="tw-text-h3 tw-leading-[3.25rem] tw-font-semibold "
            sizeClass="~tw-size-[14.25rem]/[17.38rem]"
            text2="Continents"
            textClass2=" tw-font-bold tw-text-h6Copy1 tw-leading-[2.1rem]  "
            text3="Footprint"
            textClass3=" tw-leading-[1.4rem]"
            textParentClass="!tw-pt-0"
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

export default SheetFoundationFacts;
