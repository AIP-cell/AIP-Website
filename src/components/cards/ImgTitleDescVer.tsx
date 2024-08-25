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
    <div className="tw-flex tw-flex-col  tw-items-center tw-gap-[0.75rem]">
      <div className="tw-relative tw-w-[11.87rem] tw-h-[8.75rem]">
        <Image src={src} alt="svg" fill />
      </div>
      <h3
        className={` ${titleClassName} tw-text-h3Heading3 tw-text-darkGray tw-font-playFair tw--tracking-[4%]`}
      >
        {title} <i className="tw-text-textPurple">{span}</i>
      </h3>
      <h4
        className={`${descClassName} tw-text-h9BodyCopy4 tw-text-center tw-text-midGray`}
      >
        {desc}
      </h4>
    </div>
  );
};

export default ImgTitleDescVer;
