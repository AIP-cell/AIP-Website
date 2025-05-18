"use client";
import { TGalleryVideos } from "@/api/type";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import GalleryVideo from "@/components/cards/GalleryVideo";
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import useClient from "@/hooks/useClient";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

type Props = {
  galleryVideos?: TGalleryVideos[];
};
const GalleryVideos = ({ galleryVideos }: Props) => {
  const [change, setChange] = useState<number>(0);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const itemsPerSlide = isDesktop ? 2 : 1;
  const previous = () => {
    if (galleryVideos) {
      if (change <= 0) {
        setChange(galleryVideos?.length - itemsPerSlide);
      } else setChange(change - itemsPerSlide);
    }
  };
  const next = () => {
    if (galleryVideos) {
      if (change >= galleryVideos?.length - itemsPerSlide) {
        setChange(0);
      } else setChange(change + itemsPerSlide);
    }
  };
  const isClient = useClient();
  if (!isClient) {
    return;
  }
  return (
    <div className="~mt-[5rem]/[5.688rem] relative ~pb-[2rem]/0 ">
      <div className=" flex items-center w-full ">
        <TextStaggerAnimation
          text="Videos"
          className="~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair !text-center w-full"
        />
      </div>
      <div className=" absolute bottom-[-2rem] w-full  md:w-auto md:bottom-auto md:top-0 right-0  flex justify-center md:justify-end gap-[1.5rem] ">
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
      <div className=" grid grid-cols-1 lg:grid-cols-2  md:justify-center  gap-[1.248rem] ~pt-5/[4.997rem]">
        {galleryVideos
          ?.slice(change, change + itemsPerSlide)
          ?.map((video, index) => (
            <CardAnimation delay={0.2} key={index} className="w-full">
              <GalleryVideo
                linkOrVideo={video.linkOrVideo}
                link={video.link}
                video={video?.video}
                key={index}
                title={video?.title}
                date={video?.date}
              />
            </CardAnimation>
          ))}
      </div>
    </div>
  );
};

export default GalleryVideos;
