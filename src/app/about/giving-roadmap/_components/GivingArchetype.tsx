import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import React from "react";

const JourneyArchetype1 = () => {
  return (
    <div className="tw-flex tw-flex-col ~tw-px-5/[22.138rem] tw-text-center tw-pb-[4.125rem] ">
      <div className="~tw-space-y-4/[2.5rem]">
        <div className="tw-font-playFair tw-text-h2 tw-leading-[3.3rem] ">
          What&apos;s your
          <p className="tw-font-playFairItalic tw-text-textPurple">
            {" "}
            Giving Archetype?
          </p>
        </div>

        <div className="tw-leading-[1.4rem] max-lg:~tw-px-[2.875rem]/0 tw-font-inter">
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
          <ButtonAnimation className="tw-text-white hover:tw-text-darkPurple tw-leading-[1.225rem] tw-bg-darkPurple hover:tw-bg-white tw-py-[0.75rem] tw-px-[1.75rem] tw-rounded-[1.5rem] tw-cursor-pointer">
            Find Your Archetype
          </ButtonAnimation>
        </div>
      </div>
    </div>
  );
};

export default JourneyArchetype1;
