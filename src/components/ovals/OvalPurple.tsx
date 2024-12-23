import Image from "next/image";
import React from "react";
// import OvalPurpleSvg from "../svg/OvalPurpleSvg";
type Props = {
  text1?: string | number;
  text2?: string;
  text3?: string;
  mainClass?: string;
  textClass1: string;
  textClass2?: string;
  textClass3?: string;
  textParentClass?: string;
  sizeClass: string;
};
const OvalPurple = ({
  text1,
  text2,
  text3,
  mainClass,
  textClass1,
  textClass2,
  textClass3,
  textParentClass,
  sizeClass,
}: Props) => {
  return (
    <div className={` ${mainClass} shrink-0`}>
      <div
        className={` ${sizeClass} relative shrink-0 flex flex-col justify-center items-center`}
      >
        <Image src="/svg/ovalPurple.svg" alt="image" fill />
        {/* <OvalPurpleSvg /> */}
        <div className={` ${textClass1}  text-white z-50`}>{text1}</div>
        <div
          className={`text-center pt-[0.25rem] z-50 text-white ${textParentClass}`}
        >
          <div className={` ${textClass2} `}>{text2}</div>
          <div className={` ${textClass3} `}>{text3}</div>
        </div>
      </div>
    </div>
  );
};

export default OvalPurple;
