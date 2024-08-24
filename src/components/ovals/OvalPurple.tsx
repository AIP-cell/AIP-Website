import Image from "next/image";
import React from "react";
import OvalPurpleSvg from "../svg/OvalPurpleSvg";
type Props = {
  title: string;
  desc: string;
  absoluteClass: string;
};
const OvalPurple = ({ title, desc, absoluteClass }: Props) => {
  return (
    <div className={`tw-absolute ${absoluteClass} `}>
      <div className="tw-relative tw-shrink-0 tw-size-[17.3rem] tw-flex tw-flex-col tw-justify-center tw-items-center">
        {/* <Image src="/svg/ovalPurple.svg" alt="image" fill /> */}
        <OvalPurpleSvg />
        <div className="tw-text-h3Heading3 tw-text-white tw-z-50">{title}</div>
        <div className="tw-text-h9BodyCopy4 tw-text-white tw-pt-[0.25rem] tw-z-50">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default OvalPurple;
