"use client";
import Image from "next/image";
import React from "react";
import OvalPeachSvg from "@public/svg/ovalPeach.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
type Props = {
  countEnd: number;
  text2?: string;
  mainClass?: string;
  countEndClass?: string;
  textClass2?: string;
  sizeClass: string;
};
const OvalPeachCount = ({
  countEnd,
  text2,
  mainClass,
  countEndClass,
  textClass2,
  sizeClass,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div ref={ref} className={` ${mainClass} `}>
      <div
        className={` ${sizeClass} tw-relative tw-shrink-0   tw-flex tw-flex-col tw-justify-center tw-items-center`}
      >
        <Image src={OvalPeachSvg} alt="image" fill />
        {/* <OvalPurpleSvg /> */}
        <div className="tw-text-black tw-z-50">
          {inView && (
            <CountUp
              start={0}
              end={countEnd}
              duration={2.75}
              className="~tw-text-h4/h3 ~tw-leading-[2.6rem]/[3.25rem] tw-font-semibold "
            />
          )}
          <span className=" ~tw-text-h4/h3 ~tw-leading-[2.6rem]/[3.25rem] tw-font-semibold">
            +
          </span>
        </div>
        <div
          className={`tw-text-center tw-pt-[0.25rem] tw-z-50 tw-text-gray80 `}
        >
          <div className={` ${textClass2} `}>{text2}</div>
        </div>
      </div>
    </div>
  );
};

export default OvalPeachCount;
