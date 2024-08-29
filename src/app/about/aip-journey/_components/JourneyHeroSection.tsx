import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroBg1 from "@public/svg/aboutPage/aip-journey/heroBg1.svg";
import HeroBg2 from "@public/svg/aboutPage/aip-journey/heroBg2.svg";
import HeroBgSVg from "@/components/svg/HeroBgSVg";
import Wave from "react-wavify";

const JourneyHeroSection = () => {
  return (
    <div className="tw-relative tw-w-full ">
      <div className="tw-absolute  tw-inset-0 ">
        <Wave
          fill="#F5B195"
          paused={false}
          className="tw-h-[--h] !tw-block"
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
          className="tw-h-[--h] tw-rotate-180 !tw-block"
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
      {/* <HeroBgSVg className="tw-absolute "/> */}
      {/* <Image src={HeroBg1} alt="" fill className="tw-z-40 " />
      <Image src={HeroBg2} alt="" fill className="tw-z-10 " /> */}
      <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
        <Link
          href=""
          className="tw-text-gray50 tw-text-h9Copy5 tw-leading-[19.6px]"
        >
          {"<"} About Us &nbsp;/&nbsp;
        </Link>
        <Link href=""> AIP Journey</Link>
      </div>
      <div className="tw-relative">
        <Wave
          fill="#faecc894"
          paused={false}
          className="tw-h-[--h] !tw-block"
          options={{
            amplitude: 60,
            speed: 0.15,
            points: 3,
          }}
        />

        <div className=" tw-bg-[#faecc894] tw-pt-[6.25rem] tw-pb-[7.6rem] tw-w-full ">
          <div className="container tw-mx-auto tw-flex tw-justify-center tw-flex-col tw-items-center tw-relative tw-z-50 tw-px-[20.9rem] ">
            <h3 className=" tw-leading-[20.64px] tw-font-inter tw-text-[#121314] tw-font-semibold">
              PHILANTHROPY IS WHAT IT DOES.
            </h3>
            <h2 className="tw-pt-[1.25rem] tw-text-center tw-text-h3 tw-leading-[52px] tw-font-playFair tw-text-gray80">
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
