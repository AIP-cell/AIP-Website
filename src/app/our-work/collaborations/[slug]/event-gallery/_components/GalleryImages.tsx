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
    <div className="~pt-[5rem]/[6.175rem] ~pb-[5rem]/0">
      <h2 className="~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair !text-center w-full ~pb-[1.25rem]/[5rem]">
        Images
      </h2>
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="absolute bottom-[-2rem] md:bottom-auto gap-[1.25rem] w-full flex justify-center md:justify-between">
          <button className="  text-white leading-[22.4px] font-inter bg-darkPurple rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl py-[1.15rem] px-[0.92rem]">
            <LeftSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
          </button>
          <button className="  text-white  leading-[22.4px] font-inter bg-darkPurple rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem]">
            <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
          </button>
        </div>
        <div>
          <div className="relative  ~w-[21.8rem]/[51.25rem] ~h-[14.3rem]/[34.167rem] rounded-xl overflow-hidden flex items-center justify-center">
            <Image
              src={ImageArray.at(selectedIndex)!.src}
              alt=""
              fill
              className="object-cover z-10"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between ~gap-[0.25rem]/[3rem] ~pt-[1rem]/[0.75rem]">
            <div className="leading-[1.4rem] font-bold  text-midGray">
              <p className="">{ImageArray.at(selectedIndex)!.desc}</p>
            </div>
            <p className="leading-[1.4rem] text-midGray">
              {ImageArray.at(selectedIndex)!.ddmmyy}
            </p>
          </div>
        </div>
        <div className="flex overflow-x-auto no-scrollbar ~gap-[1.125rem]/[1.25rem] ~pt-[1.5rem]/[1.761rem] ~pb-[2rem]/[9.519rem] md:justify-center items-center">
          {ImageArray.map((items, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className="relative ~size-[4.6rem]/[11.875rem] rounded-xl overflow-hidden"
            >
              <Image src={items.src} alt="" fill className="object-cover " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
