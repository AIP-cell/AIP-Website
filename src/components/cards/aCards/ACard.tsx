import Image from "next/image";
import React from "react";
type Props = {
  image?: string;
  name: string;
  work: string;
  desc: string;
};
const ACard = ({ image, name, work, desc }: Props) => {
  return (
    <div className="tw-w-[18.43rem] tw-relative ">
      {image && <div className="tw-w-[18.43rem] tw-h-[21.56rem] tw-relative"><Image src={image} alt="" fill /></div>}
      <div className="tw-flex tw-flex-col tw-gap-[0.75rem]">
        <h3 className="tw-text-h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair">
          {name}
        </h3>
        <h4 className="tw-text-h5 tw-font-playFair tw-text-gray50 tw-font-medium tw-italic">
          {work}
        </h4>
        <p className="tw-text-h9Copy4 tw-leading-[1.4rem] tw-font-inter ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ACard;
