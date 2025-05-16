import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import OutlineButton from "@/components/buttons/OutlineButton";
import React from "react";

const AsAnExperts = () => {
  return (
    <div className="~pt-[7.5rem]/[10.124rem]  container mx-auto ~px-[1.25rem]/[14.375rem] flex flex-col items-center relative z-50">
      {/* <h2 className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-center text-gray80">
        <span className="font-playFairItalic text-textPurple">
          Partner&nbsp;
        </span>
        as an Expert
      </h2> */}
      <TextStaggerAnimation text="<color>Partner</color> as an Expert" className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-center text-gray80"/>
      <div className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-midGray flex flex-col  ~gap-[0.7rem]/[1rem] ~pt-[1rem]/[2.5rem] text-center">
        
        <TextStaggerAnimation text=" AIP is expanding its panel of subject-matter experts. If you’re a
          seasoned professional or thought leader with expertise in areas
          relevant to strategic philanthropy, we invite you to join our network.
          Our experts collaborate to advance innovative, sustainable, and
          impactful philanthropy."/>
          <TextStaggerAnimation text=" As an AIP expert, you’ll engage with motivated philanthropists,
          co-create research, lead workshops, and guide learning expeditions.
          Your insights will help shape the future of philanthropy in India. If
          you are interested, please share your background and areas of expertise.
          We’re eager to connect with those passionate about addressing India’s
          social challenges."/>
        {/* <p>
          AIP is expanding its panel of subject-matter experts. If you’re a
          seasoned professional or thought leader with expertise in areas
          relevant to strategic philanthropy, we invite you to join our network.
          Our experts collaborate to advance innovative, sustainable, and
          impactful philanthropy.
        </p>
        <p>
          As an AIP expert, you’ll engage with motivated philanthropists,
          co-create research, lead workshops, and guide learning expeditions.
          Your insights will help shape the future of philanthropy in India. If
          you are interested, please share your background and areas of expertise.
          We’re eager to connect with those passionate about addressing India’s
          social challenges.
        </p> */}
      </div>
      {/* <div className="~pt-[2rem]/[3.268rem]">
       <ButtonAnimation >
          <OutlineButton
            text="Join The Flow"
            buttonClassName="rounded-full w-fit  bg-white hover:bg-darkPurple"
            className="py-[0.75rem] px-[1.75rem] hover:text-white"
          />
       </ButtonAnimation>
      </div> */}
    </div>
  );
};

export default AsAnExperts;
