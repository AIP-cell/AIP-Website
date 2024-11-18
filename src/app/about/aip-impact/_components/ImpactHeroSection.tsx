import Link from "next/link";
import React from "react";
import Wave from "react-wavify";
import BreadCrumpSvg from "@public/svg/breadCrumps.svg";
import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";
const ImpactHeroSection = () => {
  return (
    <div className="~tw-pt-[8rem]/[5rem]">
      <div className="tw-relative tw-w-full ">
        <div className="tw-absolute tw-inset-0 ">
          <Wave
            fill="#91298C"
            paused={false}
            className="tw-h-[--h] !tw-block"
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
          <div className="tw-h-[calc(100%-var(--h)*2)] tw-bg-[#91298C]"></div>
          <Wave
            fill="#91298C"
            paused={false}
            className="tw-h-[--h] tw-rotate-180 !tw-block"
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
        <div className="tw-relative container tw-mx-auto ">
          <BreadCrump
            textOne="About Us"
            linkOne="/about"
            textTwo="AIP Impact"
            linkTwo="/about/aip-impact"
          />
        </div>
        <div className="tw-relative">
          <Wave
            fill="#b861b4a6"
            paused={false}
            className="tw-h-[--h] !tw-block"
            options={{
              amplitude: 60,
              speed: 0.15,
              points: 3,
            }}
          />

          <div className=" tw-bg-[#b861b4a6] ~tw-pt-[3rem]/[6.25rem] ~tw-pb-[3rem]/[7.6rem] tw-w-full ">
            <div className="container tw-mx-auto tw-flex tw-justify-center tw-flex-col tw-items-center tw-relative tw-z-50 ~tw-px-5/[14.375rem] ">
              <h3 className=" tw-leading-[1.29rem] tw-font-inter tw-text-white/60 tw-font-semibold">
                IMPACT BEGINS AT HOME
              </h3>
              <h2 className="tw-pt-[1.25rem] tw-text-center ~tw-text-h4/h3 tw-leading-[3.25rem] tw-font-playFair tw-text-white">
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
            className="tw-h-[--h] tw-rotate-180 !tw-block"
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
