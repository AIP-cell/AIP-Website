import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import Wave from "react-wavify";

const OurOfferingHeroSection = () => {
  return (
    <div className="relative w-full ">
      <div className="absolute  inset-0 ">
        <Wave
          fill="#F5B195"
          paused={false}
          className="h-[--h] !block"
          options={{
            // height:40,
            amplitude: 60,
            speed: 0.15,
            points: 2,
          }}
        >
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#F5B195" />
            <stop offset="90%" stopColor="#F7E0A1" />
          </linearGradient>
        </Wave>
        <div className="h-[calc(100%-var(--h)*2)] bg-[#F5B195]"></div>
        <Wave
          fill="#F5B195"
          paused={false}
          className="h-[--h] rotate-180 !block"
          options={{
            // height:40,
            amplitude: 60,
            speed: 0.15,
            points: 3,
          }}
        >
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#F5B195" />
            <stop offset="90%" stopColor="#F7E0A1" />
          </linearGradient>
        </Wave>
      </div>
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="Our Work"
          linkOne="#"
          textTwo="What We Do"
          linkTwo="/our-work/what-we-do"
        />
      </div>

      <div className="relative">
        <Wave
          fill="#faecc894"
          paused={false}
          className="h-[--h] !block"
          options={{
            amplitude: 60,
            speed: 0.15,
            points: 3,
          }}
        />
        <div className=" bg-[#faecc894] ~pt-[3rem]/[6.25rem] ~pb-[3rem]/[7.6rem] w-full ">
          <div className="container mx-auto flex justify-center flex-col items-center relative z-50 ~px-5/[14.375rem] ">
            <TextStaggerAnimation
              text="Philanthropy is what it does."
              className="~leading-[1.129rem]/[1.29rem] ~text-h9Copy5/h9Copy4 uppercase font-inter text-lightPeach/60 font-semibold"
            />
            <WordStaggerAnimation
              text="AIP is sector, organisation and method agnostic.<br> We work across a range of causes and methods <br> which align with philanthropists' goals. This <br> tailored approach allows us to meet the unique <br> needs of each philanthropist and empower them <br> to create meaningful change."
              className="hidden md:block pt-[1.25rem] md:tracking-[-1px] text-center ~text-h7Copy3/h4 ~leading-[1.788rem]/[2.6rem] font-playFair text-gray80"
            />
            <WordStaggerAnimation
              text="AIP is sector, organisation and method agnostic. We work across a range of causes and methods which align with philanthropists' goals. This tailored approach allows us to meet the unique needs of each philanthropist and empower them to create meaningful change."
              className="block md:hidden pt-[1.25rem] md:tracking-[-1px] text-center ~text-h7Copy3/h4 ~leading-[1.788rem]/[2.6rem] font-playFair text-gray80"
            />
          </div>
        </div>
        <Wave
          fill="#faecc894"
          paused={false}
          className="h-[--h] rotate-180 !block"
          options={{
            amplitude: 60,
            speed: 0.15,
            points: 4,
          }}
        />
      </div>
    </div>
  );
};

export default OurOfferingHeroSection;
