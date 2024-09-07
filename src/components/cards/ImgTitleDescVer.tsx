import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  title: string;
  titleClassName?: string;
  descClassName?: string;
  span?: string;
  desc: string;
};
const ImgTitleDescVer = ({
  src,
  title,
  span,
  desc,
  titleClassName,
  descClassName,
}: Props) => {
  return (
    // tw-justify-center
    <div className="tw-flex tw-flex-col  tw-items-center ~tw-gap-[0.5rem]/[0.75rem]">
      <div className="tw-relative ~tw-w-[10rem]/[11.87rem] ~tw-h-[7.5rem]/[8.75rem]">
        <Image src={src} alt="svg" fill />
      </div>
      <h3
        className={` ${titleClassName} ~tw-text-h4a/h3 tw-text-darkGray tw-font-playFair md:tw--tracking-[4%] tw-tracking-normal`}
      >
        {title}
        <span className="tw-text-textPurple tw-font-playFairItalic">
          {span}
        </span>
      </h3>
      <h4
        className={`${descClassName} ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem] tw-text-center tw-text-midGray`}
      >
        {desc}
      </h4>
    </div>
  );
};

export default ImgTitleDescVer;
