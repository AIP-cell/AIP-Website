"use client";
import Image from "next/image";
import React from "react";
import OvalPeachSvg from "@public/svg/ovalPeach.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
type Props = {
  countEnd: number;
  text2?: string;
  text3?: string;
  mainClass?: string;
  countEndClass?: string;
  textClass2?: string;
  textClass3?: string;
  sizeClass: string;
};
const OvalPeachCount = ({
  countEnd,
  text2,
  text3,
  mainClass,
  countEndClass,
  textClass2,
  textClass3,
  sizeClass,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div ref={ref} className={` ${mainClass} `}>
      <div
        className={` ${sizeClass} relative shrink-0   flex flex-col justify-center items-center`}
      >
        <Image src={OvalPeachSvg} alt="image" fill />
        {/* <OvalPurpleSvg /> */}
        <div className="text-black z-50">
          {inView && (
            <CountUp
              start={0}
              end={countEnd}
              duration={2.75}
              className="~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-semibold "
            />
          )}
          <span className=" ~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-semibold">
            +
          </span>
        </div>
        <div
          className={`text-center pt-[0.25rem] z-50 text-gray80 `}
        >
          <div className={` ${textClass2} `}>{text2}</div>
          <div className={` ${textClass3} `}>{text3}</div>
        </div>
      </div>
    </div>
  );
};

export default OvalPeachCount;
