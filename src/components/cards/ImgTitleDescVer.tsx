import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  title: string;
  title2?: string;
  titleClassName?: string;
  descClassName?: string;
  span?: string;
  imageWidth?: string;
  totalWidth?: string;
  desc: string;
};
const ImgTitleDescVer = ({
  src,
  title,
  title2,
  span,
  desc,
  titleClassName,
  descClassName,
  imageWidth,
  totalWidth,
}: Props) => {
  return (
    <div className={`flex flex-col  items-center gap-[0.75rem] ${totalWidth}`}>
      <div
        className={` ${imageWidth} relative ~w-[10rem]/[20rem] ~h-[7.5rem]/[8.75rem]`}
      >
        <Image src={src} alt="svg" fill />
      </div>
      <div>
        <h3
          className={` ${titleClassName} ~text-h4a/h3 text-darkGray text-center font-playFair md:-tracking-[4%] tracking-normal`}
        >
          {title}
          <span className="text-textPurple font-playFairItalic">
            &nbsp;{span}
          </span>
        </h3>
        <h3
          className={` ${titleClassName} ~text-h4a/h3 text-darkGray text-center font-playFair md:-tracking-[4%] tracking-normal`}
        >
          {title2}
        </h3>
      </div>
      <h4
        className={`${descClassName} ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-center text-midGray`}
      >
        {desc}
      </h4>
    </div>
  );
};

export default ImgTitleDescVer;
