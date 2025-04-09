import Image from "next/image";
import React from "react";
import JourneyOne from "@public/svg/journey-so-far/journeyOne.svg";
import JourneyTwo from "@public/svg/journey-so-far/journeyTwo.svg";
import JourneyThree from "@public/svg/journey-so-far/journeyThree.svg";
import JourneyFour from "@public/svg/journey-so-far/journeyFour.svg";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
const JourneySoFar = () => {
  return (
    <div className="flex flex-col items-center w-full container mx-auto ~pt-[5rem]/[10rem]">
      <TextStaggerAnimation
        text="The <color>Journey</color> So Far"
        className="text-gray80 font-playFair ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] "
      />
      <div className="flex flex-col md:flex-row ~gap-[2rem]/[3.375rem] ~pl-[1.25rem]/[6.121rem] ~pr-[1.25rem]/[9.563rem] ~pt-[3rem]/[3.5rem] w-full">
        <div className="grid grid-cols-2 ~gap-x-[1.5rem]/[2.125rem] ~gap-y-[0.5rem] md:w-[38%] h-fit">
          <div className="flex justify-center w-full">
            <Image
              src={JourneyOne}
              alt=""
              className=" w-[10.4811rem] h-[12.2575rem] md:h-[10.5rem] lg:h-[12.2575rem]"
            />
          </div>
          <div className="flex justify-center w-full">
            <Image
              src={JourneyTwo}
              alt=""
              className=" w-[10.4811rem] h-[12.2575rem] md:h-[10.5rem] lg:h-[12.2575rem] "
            />
          </div>
          <div className="flex justify-center w-full">
            <Image
              src={JourneyThree}
              alt=""
              className=" w-[10.4811rem] h-[12.2575rem] md:h-[10.5rem] lg:h-[12.2575rem] "
            />
          </div>
          <div className="flex justify-center w-full">
            <Image
              src={JourneyFour}
              alt=""
              className="w-[10.4811rem] h-[12.2575rem] md:h-[10.5rem] lg:h-[12.2575rem] "
            />
          </div>
        </div>
        <div className=" md:w-[62%] ~text-h9Copy5/h9Copy4 text-midGray ~leading-[1.225rem]/[1.4rem] pt-[1.688rem] flex flex-col gap-[1rem]">
          <p>
            AIP was formed about three years ago with the objective of helping
            India&apos;s wealth creators with their philanthropic work and
            enable them to Give More, Give Sooner, and Give Better. The insight
            that led to this organization was that philanthropy can indeed make
            a difference to India&apos;s transformation; that philanthropists
            were keen to make this difference and finally that philanthropists
            themselves are in the best position to inspire other
            philanthropists. In this sense AIP was conceived off as a movement
            of philanthropists and for philanthropists.
          </p>

          <p>
            The idea of AIP was conceived by Ashish Dhawan, Rohini Nilekani and
            Amit Chandra along with Vishal Tulsyan who joined them as a “Core
            Founder”. Today AIP has over 40 other “Founders” as well, who
            support the organization and enable us to do what we do. AIP Has its
            own advisory Board.
          </p>
          <p>
            We believe philanthropists themselves are in the best position to
            decide where and how to make their philanthropic investments. We do
            not “push” or “sell” any sector, organization or method of
            philanthropic investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneySoFar;
