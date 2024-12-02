"use client";
import MediaCard from "@/components/cards/MediaCard";
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import React from "react";

const mediaArray = [
  {
    title: "Lorem ipsum dolor sit amet, ",
    desc: "Unique Approaches Towards Solving India’s Development Challenges by identifying and learning from organisations with systems change.",
    ddmmyy: "11 Jul 2024",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    desc: "This report is the result of a collaborative effort between Accelerate Indian Philanthropy (AIP) and the Boston Consulting Group (BCG).",
    ddmmyy: "11 Jul 2024",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus imperdiet, neque at consequat malesuada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus imperdiet, neque at consequat",
    ddmmyy: "11 Jul 2024",
  },
];
const Media = () => {
  return (
    <div className="tw-pt-[7.53rem]">
      <div className="tw-relative container tw-mx-auto">
        <div className="tw-absolute tw-flex tw-gap-[1.25rem] tw-top-0 tw-right-0">
          <button
            // onClick={() => {}}
            className="  tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]"
          >
            <LeftSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
            {/* <Image src={LeftArrow} alt="left-arrow" fill className="" /> */}
          </button>
          <button
            // onClick={() => {}}
            className=" tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]"
          >
            <RightSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
            {/* <Image src={LeftArrow} alt="left-arrow" fill className="" /> */}
          </button>
        </div>
        <div className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
          In the Media
        </div>
        <div className="tw-flex tw-gap-[4.5rem] tw-justify-center ">
          {mediaArray.map((media, i) => (
            <MediaCard
              key={i}
              title={media.title}
              desc={media.desc}
              ddmmyy={media.ddmmyy}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
