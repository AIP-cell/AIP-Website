import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  text: string;
};
const NewsCard = ({ src, text }: Props) => {
  return (
    <div className="tw-flex tw-flex-col tw-w-[25rem] tw-gap-[1.25rem] ">
      <div className="tw-relative tw-w-full tw-h-[22.5rem] tw-rounded-2xl tw-overflow-hidden">
        <Image src={src} alt="" fill />
      </div>
      <div className={`tw-font-inter tw-text-h8Copy3`}>{text}</div>
    </div>
  );
};

export default NewsCard;
