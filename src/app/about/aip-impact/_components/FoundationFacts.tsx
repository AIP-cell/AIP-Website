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
const FoundationFacts = ({ button }: Props) => {
  return (
    <div className="relative w-full ~pt-[5rem]/[16rem]">
      <Image
        src={Bg}
        alt=""
        className="block h-[95rem] object-cover md:object-none absolute ~top-[-22rem]/[-15rem] w-[500rem]"
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
            textClass1="~text-h4/h3 ~leading-[2.6rem]/[3.25rem]  font-semibold !text-black"
            sizeClass="~size-[14.2rem]/[17.38rem]"
            text2="Events"
            textClass2="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] "
          />
          <OvalPurple
            mainClass="absolute flex md:w-full justify-center  top-[8.8rem] !right-0 md:right-auto"
            text1="4"
            textClass1="~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-semibold"
            sizeClass="~size-[14.2rem]/[17.38rem]"
            text2="Core Founders"
            textClass2=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] "
          />
          <OvalPeachCount
            mainClass="absolute top-[17rem] md:~top-[5.8rem]/[6.3rem] left-0 md:left-auto md:~right-0/[8rem]"
            countEnd={20}
            sizeClass="~size-[14.2rem]/[17.38rem]"
            text2="Founders"
            textClass2=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] !text-black"
          />

          {/* <OvalPurple
            mainClass="absolute  top-[19.75rem] right-0 md:right-auto md:left-[7.18rem] "
            text1="100"
            textClass1="text-h3 leading-[3.25rem] font-semibold "
            sizeClass="~size-[14.25rem]/[17.38rem]"
            text2="Network"
            textClass2=" leading-[1.4rem]"
            text3="Members"
            textClass3=" leading-[1.4rem]"
          /> */}
          {/* <OvalPeach
            mainClass="absolute top-[26.688rem] flex w-full justify-center left-0 md:left-auto md:right-[3rem]"
            text1="3"
            textClass1="text-h3 leading-[3.25rem] font-semibold !text-gray80"
            sizeClass="~size-[14.25rem]/[17.38rem]"
            text2="Continents"
            textClass2="font-bold text-h6Copy1 leading-[2.1rem] text-gray80 "
            text3="Footprint"
            textClass3=" leading-[1.4rem] "
            textParentClass="!pt-0"
          />
          <OvalPurple
            mainClass="absolute  top-[22.875rem] ~right-0/[11.75rem]"
            text1="7833"
            textClass1="text-h3 leading-[3.25rem] font-semibold"
            sizeClass="~size-[14.25rem]/[17.38rem]"
            text2="Knowledge"
            textClass2=" leading-[1.4rem]"
            text3="Products"
            textClass3=" leading-[1.4rem]"
          /> */}
          <OvalPurple
            mainClass="absolute  ~top-[25rem]/[21rem] right-0 md:right-auto md:~left-[2rem]/[16.24rem] "
            text1="31"
            textClass1="~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-semibold "
            sizeClass="~size-[14.2rem]/[17.38rem]"
            text2="Network"
            textClass2=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]"
            text3="Members"
            textClass3=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]"
          />
          <OvalPurple
            mainClass="absolute top-[34rem] md:~top-[30rem]/[25rem] flex   left-0 md:left-auto ~md:!~right-[5rem]/[21rem] "
            text1="3"
            textClass1="~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-semibold "
            sizeClass="~size-[14.2rem]/[17.38rem]"
            text2="Continents"
            textClass2=" font-bold text-h6Copy1 leading-[2.1rem]  "
            text3="Footprint"
            textClass3=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]"
            textParentClass="!pt-0"
          />
        </div>
        {/* pt-[47rem] */}
        {button && (
          <div className="flex justify-center absolute ~bottom-[-2rem]/0 w-full ">
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

export default FoundationFacts;
