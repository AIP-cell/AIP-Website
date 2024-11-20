import BreadCrump from "@/components/bread-crump/BreadCrump";
import Link from "next/link";
import React from "react";
import Wave from "react-wavify";

const OurOfferingHeroSection = () => {
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
      <BreadCrump
        textOne="Our Work"
        linkOne="/our-work"
        textTwo="What We Do"
        linkTwo="/our-work/what-we-do"
      />

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

        <div className=" tw-bg-[#faecc894] ~tw-pt-[5.5rem]/[11rem] ~tw-pb-[5.5rem]/[10.798rem] tw-w-full ">
          <div className="container tw-mx-auto tw-flex tw-justify-center tw-flex-col tw-items-center tw-relative tw-z-50 ~tw-px-5/[14.375rem] ">
            <h3 className=" tw-leading-[20.64px] tw-uppercase tw-font-inter tw-text-[#121314] tw-font-semibold">
              previous sectors engaged
            </h3>
            <h2 className="tw-pt-[1.25rem] tw-tracking-[-1px] tw-text-center ~tw-text-h4/h3 tw-leading-[2.6rem] tw-font-playFair tw-text-gray80">
            AIP is sector-agnostic, offering our network members services across a diverse range of sectors driven by their own philanthropic motivations and passions. While many of our members continue supporting traditional sectors for widespread impact, we’ve also noticed a growing interest among philanthropists–particularly from the younger generation–in specific sub-sectors. This trend is not only diversifying our giving pool but also enriching our collective efforts.
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

export default OurOfferingHeroSection;
