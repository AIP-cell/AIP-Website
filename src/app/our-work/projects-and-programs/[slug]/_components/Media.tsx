"use client";
import { TMedia } from "@/api/type";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
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
type Props = {
  media: TMedia[];
};
const Media = ({ media }: Props) => {
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
  const mediaArrayLength = media.length;
  return (
    <div className="~pt-[5rem]/[7.53rem] ">
      <div className="relative container mx-auto ~pb-[1.988rem]/0">
        <div className="absolute flex z-10 gap-[1.25rem] w-full md:w-auto justify-center md:justify-normal bottom-[-2rem] md:bottom-auto md:top-0 ~right-0/[1rem]">
          <ButtonAnimation
            onClick={previous}
            className="  text-white leading-[22.4px] font-inter bg-darkPurple rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl py-[1.15rem] px-[0.92rem]"
          >
            <LeftSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
          </ButtonAnimation>
          <ButtonAnimation
            onClick={next}
            className=" text-white leading-[22.4px] font-inter bg-darkPurple rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem]"
          >
            <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
          </ButtonAnimation>
        </div>
        <div className="text-center font-playFair ~pb-[2.5rem]/20 ~leading-[2.6rem]/[3.3rem] tracking-[-.04rem] ~text-h4/h2 text-gray80">
          In the Media
        </div>
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory overflow-y-hidden  w-full overflow-x-scroll no-scrollbar  ~gap-[1.25rem]/[4.5rem] lg:justify-center "
        >
          {media?.map((media, i) => (
            <CardAnimation index={i} delay={0.2} key={i}>
              <MediaCard
                mediaArrayLength={mediaArrayLength}
                key={i}
                image={media?.image}
                index={i}
                link={media?.link}
                title={media?.title}
                desc={media?.description}
                ddmmyy={media?.date}
              />
            </CardAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
