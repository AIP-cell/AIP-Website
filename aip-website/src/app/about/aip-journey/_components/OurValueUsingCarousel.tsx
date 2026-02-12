"use client";
import OvalPurple from "@/components/ovals/OvalPurple";
import Bg from "@public/svg/wavePeachLeft.svg";
import SmBg from "@public/svg/about/aip-journey/smValueBg.svg";
import Image from "next/image";
import cn from "@/utils/tailwind";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useMediaQuery } from "react-responsive";
import useClient from "@/hooks/useClient";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import { TOurValues } from "@/api/type";
import { useEffect, useState } from "react";

type Props = {
  ourValueData: TOurValues[];
};
const OurValueUsingCarousel = ({ ourValueData }: Props) => {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, isDesktop]);
  const client = useClient();
  if (!client) return;

  const ourValues: Partial<TOurValues>[] = ourValueData;
  return (
    <>
      <div className="w-full relative ">
        <Image
          src={Bg}
          alt="bg"
          className=" hidden lg:block absolute -top-[7rem] h-[60rem]  w-[400rem] "
        />
        <Image
          src={SmBg}
          alt="sm-bg"
          className=" block lg:hidden absolute top-[9rem] w-full "
        />
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setApi}
          className="~pt-[5rem]/[10rem] relative container mx-auto w-full items-center"
        >
          <div className="flex flex-col justify-center items-center ">
            <TextStaggerAnimation
              text="Our <color>Values</color>"
              className="~text-h4/h2 text-darkGray font-playFair leading-[52.8px]"
            />
          </div>
          <div className="relative">
            <CarouselContent className="~pt-[2.5rem]/[5rem] relative ">
              {ourValues.map((items: Partial<TOurValues>, i) => (
                <CarouselItem
                  key={i}
                  className="basis:1/1 xl:!basis-1/3 justify-center gap-[1.25rem] flex "
                >
                  <div
                    className={cn(
                      " flex justify-center  ~size-[14.25rem]/[15.4rem] transition-all duration-200 scale-100",
                      {
                        "~size-[14.25rem]/[18.4rem] !scale-110 ": current === i,
                      }
                    )}
                  >
                    <OvalPurple
                      sizeClass={cn("~size-[14.25rem]/[15.4rem]", {
                        "~size-[14.25rem]/[18.4rem] !scale-125 ": current === i,
                      })}
                      mainClass=" snap-center "
                      text1={items?.title1}
                      text2={items?.title2}
                      textClass1="~text-h5/h7 font-playFair text-purple10 ~leading-[1.75rem]/[2.6rem]"
                      textClass2=" font-playFairItalic ~text-h5/h7 ~leading-[1.75rem]/[2.6rem]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute ~bottom-[6rem]/[-8.3rem] ~px-[0.5rem]/[2rem] z-[50] flex w-full justify-between">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <div className=" justify-center gap-[1.25rem] ~pt-[1.25rem]/[5rem] pb-[5rem] relative items-center">
            <div className="flex  w-full">
              <div className=" w-full flex justify-center shrink-0  container mx-auto ">
                <div className="relative ~w-[16.125rem]/[38rem] flex justify-center items-center">
                  <p className=" text-center ~text-h9Copy5/h9Copy4 text-midGray ~h-[12rem]/[10rem] line-clamp-[10] ~leading-[1.225rem]/[1.4rem]">
                    {ourValues.at(current)?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:hidden flex justify-center w-full pt-[2rem]">
              <div className=" w-[4.5rem] flex gap-[0.5rem] ">
                {ourValues.map((_, index: number) => (
                  <div
                    key={index}
                    className={cn(
                      " rounded-full h-[0.5rem] bg-[#E1CCED80] basis-1/5",
                      { "basis-2/4 bg-textPurple": index === current }
                    )}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default OurValueUsingCarousel;
