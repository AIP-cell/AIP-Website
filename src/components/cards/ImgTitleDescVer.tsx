import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  title: string;
  title2?: string;
  titleClassName?: string;
  descClassName?: string;
  span?: string;
  imageWidth?: string;
  totalWidth?: string;
  desc: string;
};
const ImgTitleDescVer = ({
  src,
  title,
  title2,
  span,
  desc,
  titleClassName,
  descClassName,
  imageWidth,
  totalWidth,
}: Props) => {
  return (
    // tw-justify-center
    <div
      className={`tw-flex tw-flex-col  tw-items-center ~tw-gap-[0.5rem]/[0.75rem] ${totalWidth}`}
    >
      <div
        className={` ${imageWidth} tw-relative ~tw-w-[10rem]/[20rem] ~tw-h-[7.5rem]/[8.75rem]`}
      >
        <Image src={src} alt="svg" fill />
      </div>
      <div>
        <h3
          className={` ${titleClassName} ~tw-text-h4a/h3 tw-text-darkGray tw-text-center tw-font-playFair md:tw--tracking-[4%] tw-tracking-normal`}
        >
          {title}
          <span className="tw-text-textPurple tw-font-playFairItalic">
            &nbsp;{span}
          </span>
        </h3>
        <h3
          className={` ${titleClassName} ~tw-text-h4a/h3 tw-text-darkGray tw-text-center tw-font-playFair md:tw--tracking-[4%] tw-tracking-normal`}
        >
          {title2}
        </h3>
      </div>
      <h4
        className={`${descClassName} ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem] tw-text-center tw-text-midGray`}
      >
        {desc}
      </h4>
    </div>
  );
};

export default ImgTitleDescVer;
