import React from "react";
import Image from "next/image";
import OvalPeach from "@/components/ovals/OvalPeach";
import OvalPurple from "@/components/ovals/OvalPurple";
import Bg from "@public/svg/about/aip-impact/foundationFactBg.svg";
import Link from "next/link";
import OvalPeachCount from "@/components/ovals/OvalPeachCount";
type Props = {
  button?: string;
};
const SheetFoundationFacts = ({ button }: Props) => {
  return (
    <div className="relative w-full ~pt-[5rem]/[16rem]">
      <Image
        src={Bg}
        alt=""
        className="hidden lg:block h-[95rem]  absolute top-[-15rem] w-[500rem]"
      />
      <div className="relative container mx-auto ">
        <h2 className=" ~text-h4/h2 text-center font-playFair ~leading-[2.6rem]/[3.3rem]">
          Foundation{" "}
          <span className="text-textPurple font-playFairItalic">
            Facts
          </span>
        </h2>
        <div className="relative pb-[50.8rem]">
          <OvalPeach
            mainClass="absolute top-[2.5rem] ~left-0/[8.93rem]"
            text1="100"
            textClass1="text-h3 leading-[3.25rem]  font-semibold !text-black"
            sizeClass="~size-[14.25rem]/[17.38rem]"
            text2="Events"
            textClass2=" leading-[1.4rem] !text-gray80"
          />
          <OvalPeach
            mainClass="absolute flex w-full justify-center  top-[8.8rem] right-0 md:right-auto"
            text1="4"
            textClass1="text-h3 leading-[3.25rem] font-semibold !text-black"
            sizeClass="~size-[14.25rem]/[17.38rem]"
            text2="Founders"
            textClass2=" leading-[1.4rem] !text-gray80"
          />

          <OvalPeachCount
            mainClass="absolute top-[6.3rem] ~right-0/[8rem]"
            countEnd={20}
            sizeClass="~size-[14.25rem]/[17.38rem]"
            text2="Founders"
            textClass2=" leading-[1.4rem] "
          />

          <OvalPurple
            mainClass="absolute  top-[21rem] right-0 md:right-auto md:left-[16.24rem] "
            text1="31"
            textClass1="text-h3 leading-[3.25rem] font-semibold "
            sizeClass="~size-[14.25rem]/[17.38rem]"
            text2="Network"
            textClass2=" leading-[1.4rem]"
            text3="Members"
            textClass3=" leading-[1.4rem]"
          />
          <OvalPurple
            mainClass="absolute top-[25rem] flex   left-0 md:left-auto md:!right-[21rem] "
            text1="3"
            textClass1="text-h3 leading-[3.25rem] font-semibold "
            sizeClass="~size-[14.25rem]/[17.38rem]"
            text2="Continents"
            textClass2=" font-bold text-h6Copy1 leading-[2.1rem]  "
            text3="Footprint"
            textClass3=" leading-[1.4rem]"
            textParentClass="!pt-0"
          />
        </div>
        {/* pt-[47rem] */}
        {button && (
          <div className="flex justify-center absolute bottom-0 w-full ">
            <Link
              href="/about/aip-impact/foundation-fact-sheet"
              className="bg-darkPurple rounded-full"
            >
              <p className="px-[1.75rem] py-[0.75rem] text-white leading-[1.4rem]">
                {button}
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SheetFoundationFacts;
