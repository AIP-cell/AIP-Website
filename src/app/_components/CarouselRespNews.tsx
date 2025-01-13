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
const CarouselRespNews = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const previous = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector("div");
      //   console.log("card prev::", card);
      if (card) {
        const cardWidth = card.offsetWidth;
        // console.log("cardWidth::", cardWidth);
        carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  const next = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector("div");
      //   console.log("card next::", card);
      if (card) {
        const cardWidth = card.offsetWidth;
        carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };
  return (
    <div className="flex md:hidden flex-col relative items-center">
      <div className="absolute top-[-17rem] right-[7rem] hidden   xl:flex justify-center gap-[1.25rem] ">
        <button
          onClick={previous}
          className="  text-white leading-[22.4px] font-inter bg-darkPurple rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl py-[1.15rem] px-[0.92rem]"
        >
          <LeftSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
        </button>
        <button
          onClick={next}
          className=" text-white leading-[22.4px] font-inter bg-darkPurple rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem]"
        >
          <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
        </button>
      </div>
      <div
        ref={carouselRef}
        className="~/lg:~px-[1.25rem]/[18.5rem] flex gap-[1.25rem] pt-[2.5rem] snap-x snap-mandatory overflow-x-scroll no-scrollbar w-full"
      >
        {newsData.map((items, i) => (
          <NewsCard key={i} src={items.src} text={items.text} index={i} />
        ))}
      </div>
      {/* <OutlineButton
        buttonClassName="!rounded-full !w-fit mt-[2.5rem]"
        className=" !px-[1.75rem]  py-[0.75rem] "
        text="Read More"
      /> */}
      <div className=" pt-[2rem] flex justify-center xl:hidden gap-[1.25rem] ">
        <button
          onClick={previous}
          className="  text-white leading-[22.4px] font-inter bg-darkPurple rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl py-[1.15rem] px-[0.92rem]"
        >
          <LeftSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
        </button>
        <button
          onClick={next}
          className=" text-white leading-[22.4px] font-inter bg-darkPurple rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem]"
        >
          <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
        </button>
      </div>
    </div>
  );
};
export default CarouselRespNews;
