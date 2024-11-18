import GalleryVideo from "@/components/cards/GalleryVideo";
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import React from "react";

const VideoArray = [
  {
    src: "/images/galleryVideoThumbnail.png",
    desc: "Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
  {
    src: "/images/galleryVideoThumbnail.png",
    desc: "Amitabh at Systemic Impact Exemplars launch",
    desc2: "Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
];

const GalleryVideos = () => {
  return (
    <div className="tw-pt-[5.688rem]">
      <div className="tw-relative tw-flex tw-items-center tw-w-full">
        <h2 className="tw-text-h2 tw-text-gray80 tw-leading-[3.3rem] tw-font-playFair !tw-text-center tw-w-full">
          Videos
        </h2>
        <div className=" tw-absolute tw-right-0  tw-flex tw-justify-end tw-gap-[1.5rem] tw-w-fit">
          <button className="  tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]">
            <LeftSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
          </button>
          <button className=" tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]">
            <RightSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
          </button>
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-2 tw-gap-[1.248rem] tw-pt-[4.997rem]">
        {VideoArray.map((video, index) => (
          <GalleryVideo
            key={index}
            src={video.src}
            desc={video.desc}
            ddmmyy={video.ddmmyy}
            desc2={video.desc2}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryVideos;
