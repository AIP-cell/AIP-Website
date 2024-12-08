import Image from "next/image";
import React from "react";
import PlayButtonPurple from "@public/svg/playButtonPurple.svg";

type Props = {
  src: string;
  ddmmyy: string;
  desc: string;
  desc2?: string;
};
const GalleryVideo = ({ src, ddmmyy, desc, desc2 }: Props) => {
  return (
    <div>
      <div className="tw-relative tw-shrink-0 ~tw-w-[21.8rem]/[31.5rem] ~tw-h-[14.3rem]/[20.698rem] tw-rounded-xl tw-overflow-hidden tw-flex tw-items-center tw-justify-center">
        <Image src={src} alt="" fill className="tw-object-cover tw-z-10" />
        <Image
          src={PlayButtonPurple}
          alt=""
          className="tw-z-20 hover:tw-scale-105 tw-transition-all tw-duration-150 tw-cursor-pointer tw-size-[3.312rem]"
        />
      </div>
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between ~tw-gap-[0.25rem]/[3rem] ~tw-pt-[1rem]/[0.75rem]">
        <div className="tw-leading-[1.4rem] tw-font-bold  tw-text-midGray">
          <p className="">{desc}</p>
          <p className="">{desc2}</p>
        </div>
        <p className="tw-leading-[1.4rem] tw-text-midGray">{ddmmyy}</p>
      </div>
    </div>
  );
};

export default GalleryVideo;
