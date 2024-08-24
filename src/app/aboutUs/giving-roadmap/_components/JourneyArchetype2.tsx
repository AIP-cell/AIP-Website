import React from "react";

const JourneyArchetype1 = () => {
  return (
    <div className="flex flex-col px-[14.438rem] text-center pb-[4.125rem]">
      <div className="px-[7.75rem] space-y-[2.5rem]">
        <div className="font-playFair text-[3rem] leading-[3.3rem] ">
        What’s your 
          <p className="italic text-textPurple">Giving Archetype?</p>
        </div>

        <div className="leading-[1.4rem] text-inter">
          <p className=" pb-10">
            Our research identifies six distinct archetypes among Indian
            philanthropists: inspiration seekers, emerging givers, strategic
            enablers, cause champions, core givers, and rainmakers. Each
            archetype reflects unique values, motivations and approaches to
            giving, it is important to note that these identities are not
            static, with many philanthropists transitioning between archetypes
            as their philanthropic journeys evolve.
          </p>
        </div>

        <div>
          <button
            type="submit"
            className="text-white leading-[1.225rem] bg-darkPurple w-[11.375rem] 
      h-[2.75rem]
      rounded-[1.5rem] cursor-pointer"
          >
          Find Your Archetype
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneyArchetype1;
