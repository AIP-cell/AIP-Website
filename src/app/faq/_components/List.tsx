import React from "react";
import Image from "next/image";
import arrowWhiteSvg from "@public/svg/faq/arrowWhite.svg";
import arrowSvg from "@public/svg/faq/arrow.svg";
import cn from "@/utils/tailwind";
type Props = {
  name: string;
  className?: string;
};

const List = ({ name ,className}: Props) => {
  return (
    <div className={cn("bg-bgGray5 hover:bg-textPurple hover:text-white hover:font-playFairItalic  transition-all p-5 rounded-[1.25rem] flex justify-between mb-3 group",className)}>
      <p className="font-playFair font-medium group-hover:italic text-xl tracking-[.02rem] ">
        {name}
      </p>
      <div className="p-[0.375rem] group">
        <Image src={arrowSvg} alt="Arrow Image" className="group-hover:hidden" />
        <Image
          src={arrowWhiteSvg}
          alt="Arrow White Image"
          className="hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default List;
