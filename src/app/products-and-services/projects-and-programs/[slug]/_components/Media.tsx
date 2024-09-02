"use client";
import MediaCard from "@/components/cards/MediaCard";
import LeftSlickArrow from "@/components/svg/LeftSlickArrow";
import RightSlickArrow from "@/components/svg/RightSlickArrow";
import React from "react";

const Media = () => {
  return (
    <div className="tw-pt-[7.53rem]">
      <div className="tw-relative container tw-mx-auto">
        <div className="tw-absolute tw-flex tw-gap-[1.25rem] tw-top-0 tw-right-0">
          <button
            // onClick={() => {}}
            className="  tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]"
          >
            <LeftSlickArrow className="tw-w-[1rem] tw-h-[0.57rem]" />
            {/* <Image src={LeftArrow} alt="left-arrow" fill className="" /> */}
          </button>
          <button
            // onClick={() => {}}
            className=" tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]"
          >
            <RightSlickArrow className="tw-w-[1rem] tw-h-[0.57rem]" />
            {/* <Image src={LeftArrow} alt="left-arrow" fill className="" /> */}
          </button>
        </div>
        <div className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
          In the Media
        </div>
        <div className="tw-flex tw-gap-[4.5rem] tw-justify-center">
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
      </div>
    </div>
  );
};

export default Media;
