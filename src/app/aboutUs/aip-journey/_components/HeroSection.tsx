import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroBg1 from "@public/svg/aip-journey/heroBg1.svg";
import HeroBg2 from "@public/svg/aip-journey/heroBg2.svg";
import HeroBgSVg from "@/components/svg/HeroBgSVg";
import Wave from "react-wavify";

const HeroSection = () => {
  return (
    <div className="relative w-full ">
      <div className="absolute  inset-0 ">
        <Wave
          fill="#F5B195"
          paused={false}
          className="h-[--h] !block"
          options={{
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
      </div>
      {/* <HeroBgSVg className="absolute "/> */}
      {/* <Image src={HeroBg1} alt="" fill className="z-40 " />
      <Image src={HeroBg2} alt="" fill className="z-10 " /> */}
      <div className="absolute left-[7.8rem] font-inter top-[1.25rem]">
        <Link href="" className="text-gray50 text-h9BodyCopy5 leading-[19.6px]">
          {"<"} About Us
        </Link>
        /<Link href=""> AIP Journey</Link>
      </div>
      <div className="relative">
          <Wave
            fill="#faecc894"
            paused={false}
            className="h-[--h] !block"
            options={{
              amplitude: 60,
              speed: 0.15,
              points: 2,
            }}
          />
    
          <div className=" bg-[#faecc894] pt-[6.25rem] pb-[7.6rem] w-full ">
            <div className="container mx-auto flex justify-center flex-col items-center relative z-50 px-[20.9rem] ">
              <h3 className=" leading-[20.64px] font-inter text-[#121314] font-semibold">
                PHILANTHROPY IS WHAT IT DOES.
              </h3>
              <h2 className="pt-[1.25rem] text-center text-h3Heading3 leading-[52px] font-playFair text-gray80">
                A philanthropist’s wealth is the origin. Philanthropy is the river.
                No two rivers are the same; No two philanthropists are the same; No
                two journeys are alike. And AIP helps channel the flow.
              </h2>
            </div>
          </div>
          <Wave
            fill="#faecc894"
            paused={false}
            className="h-[--h] rotate-180 !block"
            options={{
              amplitude: 60,
              speed: 0.15,
              points: 2,
            }}
          />
      </div>
    </div>
  );
};

export default HeroSection;
