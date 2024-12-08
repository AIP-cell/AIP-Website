import OutlineButton from "@/components/buttons/OutlineButton";
import React from "react";

const AsAnExperts = () => {
  return (
    <div className="~tw-pt-[7.5rem]/[10.124rem]  container tw-mx-auto ~tw-px-[1.25rem]/[14.375rem] tw-flex tw-flex-col tw-items-center">
      <h2 className="~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem] tw-font-playFair tw-text-center tw-text-gray80">
        <span className="tw-font-playFairItalic tw-text-textPurple">
          Partner&nbsp;
        </span>
        as an Expert
      </h2>
      <div className="~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem] tw-text-midGray tw-flex tw-flex-col  ~tw-gap-[0.7rem]/[1rem] ~tw-pt-[1rem]/[2.5rem] tw-text-center">
        <p>
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
          youre interested, please share your background and areas of expertise.
          We’re eager to connect with those passionate about addressing India’s
          social challenges.
        </p>
      </div>
      <div className="~tw-pt-[2rem]/[3.268rem]">
        <OutlineButton
          text="Join The Flow"
          buttonClassName="tw-rounded-full tw-w-fit"
          className="tw-py-[0.75rem] tw-px-[1.75rem]"
        />
      </div>
    </div>
  );
};

export default AsAnExperts;
