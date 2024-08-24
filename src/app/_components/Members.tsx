import OvalPurple from "@/components/ovals/OvalPurple";
import Image from "next/image";
import React from "react";
import Bg from "../../../public/svg/membersBg.svg";
import OvalPurpleSvg from "@/components/svg/OvalPurpleSvg";

const Members = () => {
  return (
    <div className="tw-overflow-hidden container tw-mx-auto tw-pt-[13.25rem]">
      <div className="tw-relative tw-h-[120vh]">
        <Image
          src={Bg}
          alt=""
          className="tw-object-cover tw-absolute tw-inset-x-0 tw--bottom-[5rem]"
        />
        {/* <OvalPurpleSvg className="-top-[4rem] right-[11.85rem]"/> */}
        <OvalPurple
          textClass1="tw-text-h3Heading3"
          textClass2="tw-text-h9BodyCopy4"
          title="4"
          desc="Core Founders"
          Class=" tw-absolute tw--top-[4rem] tw-right-[11.85rem]"
        />
        <OvalPurple
          textClass1="tw-text-h3Heading3"
          textClass2="tw-text-h9BodyCopy4"
          title="31"
          desc="Founders"
          Class=" tw-absolute tw-top-[15.5rem] tw-right-[6.48rem]"
        />
        <OvalPurple
          textClass1="tw-text-h3Heading3"
          textClass2="tw-text-h9BodyCopy4"
          title="150 +"
          desc="Members"
          Class=" tw-absolute tw-top-[20rem] tw-right-[26rem]"
        />
        {/* <div className=""> */}
        <h2 className="tw-text-h2Heading2 tw-w-[38rem] tw-text-gray50 tw-leading-[52.8px] tw-pl-[7.8rem]">
          Accelerate Indian Philanthropy is a peer network set up
          <i className="tw-text-textPurple">
            by philanthropists,for philanthropists
          </i>
          to support their giving efforts.
        </h2>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Members;
