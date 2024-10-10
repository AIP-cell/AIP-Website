"use client";
import { useRef } from "react";

import NewsCard from "@/components/cards/NewsCard";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";

const newsData = [
  {
    src: "/images/news/newsDemo.png",
    text: "An ugam is a starting point from where river begins.",
  },
  {
    src: "/images/news/newsDemo.png",
    text: "An ugam is a starting point from where river begins.",
  },
  {
    src: "/images/news/newsDemo.png",
    text: "An ugam is a starting point from where river begins.",
  },
];
const CarouselNews = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const previous = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector("div");
      if (card) {
        const cardWidth = card.offsetWidth;
        console.log("cardWidth::", cardWidth);
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
  return (
    <div className="tw-flex tw-flex-col tw-relative">
      <div className="tw-absolute tw-top-[-5rem] tw-right-[7rem] tw-hidden  tw-pt-[2rem] lg:tw-flex tw-justify-center tw-gap-[1.25rem] ">
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
      <div
        ref={carouselRef}
        className="~tw-px-[1.25rem]/0 tw-flex tw-gap-[1.25rem] tw-pt-[2.5rem] tw-snap-x tw-snap-mandatory tw-overflow-x-scroll no-scrollbar "
      >
        {newsData.map((items, i) => (
          <NewsCard key={i} src={items.src} text={items.text} />
        ))}
      </div>
      <div className=" tw-pt-[2rem] tw-flex tw-justify-center lg:tw-hidden tw-gap-[1.25rem] ">
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
    </div>
  );
};
export default CarouselNews;
