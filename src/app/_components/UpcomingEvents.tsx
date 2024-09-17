import BgButton from "@/components/buttons/BgButton";
import Image from "next/image";
import ShapelessBrown from "../../../public/svg/shapelessBrown.svg";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="tw-grid tw-grid-cols-2 tw-overflow-hidden container tw-mx-auto  ~tw-gap-[2rem]/0 ~tw-pt-[5rem]/[12.75rem] ~tw-pl-[1.2rem]/[7.8rem] ~tw-pr-[1.2rem]/[6.56rem]">
      <div className=" md:tw-pr-[6rem] tw-col-span-2 lg:tw-col-span-1">
        <div className="tw-bg-purpleToPink tw-bg-clip-text ">
          <h3 className="tw-text-transparent ~tw-text-h9Copy5/h9Copy4 tw-font-inter tw-font-bold ~tw-leading-[1.2rem]/[1.4rem]">
            UPCOMING EVENT
          </h3>
        </div>
        <h4 className="~tw-text-h4/h2 tw-text-darkGray tw-pt-[0.75rem] tw-leading-[52.8px] tw-font-playFair">
          Systematic
        </h4>
        <p className="~tw-text-h4/h2 tw-text-textPurple tw-font-playFairItalic tw-leading-[52.8px]">
          Exemplars Report
        </p>
        <p className="tw-text-h9Copy4 tw-text-midGray tw-font-inter tw-pt-[0.75rem]">
          It gives us great pleasure to invite you for the launch of our report
          - Systemic Impact Exemplars: Unique Approaches Towards Solving India’s
          Development Challenges.
        </p>
        <div className="tw-flex tw-gap-[0.75rem] tw-pt-[1.25rem]">
          <div className="tw-relative tw-size-[1.5rem]">
            <Image src="/svg/mapAddress.svg" alt="" fill />
          </div>
          <h4 className="tw-text-h9Copy4 tw-font-inter tw-text-gray-800">
            25th June 2024
          </h4>
        </div>
        <div className="tw-flex tw-gap-[0.75rem] tw-pt-[0.813rem]">
          <div className="tw-relative tw-size-[1.5rem]">
            <Image src="/svg/calendar.svg" alt="" fill />
          </div>
          <h4 className="tw-text-h9Copy4 tw-font-inter tw-text-gray-800">
            Delhi, India
          </h4>
        </div>
        <div className="tw-pt-[1.25rem]">
          <BgButton
            text="Event Details"
            className="tw-px-[2rem] tw-py-[0.75rem] ~tw-text-h9Copy5/h9Copy4 tw-leading-[1.4rem]"
          />
        </div>
      </div>
      <div className="tw-relative tw-col-span-2 lg:tw-col-span-1">
        <div className="tw-relative tw-z-[10] tw-shrink-0  ~tw-h-[14rem]/[22.1rem] tw-rounded-2xl tw-overflow-hidden">
          <Image src="/images/upcoming.png" alt="upcoming-Image" fill className="tw-object-cover"/>
        </div>
        <div className="tw-absolute ~tw-bottom-[-1.5rem]/[0.5rem]  ~tw-right-[-1.6rem]/[-4.5rem] ~tw-size-[10.3rem]/[18.4rem]">
          <Image src={ShapelessBrown} alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
