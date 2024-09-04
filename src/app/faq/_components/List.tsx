import React from "react";
import Image from "next/image";
import arrowWhiteSvg from "@public/svg/faq/arrowWhite.svg";
import arrowSvg from "@public/svg/faq/arrow.svg";
type Props = {
  name: string;
};

const List = ({ name }: Props) => {
  return (
    <div className="tw-bg-bgGray5 hover:tw-bg-textPurple hover:tw-text-white hover:tw-font-playFairItalic  tw-transition-all tw-p-5 tw-rounded-[1.25rem] tw-flex tw-justify-between tw-mb-3 tw-group">
      <p className="tw-font-playFair tw-font-medium group-hover:tw-italic tw-text-xl tw-tracking-[.02rem] ">
        {name}
      </p>
      <div className="tw-p-[0.375rem] group">
        <Image src={arrowSvg} alt="Arrow Image" className="group-hover:tw-hidden" />
        <Image
          src={arrowWhiteSvg}
          alt="Arrow White Image"
          className="tw-hidden group-hover:tw-block"
        />
      </div>
    </div>
  );
};

export default List;
