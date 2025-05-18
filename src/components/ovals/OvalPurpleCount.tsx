"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
type Props = {
  countEnd: number;
  text2?: string;
  text3?: string;
  mainClass?: string;
  countClass?: string;
  textClass2?: string;
  textClass3?: string;
  sizeClass: string;
};
const OvalPurpleCount = ({
  countEnd,
  text2,
  text3,
  mainClass,
  countClass,
  textClass2,
  textClass3,
  sizeClass,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={` ${mainClass} `}>
      <div
        className={` ${sizeClass} relative shrink-0   flex flex-col justify-center items-center`}
      >
        <Image src="/svg/ovalPurple.svg" alt="image" fill />
        <div className={`text-black z-50 ${countClass}`}>
          {inView && (
            <CountUp
              start={0}
              end={countEnd}
              duration={2.75}
              className="~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-semibold text-white"
            />
          )}
          <span className=" ~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-semibold text-white">
            +
          </span>
        </div>
        <div className={`text-center pt-[0.25rem] z-50  `}>
          <div className={`text-white ${textClass2} `}>{text2}</div>
          <div className={`text-white ${textClass3} `}>{text3}</div>
        </div>
      </div>
    </div>
  );
};

export default OvalPurpleCount;
