import React from "react";

const JourneyArchetype = () => {
  return (
    <div className="flex flex-col px-[14.438rem] text-center pb-[6.125rem]">
      <div className="px-[6.531rem] space-y-[2.5rem]">
        <div className="font-playFair text-[3rem] leading-[3.3rem] ">
          Where are you in your
          <p className="italic text-textPurple">Giving Journey?</p>
        </div>

        <div className="leading-[1.4rem] text-inter">
          <p>We can organise philanthropic inputs intro three categories:</p>

          <p className=" pb-10">
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
            className="text-white leading-[1.225rem] bg-darkPurple w-[11.375rem] 
        h-[2.75rem]
        rounded-[1.5rem] cursor-pointer"
          >
            Discover Your Path
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneyArchetype;
