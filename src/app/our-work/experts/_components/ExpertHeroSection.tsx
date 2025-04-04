import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import Wave from "react-wavify";

const ExpertHeroSection = () => {
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
          textTwo="Experts"
          linkTwo="/our-work/experts"
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

        <div className=" bg-[#b861b4a6] ~pt-[3rem]/[6.25rem] ~pb-[3rem]/[7.6rem] w-full ">
          <div className="container mx-auto flex justify-center flex-col items-center relative z-50 ~px-5/[9rem] ">
            {/* <h3 className=" ~leading-[1.129rem]/[1.29rem] ~text-h9Copy5/h9Copy4 uppercase font-inter text-white/60 font-semibold">
              Experts
            </h3> */}
            <TextStaggerAnimation text="Experts" className=" ~leading-[1.129rem]/[1.29rem] ~text-h9Copy5/h9Copy4 uppercase font-inter text-white/60 font-semibold"/>
            <WordStaggerAnimation text="At AIP, we believe informed philanthropy can drive meaningful change. Our approach is powered by subject-matter experts who provide valuable insights to help philanthropists make impactful decisions. These leaders enrich our network’s understanding of key sectors, guiding strategic giving aligned with India's development needs. We collaborate with experts to create knowledge products, host workshops, and design tailored learning experiences, connecting our network with innovative solutions to catalyse real change."
              className="pt-[1.25rem] tracking-[-1px] text-center ~text-h5/h3 ~leading-[1.75rem]/[2.6rem] font-playFair text-white"
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

export default ExpertHeroSection;
