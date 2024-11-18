import OvalPurple from "@/components/ovals/OvalPurple";
import Image from "next/image";
import React from "react";
import Bg from "@public/svg/wavePeachRight.svg";
import SmBg from "@public/svg/home/smMemberBg.svg";
import OvalPurpleSvg from "@/components/svg/OvalPurpleSvg";

const Members = () => {
  return (
    <div className=" tw-relative tw-w-full">
      <Image
        src={Bg}
        alt=""
        className="tw-hidden lg:tw-block tw-object-cover tw-absolute tw-w-full tw-bottom-[-10.5rem]"
      />
      <div className=" container tw-mx-auto ~tw-pt-[5rem]/[13.25rem]">
        <div className="tw-relative tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-h-[120vh]  ~tw-gap-[2rem]/0">
          <div className=" tw-w-full md:tw-w-[65%] ~tw-pl-[1.25rem]/[7.8rem] ~tw-pr-[1.25rem]/0">
            <h2 className="~tw-text-h4/h2  tw-font-playFair tw-text-gray50 ~tw-leading-[2.6rem]/[3.3rem]">
              Accelerate Indian
            </h2>
            <h2 className="~tw-text-h4/h2  tw-font-playFair tw-text-gray50 ~tw-leading-[2.6rem]/[3.3rem] ">
              Philanthropy is a peer network set up
              <span className="tw-text-textPurple tw-font-playFairItalic">
                &nbsp;by philanthropists,
              </span>
            </h2>
            <h2 className="~tw-text-h4/h2 tw-font-playFair tw-text-gray50 ~tw-leading-[2.6rem]/[3.3rem] ">
              <span className="tw-text-textPurple tw-font-playFairItalic">
                for philanthropists
              </span>
              &nbsp;to support their giving efforts.
            </h2>
          </div>
          {/* <OvalPurpleSvg className="-top-[4rem] right-[11.85rem]"/> */}
          <div className="tw-w-full md:tw-w-[35%] tw-relative">
            <Image
              src={SmBg}
              alt=""
              className="tw-block lg:tw-hidden tw-object-cover tw-absolute tw-w-full tw-bottom-[-32rem]"
            />
            <OvalPurple
              sizeClass="~tw-size-[13rem]/[17.3rem]"
              textClass1="tw-text-h3"
              textClass2="tw-text-h9Copy4"
              text1="4"
              text2="Core Founders"
              mainClass=" tw-absolute ~tw-top-0/[-4rem] ~tw-left-0/[4.7rem] "
            />
            <OvalPurple
              sizeClass="~tw-size-[13rem]/[17.3rem]"
              textClass1="tw-text-h3"
              textClass2="tw-text-h9Copy4"
              text1="31"
              text2="Founders"
              mainClass=" tw-absolute ~tw-top-[6.75rem]/[15.5rem] tw-right-0 md:tw-right-auto  md:tw-left-[10.25rem]"
            />
            <OvalPurple
              sizeClass="~tw-size-[13rem]/[17.3rem]"
              textClass1="tw-text-h3"
              textClass2="tw-text-h9Copy4"
              text1="150 +"
              text2="Members"
              mainClass=" tw-absolute ~tw-top-[14.3rem]/[20rem] tw-left-0 md:tw-left-auto md:tw-right-[26rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
