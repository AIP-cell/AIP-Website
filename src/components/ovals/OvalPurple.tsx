import Image from "next/image";
import React from "react";
import OvalPurpleSvg from "../svg/OvalPurpleSvg";
type Props = {
  text1?: string;
  text2?: string;
  mainClass?: string;
  textClass1: string;
  textClass2: string;
  sizeClass: string;
};
const OvalPurple = ({
  text1,
  text2,
  mainClass,
  textClass1,
  textClass2,
  sizeClass,
}: Props) => {
  return (
    <div className={` ${mainClass} tw-shrink-0`}>
      <div
        className={` ${sizeClass} tw-relative tw-shrink-0 tw-flex tw-flex-col tw-justify-center tw-items-center`}
      >
        <Image src="/svg/ovalPurple.svg" alt="image" fill />
        {/* <OvalPurpleSvg /> */}
        <div className={` ${textClass1}  tw-text-white tw-z-50`}>{text1}</div>
        <div
          className={` ${textClass2}  tw-text-white tw-pt-[0.25rem] tw-z-50`}
        >
          {text2}
        </div>
      </div>
    </div>
  );
};

export default OvalPurple;
