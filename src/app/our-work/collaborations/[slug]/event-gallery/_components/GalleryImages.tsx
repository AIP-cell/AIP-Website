"use client";
import { TGalleryImages } from "@/api/type";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
import FadeInAnimation from "@/components/animations/FadeInAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import { StorageUrl } from "@/utils/BaseUrl";
import dayjs from "dayjs";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  galleryImages?: TGalleryImages[];
};
const GalleryImages = ({ galleryImages }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dateFormat = (date: string | undefined) => {
    return dayjs(date).format("D MMMM YYYY");
  };
  const next = () => {
    if (galleryImages) {
      if (selectedIndex === galleryImages.length - 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    }
  };
  const previous = () => {
    if (galleryImages) {
      if (selectedIndex === 0) {
        setSelectedIndex(galleryImages?.length - 1);
      } else {
        setSelectedIndex(selectedIndex - 1);
      }
    }
  };
  return (
    <div className="~pt-[6rem]/[6.175rem] ~pb-[5rem]/0">
      {/* <h2 className="~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair !text-center w-full ~pb-[1.25rem]/[5rem]">
        Images
      </h2> */}
      <TextStaggerAnimation
        text="Images"
        className="~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair !text-center w-full ~pb-[1.25rem]/[5rem]"
      />
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="absolute bottom-[-2rem] md:bottom-auto gap-[1.25rem] w-full flex justify-center md:justify-between">
          <ButtonAnimation
            onClick={previous}
            className="  text-white leading-[22.4px] font-inter bg-darkPurple rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl py-[1.15rem] px-[0.92rem]"
          >
            <LeftSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
          </ButtonAnimation>
          <ButtonAnimation
            onClick={next}
            className="  text-white  leading-[22.4px] font-inter bg-darkPurple rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem]"
          >
            <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
          </ButtonAnimation>
        </div>
        <div>
          <FadeInAnimation delay={0.2}>
            <div className="relative  ~w-[21.8rem]/[51.25rem] ~h-[14.3rem]/[34.167rem] rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src={StorageUrl + galleryImages?.at(selectedIndex)?.image}
                alt=""
                fill
                className="object-cover z-10"
              />
            </div>
          </FadeInAnimation>
          <div className="flex flex-col md:flex-row ~w-[21.8rem]/[51.25rem] justify-between ~gap-[0.25rem]/[3rem] ~pt-[1rem]/[0.75rem]">
            <div className="leading-[1.4rem] font-bold  text-midGray md:w-[80%]">
              <p className="">
                {galleryImages?.at(selectedIndex)?.title}
              </p>
            </div>
            <p className="leading-[1.4rem] text-midGray md:w-[20%] md:text-right">
              {dateFormat(galleryImages?.at(selectedIndex)?.date)}
            </p>
          </div>
        </div>
        <div className="flex overflow-x-auto no-scrollbar w-full ~gap-[1.125rem]/[1.25rem] ~pt-[1.5rem]/[1.761rem] ~pb-[2rem]/[9.519rem]  items-center">
          {galleryImages?.map(
            (items, i) =>
              i != selectedIndex && (
                <CardAnimation index={i} delay={0.2} key={i}>
                  <div
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className="relative ~size-[4.6rem]/[11.875rem] rounded-xl overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={StorageUrl + items.image}
                      alt=""
                      fill
                      className="object-cover "
                    />
                  </div>
                </CardAnimation>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
