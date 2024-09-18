import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import React from "react";

const JourneyArchetype = () => {
  return (
    <div className="tw-flex tw-flex-col ~tw-px-5/[20.967rem] tw-text-center tw-pb-[6.125rem]">
      <div className="~tw-space-y-[2rem]/[2.5rem]">
        <div className="tw-font-playFair ~tw-text-h4/h2 tw-text-gray80 ~tw-leading-[2.6rem]/[3.3rem]">
          Where are you in your
          <p className="tw-font-playFairItalic tw-text-textPurple">
            Giving Journey?
          </p>
        </div>

        <div className="~tw-leading-[1.225rem]/[1.4rem] tw-text-midGray  max-lg:~tw-px-[2.875rem]/0">
          <p>We can organise philanthropic inputs intro three categories:</p>

          <p className=" tw-pb-10">
            Treasure, Involvement, and Evangelisation. Recognising the giving
            journey of philanthropists is the first step to understanding your
            current stage. Are you at a discovery stage? Are you giving for 4 -
            5 years? Or are you thinking of it? Or are you looking to organize
            and structure it?
          </p>

          <p>
            Log In to answer a few questions and understand where you are in
            your giving journey. Click below to begin.
          </p>
        </div>

        <div>
          <ButtonAnimation
            type="submit"
            className="tw-text-white hover:tw-text-darkPurple tw-leading-[1.225rem] hover:tw-bg-white tw-bg-darkPurple tw-px-[1.75rem] tw-py-[0.75rem] tw-rounded-[1.5rem] tw-cursor-pointer"
          >
            Discover Your Path
          </ButtonAnimation>
        </div>
      </div>
    </div>
  );
};

export default JourneyArchetype;
