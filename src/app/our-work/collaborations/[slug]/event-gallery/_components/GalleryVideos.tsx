"use client";
import { TGalleryVideos } from "@/api/type";
import GalleryVideo from "@/components/cards/GalleryVideo";
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import useClient from "@/hooks/useClient";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const VideoArray = [
  {
    src: "/images/galleryVideoThumbnail.png",
    desc: "0Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
  {
    src: "/images/galleryVideoThumbnail.png",
    desc: "1Amitabh at Systemic Impact Exemplars launch",
    desc2: "Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
  {
    src: "/images/galleryVideoThumbnail.png",
    desc: "2Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
  {
    src: "/images/galleryVideoThumbnail.png",
    desc: "3Amitabh at Systemic Impact Exemplars launch",
    desc2: "Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
];

type Props = {
  galleryVideos: TGalleryVideos[];
};
const GalleryVideos = ({ galleryVideos }: Props) => {
  const [change, setChange] = useState<number>(0);

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const itemsPerSlide = isDesktop ? 2 : 1;
  const arrayLength = galleryVideos.length;
  const previous = () => {
    if (change <= 0) {
      setChange(arrayLength - itemsPerSlide);
    } else setChange(change - itemsPerSlide);
  };
  const next = () => {
    if (change >= arrayLength - itemsPerSlide) {
      setChange(0);
    } else setChange(change + itemsPerSlide);
  };
  const isClient = useClient();
  if (!isClient) {
    return;
  }
  return (
    <div className="~mt-[5rem]/[5.688rem] relative ~pb-[2rem]/0">
      <div className=" flex items-center w-full">
        <h2 className="~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair !text-center w-full">
          Videos
        </h2>
      </div>
      <div className=" absolute bottom-0 w-full  md:w-auto md:bottom-auto md:top-0 right-0  flex justify-center md:justify-end gap-[1.5rem] ">
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
      <div className="flex  overflow-x-auto no-scrollbar lg:justify-center  gap-[1.248rem] ~pt-5/[4.997rem]">
        {galleryVideos
          .slice(change, change + itemsPerSlide)
          .map((video, index) => {
            return (
              <GalleryVideo
                key={index}
                src={video?.video}
                title={video?.title}
                date={video?.date}
                // desc2={video.desc2}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GalleryVideos;
