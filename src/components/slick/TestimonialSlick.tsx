"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ACard from "@/components/cards/aCards/ACard";
import PCard from "@/components/cards/pCards/PCard";
import RightSlickArrowSvg from "../svg/RightSlickArrowSvg";
import LeftSlickArrowSvg from "../svg/LeftSlickArrowSvg";
import { ButtonAnimation } from "../animations/ButtonAnimation";
import cn from "@/utils/tailwind";
import useClient from "@/hooks/useClient";
import { TTestimonials } from "@/api/type";
import { usePathname } from "next/navigation";
import ACardWithPlaySign from "../cards/aCards/ACardWithPlaySign";
import PCardWithPlaySign from "../cards/pCards/PCardWithPlaySign";
type Props = {
  slickArray: TTestimonials[];
};
const TestimonialSlick = ({ slickArray }: Props) => {
  const [change, setChange] = useState<number>(0);
  const pathname = usePathname();
  const playtestimonialCard =
    pathname.includes("careers") || pathname.includes("aip-founder-network");
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const itemsPerSlide = isDesktop ? 2 : 1;
  const arrayLength = slickArray.length;
  const previous = () => {
    if (change <= 0) {
      const remainder = arrayLength % itemsPerSlide;
      const lastIndex =
        remainder === 0 ? arrayLength - itemsPerSlide : arrayLength - remainder;
      setChange(lastIndex);
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
    <div>
      <div className=" ~pt-[2.5rem]/[5rem] container mx-auto">
        <div className="relative  flex justify-center items-center">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-[4.563rem]">
              {slickArray
                .slice(change, change + itemsPerSlide)
                .map((items, i) => {
                  const actualIndex = (change + i) % arrayLength;
                  return (
                    <div key={actualIndex}>
                      {actualIndex % 2 == 0 &&
                        (playtestimonialCard ? (
                          <ACardWithPlaySign
                            key={i}
                            darkText={playtestimonialCard}
                            image={items?.image}
                            name={items?.name}
                            post={items?.designation}
                            linkOrVideo={items?.linkOrVideo}
                            video={items?.video}
                            videoLink={items?.videoLink}
                            desc={items?.description}
                          />
                        ) : (
                          <ACard
                            key={i}
                            image={items?.image}
                            name={items?.name}
                            work={items?.designation}
                            desc={items?.description}
                          />
                        ))}
                      {actualIndex % 2 == 1 &&
                        (playtestimonialCard ? (
                          <PCardWithPlaySign
                            key={i}
                            darkText={true}
                            linkOrVideo={items?.linkOrVideo}
                            video={items?.video}
                            videoLink={items?.videoLink}
                            image={items?.image}
                            name={items?.name}
                            post={items?.designation}
                            desc={items?.description}
                          />
                        ) : (
                          <PCard
                            key={i}
                            image={items?.image}
                            name={items?.name}
                            work={items?.designation}
                            desc={items?.description}
                          />
                        ))}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex gap-[1.25rem] absolute ~/md:~bottom-[-8rem]/[-6rem] lg:bottom-auto lg:top-[9.375rem] justify-center lg:justify-between w-full ~px-0/[7.813rem] z-20">
            <ButtonAnimation
              onClick={next}
              className=" text-white hover:bg-white bg-darkPurple hover:text-darkPurple rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem]"
            >
              <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
            </ButtonAnimation>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center w-full  pt-[3.25rem]">
        <div className=" w-[4.5rem] flex gap-[0.5rem] ">
          {slickArray?.map((_, index: number) => (
            <div
              key={index}
              className={cn(
                " rounded-full h-[0.5rem] bg-[#E1CCED80] basis-1/5",
                { "basis-2/4 bg-textPurple": index === change }
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlick;
