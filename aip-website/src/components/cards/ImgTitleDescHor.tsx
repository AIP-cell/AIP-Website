import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  title: string;
  desc: string;
};
const ImgTitleDescHor = ({ src, title, desc }: Props) => {
  return (
    <div className="col-span-2 md:col-span-1 flex flex-col md:flex-row flex-grow justify-center items-center ~gap-[0.5rem]/[1.25rem]">
      <div className="relative shrink-0 ~w-[10.3rem]/[11.87rem] ~h-[7.5rem]/[8.75rem]">
        <Image src={src} alt="" fill />
      </div>
      <div className="flex flex-col gap-[0.75rem] text-center md:text-start grow ">
          <h3 className="~text-h4a/h3 text-gray80 font-playFair">{title}</h3>
          <h4 className="~text-h9Copy5/h9Copy4 text-midGray">{desc}</h4>
      </div>
    </div>
  );
};

export default ImgTitleDescHor;
