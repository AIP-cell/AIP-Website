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
    <div className="~pb-[5rem]/0 ~pt-[6rem]/[6.175rem]">
      {/* <h2 className="text-gray80 w-full !text-center ~leading-[2.6rem]/[3.3rem] ~pb-[1.25rem]/[5rem] ~text-h4/h2 font-playFair">
        Images
      </h2> */}
      <TextStaggerAnimation
        text="Images"
        className="text-gray80 w-full !text-center ~leading-[2.6rem]/[3.3rem] ~pb-[1.25rem]/[5rem] ~text-h4/h2 font-playFair"
      />
      <div className="flex flex-col justify-center w-full items-center relative">
        <div className="flex md:hidden justify-center w-full absolute bottom-[-2rem] gap-[1.25rem] md:bottom-auto md:justify-between">
          <ButtonAnimation
            onClick={previous}
            className="bg-darkPurple rounded-bl-3xl rounded-br-xl rounded-tl-3xl rounded-tr-xl text-white font-inter leading-[22.4px] px-[0.92rem] py-[1.15rem]"
          >
            <LeftSlickArrowSvg className="h-[0.57rem] w-[1rem]" />
          </ButtonAnimation>
          <ButtonAnimation
            onClick={next}
            className="bg-darkPurple rounded-bl-xl rounded-br-3xl rounded-tl-xl rounded-tr-3xl text-white font-inter leading-[22.4px] px-[0.92rem] py-[1.15rem]"
          >
            <RightSlickArrowSvg className="h-[0.57rem] w-[1rem]" />
          </ButtonAnimation>
        </div>
        <div className="flex w-full flex-col justify-center items-center relative">
          <div className="hidden md:flex justify-center w-full absolute bottom-[-2rem] gap-[1.25rem] md:bottom-auto md:justify-between">
            <ButtonAnimation
              onClick={previous}
              className="bg-darkPurple rounded-bl-3xl rounded-br-xl rounded-tl-3xl rounded-tr-xl text-white font-inter leading-[22.4px] px-[0.92rem] py-[1.15rem]"
            >
              <LeftSlickArrowSvg className="h-[0.57rem] w-[1rem]" />
            </ButtonAnimation>
            <ButtonAnimation
              onClick={next}
              className="bg-darkPurple rounded-bl-xl rounded-br-3xl rounded-tl-xl rounded-tr-3xl text-white font-inter leading-[22.4px] px-[0.92rem] py-[1.15rem]"
            >
              <RightSlickArrowSvg className="h-[0.57rem] w-[1rem]" />
            </ButtonAnimation>
          </div>
          <FadeInAnimation delay={0.2}>
            <div className="justify-center rounded-xl ~h-[14.3rem]/[34.167rem] ~w-[21.8rem]/[51.25rem] items-center overflow-hidden relative">
              <Image
                src={StorageUrl + galleryImages?.at(selectedIndex)?.image}
                alt=""
                fill
                className="object-cover z-10"
              />
            </div>
          </FadeInAnimation>
          <div className="flex flex-col justify-between ~gap-[0.25rem]/[3rem] ~pt-[1rem]/[0.75rem] ~w-[21.8rem]/[51.25rem] md:flex-row">
            <div className="text-midGray font-bold leading-[1.4rem] md:w-[80%]">
              <p className="">{galleryImages?.at(selectedIndex)?.title}</p>
            </div>
            <p className="text-midGray leading-[1.4rem] md:text-right md:w-[20%]">
              {dateFormat(galleryImages?.at(selectedIndex)?.date)}
            </p>
          </div>
        </div>
        <div className="flex w-full ~gap-[1.125rem]/[1.25rem] ~pb-[2rem]/[9.519rem] ~pt-[1.5rem]/[1.761rem] items-center no-scrollbar overflow-x-auto">
          {galleryImages?.map(
            (items, i) =>
              i != selectedIndex && (
                <CardAnimation index={i} delay={0.2} key={i}>
                  <div
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className="rounded-xl ~size-[4.6rem]/[11.875rem] cursor-pointer overflow-hidden relative"
                  >
                    <Image
                      src={StorageUrl + items.image}
                      alt=""
                      fill
                      className="object-cover"
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
