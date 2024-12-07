import React from "react";
import OvalPurple from "../ovals/OvalPurple";
import cn from "@/utils/tailwind";
import { ButtonAnimation } from "../animations/ButtonAnimation";
type Props = {
  text1: string;
  text2?: string;
  text3?: string;
  index: number;
};
const OfferingCard = ({ text1, text2, text3, index }: Props) => {
  return (
    <div className=" tw-grid tw-grid-cols-1 md:tw-grid-cols-5 tw-gap-[1.25rem]">
      <div
        className={cn(
          "tw-col-span-2 ~tw-size-[20rem]/[24.938rem] tw-justify-center tw-items-center",
          {
            "md:tw-order-2 ": index % 2 == 1,
          }
        )}
      >
        <OvalPurple
          textClass2="tw-font-playFair ~tw-text-h4a/h4"
          textClass1="tw-font-playFair ~tw-text-h4a/h4 "
          text1="Networking &"
          text2="Convening"
          sizeClass="~tw-size-[20rem]/[24.938rem]"
        />
      </div>
      <div
        className={cn(
          "tw-col-span-3  tw-relative  tw-h-full tw-flex tw-items-center",
          {
            "md:tw-order-1": index % 2 === 1,
          }
        )}
      >
        <p className="~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]  tw-text-midGray">
          {text1}
        </p>
        {/* <p className="tw-leading-[1.4rem] tw-text-gray80 tw-pt-[2rem]">
          {text2}
        </p>
        {text3 && (
          <p className="tw-leading-[1.4rem] tw-text-gray80 tw-pt-[2rem]">
            {text3}
          </p>
        )} */}
        {/* <div className=" tw-pt-[2.5rem]">
          <ButtonAnimation className="tw-border-2 hover:tw-text-white hover:tw-bg-darkPurple tw-bg-white tw-rounded-full tw-font-medium tw-border-darkPurple tw-text-darkPurple tw-py-[0.75rem] tw-px-[1.75rem]">
            Read More
          </ButtonAnimation>
        </div> */}
      </div>
    </div>
  );
};

export default OfferingCard;
