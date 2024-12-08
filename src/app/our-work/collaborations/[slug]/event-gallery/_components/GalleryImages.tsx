"use client"
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import Image from "next/image";
import React, { useState } from "react";

const ImageArray = [
  {
    src: "/images/galleryVideoThumbnail.png",
    desc: "0Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
  {
    src: "/images/sample.png",
    desc: "1Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
  {
    src: "/images/aSample.png",
    desc: "2Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
  {
    src: "/images/galleryVideoThumbnail.png",
    desc: "3Amitabh at Systemic Impact Exemplars launch",
    ddmmyy: "11 Jul 2024",
  },
];
const GalleryImages = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="~tw-pt-[5rem]/[6.175rem] ~tw-pb-[5rem]/0">
      <h2 className="~tw-text-h4/h2 tw-text-gray80 ~tw-leading-[2.6rem]/[3.3rem] tw-font-playFair !tw-text-center tw-w-full ~tw-pb-[1.25rem]/[5rem]">
        Images
      </h2>
      <div className="tw-relative tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center">
        <div className="tw-absolute tw-bottom-[-2rem] md:tw-bottom-auto tw-gap-[1.25rem] tw-w-full tw-flex tw-justify-center md:tw-justify-between">
          <button className="  tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]">
            <LeftSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
          </button>
          <button className="  tw-text-white  tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]">
            <RightSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
          </button>
        </div>
        <div>
          <div className="tw-relative  ~tw-w-[21.8rem]/[51.25rem] ~tw-h-[14.3rem]/[34.167rem] tw-rounded-xl tw-overflow-hidden tw-flex tw-items-center tw-justify-center">
            <Image
              src={ImageArray.at(selectedIndex)!.src}
              alt=""
              fill
              className="tw-object-cover tw-z-10"
            />
          </div>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between ~tw-gap-[0.25rem]/[3rem] ~tw-pt-[1rem]/[0.75rem]">
            <div className="tw-leading-[1.4rem] tw-font-bold  tw-text-midGray">
              <p className="">{ImageArray.at(selectedIndex)!.desc}</p>
            </div>
            <p className="tw-leading-[1.4rem] tw-text-midGray">
              {ImageArray.at(selectedIndex)!.ddmmyy}
            </p>
          </div>
        </div>
        <div className="tw-flex tw-overflow-x-auto no-scrollbar ~tw-gap-[1.125rem]/[1.25rem] ~tw-pt-[1.5rem]/[1.761rem] ~tw-pb-[2rem]/[9.519rem] md:tw-justify-center tw-items-center">
          {ImageArray.map((items, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className="tw-relative ~tw-size-[4.6rem]/[11.875rem] tw-rounded-xl tw-overflow-hidden"
            >
              <Image src={items.src} alt="" fill className="tw-object-cover " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
