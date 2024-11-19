import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroBg1 from "@public/svg/about/aip-journey/heroBg1.svg";
import HeroBg2 from "@public/svg/about/aip-journey/heroBg2.svg";
import HeroBgSVg from "@/components/svg/HeroBgSVg";
import Wave from "react-wavify";
import BreadCrump from "@/components/bread-crump/BreadCrump";

const JourneyHeroSection = () => {
  return (
    <div className="tw-relative tw-w-full ">
      <div className="tw-absolute  tw-inset-0 ">
        <Wave
          fill="#F5B195"
          paused={false}
          className="tw-h-[--h] !tw-block "
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
        <div className="tw-h-[calc(100%-var(--h)*2)] tw-bg-[#F5B195]"></div>
        <Wave
          fill="#F5B195"
          paused={false}
          className="tw-h-[--h] tw-rotate-180 !tw-block "
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

      <div className="tw-relative container tw-mx-auto">
        <BreadCrump
          textOne="About Us"
          linkOne="/about"
          textTwo="AIP Journey"
          linkTwo="/about/aip-journey"
        />
      </div>
      <div className="tw-relative">
        <Wave
          fill="#faecc894"
          paused={false}
          className="tw-h-[--h] !tw-block "
          options={{
            amplitude: 60,
            speed: 0.15,
            points: 3,
          }}
        />

        <div className=" tw-bg-[#faecc894] tw-backdrop-blur-[24px] ~tw-pt-[3.1rem]/[6.25rem] ~tw-pb-[3.8rem]/[7.6rem] tw-w-full ">
          <div className="container tw-mx-auto tw-flex tw-justify-center tw-flex-col tw-items-center tw-relative tw-z-50 ~tw-px-[1.375rem]/[20.938rem] ">
            <h3 className="~tw-text-h9Copy5/h9Copy4 tw-leading-[20.64px] tw-font-inter tw-text-lightPeach/60 tw-font-semibold">
              PHILANTHROPY IS WHAT IT DOES.
            </h3>
            <h2 className="tw-pt-[1.25rem] tw-text-center ~tw-text-h4/h3 ~tw-leading-[2.563rem]/[3.25rem] tw-font-playFair tw-text-gray80">
              A philanthropist’s wealth is the origin. Philanthropy is the
              river. No two rivers are the same; No two philanthropists are the
              same; No two journeys are alike. And AIP helps channel the flow.
            </h2>
          </div>
        </div>
        <Wave
          fill="#faecc894"
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
  );
};

export default JourneyHeroSection;
