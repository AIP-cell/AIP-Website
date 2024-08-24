import BgButton from "@/components/buttons/BgButton";
import Image from "next/image";
import ShapelessBrown from "../../../public/svg/shapelessBrown.svg";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="tw-flex tw-overflow-hidden container tw-mx-auto  tw-gap-[6rem] tw-pt-[12.75rem] tw-pl-[7.8rem] tw-pr-[6.56rem]">
      <div className=" ">
        <div className="tw-bg-purpleToPink tw-bg-clip-text ">
          <h3 className="tw-text-transparent tw-text-h9BodyCopy4 tw-font-inter tw-tw-font-bold tw-leading-[22.4px]">
            UPCOMING EVENT
          </h3>
        </div>
        <h4 className="tw-text-h2Heading2 tw-text-darkGray tw-pt-[0.75rem] tw-leading-[52.8px] tw-font-playFair">
          Systematic
        </h4>
        <i className="tw-text-h2Heading2 tw-text-textPurple tw-font-playFair tw-leading-[52.8px]">
          Exemplars Report
        </i>
        <p className="tw-text-h9BodyCopy4 tw-text-midGray tw-font-inter tw-pt-[0.75rem]">
          It gives us great pleasure to invite you for the launch of our report
          - Systemic Impact Exemplars: Unique Approaches Towards Solving India’s
          Development Challenges.
        </p>
        <div className="tw-flex tw-gap-[0.75rem] tw-pt-[1.25rem]">
          <div className="tw-relative tw-size-[1.5rem]">
            <Image src="/svg/mapAddress.svg" alt="" fill />
          </div>
          <h4 className="tw-text-h9BodyCopy4 tw-font-inter">25th June 2024</h4>
        </div>
        <div className="tw-flex gap-[0.75rem] tw-pt-[0.813rem]">
          <div className="tw-relative tw-size-[1.5rem]">
            <Image src="/svg/calendar.svg" alt="" fill />
          </div>
          <h4 className="tw-text-h9BodyCopy4 tw-font-inter">Delhi, India</h4>
        </div>
        <div className="tw-pt-[1.25rem]">
          <BgButton
            text="Event Details"
            className="tw-px-[2rem] tw-py-[0.75rem] tw-text-h9BodyCopy4"
          />
        </div>
      </div>
      <div className="tw-relative">
        <div className="tw-relative tw-z-[10] tw-shrink-0 tw-w-[34.56rem] tw-h-[22.1rem] tw-rounded-2xl tw-overflow-hidden">
          <Image src="/images/upcoming.png" alt="upcoming-Image" fill />
        </div>
        <div className="tw-absolute tw-bottom-[0.5rem]  tw--right-[4.5rem] tw-size-[18.4rem]">
          <Image src={ShapelessBrown} alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
