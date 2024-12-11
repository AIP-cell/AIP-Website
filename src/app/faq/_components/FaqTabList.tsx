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
      <p className="font-playFair font-medium group-hover:italic text-xl tracking-[.02rem] ">
        {name}
      </p>
      <div className="p-[0.375rem] group text-white group-hover:text-midGray">
        <ArrowSvg />
      </div>
    </>
  );
};

export default FaqTabList;
