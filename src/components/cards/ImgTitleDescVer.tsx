import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  title: string;
  span: string;
  desc: string;
};
const ImgTitleDescVer = ({ src, title, span, desc }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[0.75rem]">
      <div className="relative w-[11.87rem] h-[8.75rem]">
        <Image src={src} alt="" fill />
      </div>
      <h3 className="text-h3Heading3 text-darkGray font-playFair -tracking-[4%]">
        {title} <i className="text-textPurple">{span}</i>
      </h3>
      <h4 className="text-h9BodyCopy4 text-center text-midGray">{desc}</h4>
    </div>
  );
};

export default ImgTitleDescVer;
