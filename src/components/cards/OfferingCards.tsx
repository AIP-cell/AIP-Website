import React from "react";
import OvalPurple from "../ovals/OvalPurple";
import cn from "@/utils/tailwind";
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
      </div>
    </div>
  );
};

export default OfferingCard;
