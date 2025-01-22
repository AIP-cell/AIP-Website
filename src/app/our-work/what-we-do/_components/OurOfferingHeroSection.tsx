import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import Wave from "react-wavify";

const OurOfferingHeroSection = () => {
  return (
    <div className="relative w-full ">
      <div className="absolute  inset-0 ">
        <Wave
          fill="#F5B195"
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
      {/* <HeroBgSVg className="absolute "/> */}
      {/* <Image src={HeroBg1} alt="" fill className="z-40 " />
      <Image src={HeroBg2} alt="" fill className="z-10 " /> */}
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="Our Work"
          linkOne="#"
          textTwo="What We Do"
          linkTwo="/our-work/what-we-do"
        />
      </div>

      <div className="relative">
        <Wave
          fill="#faecc894"
          paused={false}
          className="h-[--h] !block"
          options={{
            amplitude: 60,
            speed: 0.15,
            points: 3,
          }}
        />
        {/* ~pt-[5.5rem]/[11rem] */}

        <div className=" bg-[#faecc894] ~pt-[3rem]/[6.25rem] ~pb-[3rem]/[7.6rem] w-full ">
          <div className="container mx-auto flex justify-center flex-col items-center relative z-50 ~px-5/[14.375rem] ">
            <TextStaggerAnimation
              text="Philanthropy is what it does."
              className="~leading-[1.129rem]/[1.29rem] ~text-h9Copy5/h9Copy4 uppercase font-inter text-lightPeach/60 font-semibold"
            />
            {/* <h2 className="pt-[1.25rem] md:tracking-[-1px] text-center ~text-h7Copy3/h3 ~leading-[1.788rem]/[2.6rem] font-playFair text-gray80">
              AIP is a sector-agnostic organization, meaning we do not
              specialize in any one sector but instead offer our expertise
              across a wide range of fields. We work in any sector that aligns
              with the philanthropists goals, ensuring that their contributions
              are strategically guided and effectively implemented. By not being
              confined to a specific sector, we are able to tailor our approach
              to meet the unique needs and aspirations of each philanthropist,
              empowering them to create meaningful change wherever their passion
              lies.
            </h2> */}
            <WordStaggerAnimation text="AIP is a sector-agnostic organization, meaning we do not
              specialize in any one sector but instead offer our expertise
              across a wide range of fields. We work in any sector that aligns
              with the philanthropists goals, ensuring that their contributions
              are strategically guided and effectively implemented. By not being
              confined to a specific sector, we are able to tailor our approach
              to meet the unique needs and aspirations of each philanthropist,
              empowering them to create meaningful change wherever their passion
              lies." className="pt-[1.25rem] md:tracking-[-1px] text-center ~text-h7Copy3/h3 ~leading-[1.788rem]/[2.6rem] font-playFair text-gray80"/>
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

export default OurOfferingHeroSection;
