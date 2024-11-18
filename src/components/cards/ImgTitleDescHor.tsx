import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  title: string;
  desc: string;
};
const ImgTitleDescHor = ({ src, title, desc }: Props) => {
  return (
    <div className="tw-col-span-2 md:tw-col-span-1 tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center ~tw-gap-[0.5rem]/[1.25rem]">
      <div className="tw-relative tw-shrink-0 ~tw-w-[10.3rem]/[11.87rem] ~tw-h-[7.5rem]/[8.75rem]">
        <Image src={src} alt="" fill />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-[0.75rem] tw-text-center md:tw-text-start">
          <h3 className="~tw-text-h4a/h3 tw-text-gray80 tw-font-playFair">{title}</h3>
          <h4 className="~tw-text-h9Copy5/h9Copy4 tw-text-midGray">{desc}</h4>
      </div>
    </div>
  );
};

export default ImgTitleDescHor;
