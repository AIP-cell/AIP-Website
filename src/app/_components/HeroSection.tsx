import Image from "next/image";
import HeroBg from "@public/svg/heroBg.svg";
import SmHeroBg from "@public/svg/home/smHeroPurpleBg.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import React from "react";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import FadeInAnimation from "@/components/animations/FadeInAnimation";

const HeroSection = () => {
  return (
    <div className=" w-full relative ">
      {/* <HomepageHeroSvg className="hidden lg:block absolute top-[-2rem] w-full  h-[46rem]  object-fill"/> */}
      <FadeInAnimation
        delay={0.2}
        x1={-20}
        x2={0}
        duration={1}
        className="hidden lg:block absolute top-[-2rem] w-full"
      >
        <Image
          src={HeroBg}
          alt=""
          className="hidden lg:block absolute top-[-2rem] w-full  h-[46rem]  object-fill"
        />
      </FadeInAnimation>
      <div className="container mx-auto relative md:~h-[50rem]/[38rem] h-[40rem] ">
        <div className="hidden xl:block absolute top-[3.125rem] left-[1.25rem]">
          <FadeInAnimation delay={0.2} duration={1}>
            <Image src={OvalPeach} alt="" className="size-[11.875rem]" />
          </FadeInAnimation>
        </div>
        <div className="flex flex-col xl:flex-row ~gap-[3.25rem]/[1rem] items-center  ~pt-[2.5rem]/[5.2rem] ~pl-[1rem]/[7.8rem] ~pr-[1rem]/[5rem] relative">
          {/* <div className="relative tracking-[-1px] shrink-0 w-auto xl:w-[38.125rem] z-[1000] ~text-h4/h1 font-playFair ~leading-[2.6rem]/[3.7rem] px-[0.6rem] md:px-0  text-gray80">
            AIP is a peer network that
            <span className=" font-playFairItalic text-textPurple">
              &nbsp;channels the flow&nbsp;
            </span>
            to accelerate strategic giving in India - a movement
            <span className="text-textPurple font-playFairItalic">
              &nbsp;by and for philanthropists
            </span>
          </div> */}
          <WordStaggerAnimation
            text="Accelerate Indian 
Philanthropy is a peer network set up  <color>by philanthropists, 
for philanthropists </color> to support their giving efforts."
            className="relative tracking-[-1px] shrink-0 w-auto xl:w-[38.125rem] z-[1000] ~text-h4/h1 font-playFair ~leading-[2.6rem]/[3.7rem] px-[0.6rem] md:px-0  text-gray80"
          />
          <FadeInAnimation
            delay={0.1}
            y1={-20}
            y2={0}
            duration={1}
            className="block lg:hidden absolute ~/md:~bottom-0/[-12rem]  inset-x-0"
          >
            <Image
              src={SmHeroBg}
              alt="sm-hero-bg"
              className="block lg:hidden absolute ~/md:~bottom-0/[-12rem]  w-[100rem] inset-x-0 object-cover"
            />
          </FadeInAnimation>
          <FadeInAnimation duration={0.7} delay={0.1}>
            <div className="relative ~w-[19rem]/[29.6rem] ~h-[18rem]/[27.8rem] shrink-0 z-[100]">
              <div className="absolute inset-0 z-10">
                <div className="relative ~w-[19.2rem]/[27.846rem] ~h-[16rem]/[29.17rem]">
                  <Image
                    src="/svg/ellipsePeach.svg"
                    alt=""
                    fill
                    className="z-[-2] "
                  />
                </div>
              </div>
              <Image src="/svg/heroImage.svg" alt="" fill className="z-20" />
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
