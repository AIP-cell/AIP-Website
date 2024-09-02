import OvalPurple from "@/components/ovals/OvalPurple";
import Image from "next/image";
import React from "react";
import Bg from "@public/svg/wavePeachRight.svg";
import OvalPurpleSvg from "@/components/svg/OvalPurpleSvg";

const Members = () => {
  return (
    <div className="bg-container tw-relative tw-mx-auto">
      <Image
        src={Bg}
        alt=""
        className="tw-object-cover tw-absolute tw-w-full tw-bottom-[-10.5rem]"
      />
      <div className=" container tw-mx-auto tw-pt-[13.25rem]">
        <div className="tw-relative tw-h-[120vh]">
          {/* <OvalPurpleSvg className="-top-[4rem] right-[11.85rem]"/> */}
          <OvalPurple
            sizeClass="tw-size-[17.3rem]"
            textClass1="tw-text-h3"
            textClass2="tw-text-h9Copy4"
            text1="4"
            text2="Core Founders"
            mainClass=" tw-absolute tw--top-[4rem] tw-right-[11.85rem]"
          />
          <OvalPurple
            sizeClass="tw-size-[17.3rem]"
            textClass1="tw-text-h3"
            textClass2="tw-text-h9Copy4"
            text1="31"
            text2="Founders"
            mainClass=" tw-absolute tw-top-[15.5rem] tw-right-[6.48rem]"
          />
          <OvalPurple
            sizeClass="tw-size-[17.3rem]"
            textClass1="tw-text-h3"
            textClass2="tw-text-h9Copy4"
            text1="150 +"
            text2="Members"
            mainClass=" tw-absolute tw-top-[20rem] tw-right-[26rem]"
          />
          <div className="tw-pl-[7.8rem]">
            <h2 className="tw-text-h2 tw-w-[38rem] tw-font-playFair tw-text-gray50 tw-leading-[3.3rem] ">
              Accelerate Indian Philanthropy is a peer network set up
              <span className="tw-text-textPurple tw-font-playFairItalic">
                &nbsp;by philanthropists,for philanthropists
              </span>
              &nbsp;to support their giving efforts.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
