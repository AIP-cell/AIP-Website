import BgButton from "@/components/buttons/BgButton";
import Image from "next/image";
import ShapelessBrown from "../../../public/svg/shapelessBrown.svg";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="flex overflow-hidden container mx-auto  gap-[6rem] pt-[12.75rem] pl-[7.8rem] pr-[6.56rem]">
      <div className=" ">
        <div className="bg-purpleToPink bg-clip-text ">
          <h3 className="text-transparent text-h9BodyCopy4 font-inter font-bold leading-[22.4px]">
            UPCOMING EVENT
          </h3>
        </div>
        <h4 className="text-h2Heading2 text-darkGray pt-[0.75rem] leading-[52.8px] font-playFair">
          Systematic
        </h4>
        <i className="text-h2Heading2 text-textPurple font-playFair leading-[52.8px]">
          Exemplars Report
        </i>
        <p className="text-h9BodyCopy4 text-midGray font-inter pt-[0.75rem]">
          It gives us great pleasure to invite you for the launch of our report
          - Systemic Impact Exemplars: Unique Approaches Towards Solving India’s
          Development Challenges.
        </p>
        <div className="flex gap-[0.75rem] pt-[1.25rem]">
          <div className="relative size-[1.5rem]">
            <Image src="/svg/mapAddress.svg" alt="" fill />
          </div>
          <h4 className="text-h9BodyCopy4 font-inter">25th June 2024</h4>
        </div>
        <div className="flex gap-[0.75rem] pt-[0.813rem]">
          <div className="relative size-[1.5rem]">
            <Image src="/svg/calendar.svg" alt="" fill />
          </div>
          <h4 className="text-h9BodyCopy4 font-inter">Delhi, India</h4>
        </div>
        <div className="pt-[1.25rem]">
          <BgButton
            text="Event Details"
            className="px-[2rem] py-[0.75rem] text-h9BodyCopy4"
          />
        </div>
      </div>
      <div className="relative">
        <div className="relative z-[10] shrink-0 w-[34.56rem] h-[22.1rem] rounded-2xl overflow-hidden">
          <Image src="/images/upcoming.png" alt="upcoming-Image" fill />
        </div>
        <div className="absolute bottom-[0.5rem]  -right-[4.5rem] size-[18.4rem]">
          <Image src={ShapelessBrown} alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
