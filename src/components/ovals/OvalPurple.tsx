import Image from "next/image";
import React from "react";
import OvalPurpleSvg from "../svg/OvalPurpleSvg";
type Props = {
  title?: string;
  desc?: string;
  Class?: string;
  textClass1: string;
  textClass2: string;
};
const OvalPurple = ({ title, desc, Class, textClass1, textClass2 }: Props) => {
  return (
    <div className={` ${Class} `}>
      <div className="tw-relative tw-shrink-0 tw-size-[17.3rem] tw-flex tw-flex-col tw-justify-center tw-items-center">
        <Image src="/svg/ovalPurple.svg" alt="image" fill />
        {/* <OvalPurpleSvg /> */}
        <div className={` ${textClass1}  tw-text-white tw-z-50`}>{title}</div>
        <div
          className={` ${textClass2}  tw-text-white tw-pt-[0.25rem] tw-z-50`}
        >
          {desc}
        </div>
      </div>
    </div>
  );
};

export default OvalPurple;
