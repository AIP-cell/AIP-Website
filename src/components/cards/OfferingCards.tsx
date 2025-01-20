import React from "react";
import OvalPurple from "../ovals/OvalPurple";
import cn from "@/utils/tailwind";
import { ButtonAnimation } from "../animations/ButtonAnimation";
type Props = {
  desc: string;
  index: number;
  text1: string;
  text2: string;
  text3?: string;
};
const OfferingCard = ({ desc, index, text1, text2, text3 }: Props) => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-5 gap-[1.25rem]">
      <div
        className={cn("col-span-2  flex justify-center items-center", {
          "lg:order-2 ": index % 2 == 1,
        })}
      >
        <OvalPurple
          textClass2="font-playFair ~text-h4a/h4"
          textClass1="font-playFair ~text-h4a/h4 "
          textClass3="font-playFair ~text-h4a/h4"
          text1={text1}
          text2={text2}
          text3={text3}
          sizeClass="~size-[20rem]/[24.938rem]"
        />
      </div>
      <div
        className={cn("col-span-3  relative  h-full flex items-center", {
          "lg:order-1": index % 2 === 1,
        })}
      >
        <p className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]  text-midGray">
          {desc}
        </p>
        {/* <p className="leading-[1.4rem] text-gray80 pt-[2rem]">
          {text2}
        </p>
        {text3 && (
          <p className="leading-[1.4rem] text-gray80 pt-[2rem]">
            {text3}
          </p>
        )} */}
        {/* <div className=" pt-[2.5rem]">
          <ButtonAnimation className="border-2 hover:text-white hover:bg-darkPurple bg-white rounded-full font-medium border-darkPurple text-darkPurple py-[0.75rem] px-[1.75rem]">
            Read More
          </ButtonAnimation>
        </div> */}
      </div>
    </div>
  );
};

export default OfferingCard;
