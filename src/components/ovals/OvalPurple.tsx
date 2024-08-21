import Image from "next/image";
import React from "react";
type Props = {
  title: string;
  desc: string;
  absoluteClass: string;
};
const OvalPurple = ({ title, desc, absoluteClass }: Props) => {
  return (
    <div className={`absolute ${absoluteClass} `}>
      <div className="relative shrink-0 size-[17.3rem] flex flex-col justify-center items-center">
        <Image src="/svg/ovalPurple.svg" alt="image" fill />
          <div className="text-h3Heading3 text-white z-50">{title}</div>
          <div className="text-h9BodyCopy4 text-white pt-[0.25rem] z-50">{desc}</div>
      </div>
    </div>
  );
};

export default OvalPurple;
