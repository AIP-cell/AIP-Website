import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  title: string;

  desc: string;
};
const ResourceCard = ({
  src,
  title,

  desc,
}: Props) => {
  return (
    // tw-justify-center
    <div className="tw-flex tw-flex-col  tw-items-center tw-gap-[0.75rem]">
      <div className="tw-relative tw-w-full tw-h-[16.594rem]">
        <Image src={src} alt="svg" fill />
      </div>
      <p className="tw-text-h6Heading6M tw-text-gray80 tw-font-inter tw-font-semibold tw-leading-[1.575rem]">
        {title}
      </p>
      <h4 className="tw-text-h9BodyCopy5  tw-text-gray50">{desc}</h4>
        <div className="tw-h-px tw-bg-footerGray tw-w-full"></div>
      <div className="tw-flex tw-justify-end">
        <p>11 Jul 2024</p>
        <p>Field/Sector</p>
      </div>
      <div className="tw-h-px tw-bg-footerGray tw-w-full"></div>
      <div></div>
    </div>
  );
};

export default ResourceCard;
