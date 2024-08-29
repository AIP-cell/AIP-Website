import React from "react";

const JourneyArchetype = () => {
  return (
    <div className="tw-flex tw-flex-col tw-px-[14.437rem] tw-text-center tw-pb-[6.125rem]">
      <div className="tw-px-[6.531rem] tw-space-y-[2.5rem]">
        <div className="tw-font-playFair tw-text-h2 tw-text-gray80 tw-leading-[3.3rem] ">
          Where are you in your
          <p className="tw-italic tw-text-textPurple">Giving Journey?</p>
        </div>

        <div className="tw-leading-[1.4rem] tw-font-inter tw-text-midGray">
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
          <button
            type="submit"
            className="tw-text-white tw-leading-[1.225rem] tw-bg-darkPurple tw-w-[11.375rem] tw-h-[2.75rem] tw-rounded-[1.5rem] tw-cursor-pointer"
          >
            Discover Your Path
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneyArchetype;
