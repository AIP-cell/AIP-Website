"use client";
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

const GalleryVideos = () => {
  const [change, setChange] = useState<number>(0);

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const itemsPerSlide = isDesktop ? 2 : 1;
  const arrayLength = VideoArray.length;
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
    <div className="~tw-mt-[5rem]/[5.688rem] tw-relative ~tw-pb-[2rem]/0">
      <div className=" tw-flex tw-items-center tw-w-full">
        <h2 className="~tw-text-h4/h2 tw-text-gray80 ~tw-leading-[2.6rem]/[3.3rem] tw-font-playFair !tw-text-center tw-w-full">
          Videos
        </h2>
      </div>
      <div className=" tw-absolute tw-bottom-0 tw-w-full  md:tw-w-auto md:tw-bottom-auto md:tw-top-0 tw-right-0  tw-flex tw-justify-center md:tw-justify-end tw-gap-[1.5rem] ">
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
      <div className="tw-flex  tw-overflow-x-auto no-scrollbar lg:tw-justify-center  tw-gap-[1.248rem] ~tw-pt-5/[4.997rem]">
        {VideoArray.slice(change, change + itemsPerSlide).map(
          (video, index) => {
            return (
              <GalleryVideo
                key={index}
                src={video.src}
                desc={video.desc}
                ddmmyy={video.ddmmyy}
                desc2={video.desc2}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default GalleryVideos;
