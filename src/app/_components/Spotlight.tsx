import BgButton from "@/components/buttons/BgButton";
import Image from "next/image";
import ShapelessBrown from "@public/svg/shapelessBrown.svg";
import Upcoming from "@public/images/upcoming.png";
import React from "react";
import { THomePageEvent } from "@/api/type";

type Props = {
  eventData: THomePageEvent;
};
const Spotlight = ({ eventData }: Props) => {
  return (
    <div className="tw-grid tw-grid-cols-2  container tw-mx-auto  ~tw-gap-[2rem]/0 ~tw-pt-[5rem]/[12.75rem] ~tw-pl-[1.2rem]/[7.8rem] ~tw-pr-[1.2rem]/[6.56rem]">
      <div className=" md:tw-pr-[6rem] tw-col-span-2 lg:tw-col-span-1">
        <div className="tw-bg-purpleToPink tw-bg-clip-text ">
          <h3 className="tw-text-transparent ~tw-text-h9Copy5/h9Copy4 tw-font-inter tw-font-bold ~tw-leading-[1.2rem]/[1.4rem]">
            IN THE SPOTLIGHT
          </h3>
        </div>
        <div className="">
          <h4 className="~tw-text-h4/h2 tw-text-darkBlack tw-pt-[0.75rem] ~tw-leading-[2.6rem]/[3.3rem] tw-font-playFair">
            {eventData?.title}
          </h4>
        </div>

        <p className="tw-text-h9Copy4 tw-leading-[1.4rem] tw-text-midGray tw-font-inter tw-pt-[0.75rem]">
          {eventData?.description}
        </p>

        <div className="tw-pt-[1.25rem]">
          <BgButton
            text="Read More"
            className="tw-px-[2rem] tw-py-[0.75rem] ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]"
          />
        </div>
      </div>
      <div className="tw-relative tw-col-span-2 lg:tw-col-span-1">
        <div className="tw-relative tw-z-[10] tw-shrink-0  ~tw-h-[14rem]/[22.1rem] tw-rounded-2xl tw-overflow-hidden">
          <Image
            // src={eventData.image}
            src={Upcoming}
            alt="upcoming-Image"
            fill
            className="tw-object-cover tw-h-full tw-w-full"
          />
        </div>
        <div className="tw-absolute ~tw-bottom-[-1.8rem]/0  ~tw-right-[-1.6rem]/[-4.5rem] ~tw-size-[10.3rem]/[18.4rem]">
          <Image src={ShapelessBrown} alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
