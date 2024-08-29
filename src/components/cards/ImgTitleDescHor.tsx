import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  title: string;
  desc: string;
};
const ImgTitleDescHor = ({ src, title, desc }: Props) => {
  return (
    <div className="tw-col-span-1 tw-flex tw-justify-center tw-items-center tw-gap-[1.25rem]">
      <div className="tw-relative tw-shrink-0 tw-w-[11.87rem] tw-h-[8.75rem]">
        <Image src={src} alt="" fill />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-[0.75rem]">
          <h3 className="tw-text-h3 tw-text-gray80">{title}</h3>
          <h4 className="tw-text-h9Copy4 tw-text-midGray">{desc}</h4>
      </div>
    </div>
  );
};

export default ImgTitleDescHor;
