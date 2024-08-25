import React from "react";

const JourneyArchetype1 = () => {
  return (
    <div className="tw-flex tw-flex-col tw-px-[14.438rem] tw-text-center tw-pb-[4.125rem]">
      <div className="tw-px-[7.75rem] tw-space-y-[2.5rem]">
        <div className="tw-font-playFair tw-text-h2Heading2 tw-leading-[3.3rem] ">
        What’s your 
          <i className=" tw-text-textPurple">Giving Archetype?</i>
        </div>

        <div className="tw-leading-[1.4rem] tw-font-inter">
          <p className=" tw-pb-10">
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
            className="tw-text-white tw-leading-[1.225rem] tw-bg-darkPurple tw-w-[11.375rem] tw-h-[2.75rem] tw-rounded-[1.5rem] tw-cursor-pointer"
          >
          Find Your Archetype
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneyArchetype1;
