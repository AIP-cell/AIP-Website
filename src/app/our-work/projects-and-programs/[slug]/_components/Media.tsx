"use client";
import MediaCard from "@/components/cards/MediaCard";
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import React, { useRef } from "react";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const previous = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector("div");
      if (card) {
        const cardWidth = card.offsetWidth;
        carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  const next = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector("div");
      if (card) {
        const cardWidth = card.offsetWidth;
        carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };
  const mediaArrayLength = mediaArray.length;
  return (
    <div className="~tw-pt-[5rem]/[7.53rem] ">
      <div className="tw-relative container tw-mx-auto ~tw-pb-[1.988rem]/0">
        <div className="tw-absolute tw-flex tw-z-10 tw-gap-[1.25rem] tw-w-full md:tw-w-auto tw-justify-center md:tw-justify-normal tw-bottom-[-2rem] md:tw-bottom-auto md:tw-top-0 tw-right-[1rem]">
          <button
            onClick={previous}
            className="  tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]"
          >
            <LeftSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
          </button>
          <button
            onClick={next}
            className=" tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]"
          >
            <RightSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
          </button>
        </div>
        <div className="tw-text-center tw-font-playFair ~tw-pb-[2.5rem]/20 ~tw-leading-[2.6rem]/[3.3rem] tw-tracking-[-.04rem] ~tw-text-h4/h2 tw-text-gray80">
          In the Media
        </div>
        <div
          ref={carouselRef}
          className="tw-flex tw-snap-x tw-snap-mandatory tw-pointer-events-none tw-w-full tw-overflow-x-scroll no-scrollbar  ~tw-gap-[1.25rem]/[4.5rem] lg:tw-justify-center "
        >
          {mediaArray.map((media, i) => (
            <MediaCard
              mediaArrayLength={mediaArrayLength}
              key={i}
              index={i}
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
