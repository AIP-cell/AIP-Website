import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  title: string;
  desc: string;
};
const ImgTitleDescHor = ({ src, title, desc }: Props) => {
  return (
    <div className="col-span-1 flex justify-center items-center gap-[1.25rem]">
      <div className="relative shrink-0 w-[11.87rem] h-[8.75rem]">
        <Image src={src} alt="" fill />
      </div>
      <div className="flex flex-col gap-[0.75rem]">
          <h3 className="text-h3Heading3 text-gray80">{title}</h3>
          <h4 className="text-h9BodyCopy4 text-midGray">{desc}</h4>
      </div>
    </div>
  );
};

export default ImgTitleDescHor;
