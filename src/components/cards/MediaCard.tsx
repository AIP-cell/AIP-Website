import Image from "next/image";
import Src from "@public/images/mediaImage.png";
import React from "react";

const MediaCard = () => {
  return (
    <div className="tw-w-[18.438rem] tw-flex tw-flex-col tw-gap-[0.75rem]">
      <div className="tw-relative tw-w-full tw-h-[16.563rem] tw-overflow-hidden tw-rounded-2xl">
        <Image src={Src} alt="media-image" fill className="tw-object-cover"/>
      </div>
      <h4 className="tw-font-semibold tw-text-gray80 pt-[0.75rem]">
        Lorem ipsum dolor sit amet,
      </h4>
      <p className="tw-text-h9Copy5 tw-leading-[1.225rem] tw-text-gray50 ">
        Unique Approaches Towards Solving India’s Development Challenges by
        identifying and learning from organisations with systems change.
      </p>
      <div className="tw-bg-[#DFE0E5] tw-h-px"></div>
      <p className="tw-text-h9Copy5 tw-leading-[1.225rem] tw-text-gray50 ">
        11 Jul 2024
      </p>
    </div>
  );
};

export default MediaCard;
