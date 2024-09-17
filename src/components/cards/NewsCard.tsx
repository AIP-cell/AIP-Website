import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  text: string;
};
const NewsCard = ({ src, text }: Props) => {
  return (
    // ~tw-w-[16rem]/[25rem]
    <div className="tw-flex tw-flex-col  tw-gap-[1.25rem] tw-shrink-0 tw-grow-0">
      <div className="tw-relative tw-w-full ~tw-h-[14.8rem]/[22.5rem] tw-rounded-2xl tw-overflow-hidden">
        <Image src={src} alt="" fill />
      </div>
      <div className={`tw-font-inter ~tw-text-h9Copy5/h8Copy3 ~tw-leading-[1.225rem]/[1.575rem]`}>{text}</div>
    </div>
  );
};

export default NewsCard;
