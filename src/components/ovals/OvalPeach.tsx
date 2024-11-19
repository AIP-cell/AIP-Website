import Image from "next/image";
import React from "react";
import OvalPeachSvg from "@public/svg/ovalPeach.svg";

type Props = {
  text1?: string;
  text2?: string;
  text3?: string;
  mainClass?: string;
  textClass1: string;
  textClass2?: string;
  textClass3?: string;
  textParentClass?: string;
  sizeClass: string;
};
const OvalPeach = ({
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
    <div className={` ${mainClass} `}>
      <div
        className={` ${sizeClass} tw-relative tw-shrink-0   tw-flex tw-flex-col tw-justify-center tw-items-center`}
      >
        <Image src={OvalPeachSvg} alt="image" fill />
        {/* <OvalPurpleSvg /> */}
        <div className={` ${textClass1}  tw-text-white tw-z-50`}>{text1}</div>
        <div
          className={`tw-text-center tw-pt-[0.25rem] tw-z-50 tw-text-gray80 ${textParentClass}`}
        >
          <div className={` ${textClass2} `}>{text2}</div>
          <div className={` ${textClass3} `}>{text3}</div>
        </div>
      </div>
    </div>
  );
};

export default OvalPeach;
