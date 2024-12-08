import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import Wave from "react-wavify";

const ExpertHeroSection = () => {
  return (
    <div className="tw-relative tw-w-full ">
      <div className="tw-absolute  tw-inset-0 ">
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
          <linearGradient id="gradient" gradientTransform="rotate(90)">
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
      <BreadCrump
        textOne="Our Work"
        linkOne="/our-work"
        textTwo="Experts"
        linkTwo="/our-work/experts"
      />
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
          <div className="container tw-mx-auto tw-flex tw-justify-center tw-flex-col tw-items-center tw-relative tw-z-50 ~tw-px-5/[9rem] ">
            <h3 className=" ~tw-leading-[1.129rem]/[1.29rem] ~tw-text-h9Copy5/h9Copy4 tw-uppercase tw-font-inter tw-text-white/60 tw-font-semibold">
              Experts
            </h3>
            <h2 className="tw-pt-[1.25rem] tw-tracking-[-1px] tw-text-center ~tw-text-h5/h3 ~tw-leading-[1.75rem]/[2.6rem] tw-font-playFair tw-text-white">
              At AIP, we believe informed philanthropy can drive systemic
              change. Our approach is powered by subject-matter experts who
              provide valuable insights to help philanthropists make impactful
              decisions. These leaders enrich our network’s understanding of key
              sectors, guiding strategic giving aligned with Indias development
              needs. We collaborate with experts to create knowledge products,
              host workshops, and design tailored learning experiences,
              connecting our network with innovative solutions to catalyse real
              change.
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
  );
};

export default ExpertHeroSection;
