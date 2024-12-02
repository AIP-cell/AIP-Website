import React from "react";
import StoryBg from "@public/svg/home/aipWayBg.svg";
import LeftHomePagePeachCurve from "@public/svg/leftHomePagePeach.svg";
import OvalPeachSvg from "@public/svg/ovalPeach.svg";

import Image from "next/image";
import OvalPurple from "@/components/ovals/OvalPurple";
import OvalPeach from "@/components/ovals/OvalPeach";
const AipWay = () => {
  return (
    <div className="tw-w-full tw-relative">
      <Image
        src={LeftHomePagePeachCurve}
        alt=""
        className="tw-hidden tw-left-0 tw-absolute tw-top-[15rem] ~tw-w-[6.956rem]/[13.125rem] ~tw-h-[37.5rem]/[19.875rem]"
      />
      <Image
        src={StoryBg}
        alt="bg-image"
        className="tw-block tw-absolute ~tw-left-[-6rem]/0 ~tw-top-[1.5rem]/[2rem] ~tw-w-[15rem]/[26rem] ~tw-h-[25rem]/[37.5rem]"
      />
      <OvalPeach
        mainClass="tw-absolute ~tw-top-[7.75rem]/[5rem] tw-flex tw-justify-center tw-w-full md:tw-w-auto md:tw-block ~md:~tw-left-0/[14.093rem]"
        text1="The"
        textClass1="~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem] !tw-text-midGray !tw-font-playFair !text-center"
        sizeClass="~tw-size-[17rem]/[24.166rem]"
        text2="AIP Way"
        textClass2=" ~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem] !tw-text-textPurple !tw-font-playFairItalic"
      />
      <div className="tw-hidden md:tw-block tw-absolute tw-bottom-[3.125rem] tw-right-[14.366rem]">
        <Image src={OvalPeachSvg} alt="" className="tw-size-[8.726rem]" />
      </div>

      <div className=" ~/md:~tw-pt-[25rem]/[5rem] container tw-mx-auto  tw-relative  tw-flex tw-flex-col tw-justify-center tw-items-end ~tw-pl-[1.75rem]/0  ~md:~tw-pr-[1.75rem]/[16rem]">
        <div className=" ~tw-pt-[2rem]/[5rem]  tw-flex tw-flex-col ~tw-gap-[1.5rem]/[1.625rem]">
          <div className="tw-flex tw-font-playFair tw-font-medium tw-flex-col tw-text-midGray   tw-pr-[5rem] ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.138rem]/[1.4rem]">
            <p> A philanthropist’s wealth is the origin</p>
            <p>and Philanthropy is the river.</p>
          </div>
          <div className="tw-flex tw-flex-col tw-font-playFair tw-font-medium tw-text-midGray  tw-pl-[5rem] ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.138rem]/[1.4rem]">
            <p> When a river flows,</p>
            <p>it gives as much as it can</p>
            <p>To everyone on its way</p>
          </div>

          <div className="tw-flex tw-flex-col tw-font-playFair tw-font-medium tw-pr-[5rem] tw-text-midGray  ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.138rem]/[1.4rem]">
            <p>It nurtures ecosystems;</p>
            <p> connects communities</p> <p>and sculpts the landscape</p>
          </div>

          <div className="tw-flex tw-flex-col tw-font-playFair tw-font-medium tw-pl-[5rem] tw-text-midGray  ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.138rem]/[1.4rem]">
            <p>To enable conversations.</p> <p>To foster understanding.</p>
            <p>That inspires change.</p>
          </div>
          <div className="tw-flex tw-flex-col tw-font-playFair tw-font-medium tw-pr-[5rem] tw-text-midGray  ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.138rem]/[1.4rem]">
            <p>No two rivers are the same;</p>
            <p>No two philanthropists are the same;</p>
            <p>No two journeys are alike.</p>
          </div>

          <div className="tw-relative tw-flex tw-flex-col tw-font-playFair tw-font-medium tw-pl-[5rem] tw-text-midGray  ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.138rem]/[1.4rem]">
            <p>AIP is the gentle uplifting spirit,</p>
            <p>The bank that holds, that shapes it all.</p>
            <p>To form & connect networks.</p> <p>That bridge gaps.</p>
            <p>Taking a philanthropist,</p> <p>From inspiration to impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AipWay;
