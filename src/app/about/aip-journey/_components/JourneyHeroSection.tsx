import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroBg1 from "@public/svg/about/aip-journey/heroBg1.svg";
import HeroBg2 from "@public/svg/about/aip-journey/heroBg2.svg";
import HeroBgSVg from "@/components/svg/HeroBgSVg";
import Wave from "react-wavify";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import FadeInAnimation from "@/components/animations/FadeInAnimation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";

const JourneyHeroSection = () => {
  return (
    <div className="relative w-full ">
      <div className="absolute  inset-0 ">
        <Wave
          fill="#F5B195"
          paused={false}
          className="h-[--h] !block "
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
          className="h-[--h] rotate-180 !block "
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
          textOne="About Us"
          linkOne="#"
          textTwo="AIP Journey"
          linkTwo="/about/aip-journey"
        />
      </div>
      <div className="relative">
        <Wave
          fill="#faecc894"
          paused={false}
          className="h-[--h] !block "
          options={{
            amplitude: 60,
            speed: 0.15,
            points: 3,
          }}
        />

        <div className=" bg-[#faecc894] backdrop-blur-[24px] ~pt-[3.1rem]/[6.25rem] ~pb-[3.8rem]/[7.6rem] w-full ">
          <div className="container mx-auto flex justify-center flex-col items-center relative z-50 ~px-[1.375rem]/[18rem] ">
            <FadeInAnimation delay={0.1} y1={0} y2={10}>
              <h3 className="~text-h9Copy5/h9Copy4 leading-[20.64px] font-inter text-lightPeach/60 font-semibold">
                PHILANTHROPY IS WHAT IT DOES.
              </h3>
            </FadeInAnimation>
            <WordStaggerAnimation
              text="Philanthropy is the river.<br>
                    No two rivers are the same;<br>
                    No two philanthropists are the same;<br> 
                    No two journeys are alike.<br>
                    And AIP helps channel the flow. "
              className="pt-[1.25rem] text-center ~text-h4/h3 ~leading-[2.563rem]/[3.25rem] font-playFair text-gray80"
            />
            {/* <h2 className="pt-[1.25rem] text-center ~text-h4/h3 ~leading-[2.563rem]/[3.25rem] font-playFair text-gray80">
              A philanthropist’s wealth is the origin. Philanthropy is the
              river. No two rivers are the same; No two philanthropists are the
              same; No two journeys are alike. And AIP helps channel the flow.
            </h2> */}
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

export default JourneyHeroSection;
