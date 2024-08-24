import React from "react";
import JourneyArchetype1 from "./_components/JourneyArchetype1";
import JourneyArchetype2 from "./_components/JourneyArchetype2";

const page = () => {
  return (
    <div className="container tw-mx-auto ">
      <div className="tw-text-center tw-h-screen ">
        <p className="tw-px-[7.8rem] tw-pt-[7.5rem] tw-text-[2.5rem] tw-font-playFair tw-leading-[3.25rem] tw-tracking-[-0.04rem]">
          At AIP we believe: Philanthropists can make a difference.
          Philanthropists want to make a difference. And philanthropists, are
          best at inspiring each other. After chatting with you, we build a plan
          to provide a perspective, identify sectors, help define philanthropic
          purpose.
        </p>
      </div>

      <JourneyArchetype1 />
      <JourneyArchetype2 />
    </div>
  );
};

export default page;
