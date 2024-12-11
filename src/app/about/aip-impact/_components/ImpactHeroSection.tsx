import Link from "next/link";
import React from "react";
import Wave from "react-wavify";
import BreadCrumpSvg from "@public/svg/breadCrumps.svg";
import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";
const ImpactHeroSection = () => {
  return (
    <div className="">
      <div className="relative container mx-auto ">
        <BreadCrump
          textOne="About Us"
          linkOne="/about"
          textTwo="AIP Impact"
          linkTwo="/about/aip-impact"
        />
      </div>
      <div className="relative w-full ">
        <div className="absolute inset-0 pt-[2.5rem]">
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
            <linearGradient id="purpleGradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#91298C" />
              <stop offset="90%" stopColor="#224193" />
            </linearGradient>
          </Wave>
          <div className="h-[calc(100%-var(--h)*2)] bg-[#91298C]"></div>
          <Wave
            fill="#91298C"
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
              <stop offset="10%" stopColor="#91298C" />
              <stop offset="90%" stopColor="#224193" />
            </linearGradient>
          </Wave>
        </div>

        <div className="relative pt-[2.5rem]">
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

          <div className=" bg-[#b861b4a6] ~pt-[3rem]/[6.25rem] ~pb-[3rem]/[7.6rem] w-full ">
            <div className="container mx-auto flex justify-center flex-col items-center relative z-50 ~px-5/[14.375rem] ">
              <h3 className=" ~leading-[1.129rem]/[1.29rem] ~text-h9Copy5/h9Copy4 font-inter text-white/60 font-semibold">
                IMPACT BEGINS AT HOME
              </h3>
              <h2 className="pt-[1.25rem] text-center ~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-playFair text-white tracking-[-0.5px]">
                India has made significant progress yet more needs to be done.
                Philanthropy is clearly one of the means than can augment impact
                and lead to transformational change. AIP believes strategic
                personal philanthropy can impact India’s transformation.
              </h2>
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
    </div>
  );
};

export default ImpactHeroSection;
