import Image from "next/image";
import React from "react";
import ArrowSvg from "@/components/svg/ArrowSvg";
type Props = {
  name: string;
  className?: string;
};
const FaqTabList = ({ name, className }: Props) => {
  return (
    <>
      <p className="tw-font-playFair tw-font-medium group-hover:tw-italic tw-text-xl tw-tracking-[.02rem] ">
        {name}
      </p>
      <div className="tw-p-[0.375rem] group tw-text-white hover:tw-text-midGray">
        <ArrowSvg />
      </div>
    </>
  );
};

export default FaqTabList;
