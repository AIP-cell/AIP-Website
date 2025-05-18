import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import Wave from "react-wavify";

const NpoHeroSection = () => {
  return (
    <div className="relative w-full ">
      <div className="absolute  inset-0 ">
        <Wave
          fill="#91298C"
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
            <stop offset="10%" stopColor="#91298C" />
            <stop offset="90%" stopColor="#224193" />
          </linearGradient>
        </Wave>
        <div className="h-[calc(100%-var(--h)*2)] bg-[#91298C]"></div>
        <Wave
          fill="#91298C"
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
            <stop offset="10%" stopColor="#91298C" />
            <stop offset="90%" stopColor="#224193" />
          </linearGradient>
        </Wave>
      </div>
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="Our Work"
          linkOne="#"
          textTwo=" Non-Profit Organizations"
          linkTwo="/our-work/npo"
        />
      </div>
      <div className="relative">
        <Wave
          fill="#b861b4a6"
          paused={false}
          className="h-[--h] !block"
          options={{
            amplitude: 60,
            speed: 0.15,
            points: 3,
          }}
        />

        <div className=" bg-[#b861b4a6] ~pt-[3rem]/[6rem] ~pb-[3rem]/[6.5rem] w-full ">
          <div className="container mx-auto flex justify-center flex-col items-center relative z-50 ~px-5/[10.5rem]  ">
            <TextStaggerAnimation
              text="Philanthropy and Non-Profit Organizations"
              className="~leading-[1.129rem]/[1.29rem] ~text-h9Copy5/h9Copy4 uppercase font-inter text-white/60 font-semibold"
            />
            <WordStaggerAnimation
              text="In India, the vast number of non-profit organizations (NPOs) can
              make it challenging for philanthropists to discover credible and
              impactful partners for their giving initiatives. With over 30 lakh
              NPOs operating across the country, the process of identifying
              organizations that align with strategic philanthropic goals can be
              overwhelming. This structural gap in the discovery of reliable
              NPOs often hinders effective philanthropy."
              className="pt-[1.25rem] tracking-[-1px] md:tracking-[-2px] text-center ~text-h4a/h3 ~leading-[2.113rem]/[2.6rem] font-playFair text-white "
            />
          </div>
        </div>
        <Wave
          fill="#b861b4a6"
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

export default NpoHeroSection;
