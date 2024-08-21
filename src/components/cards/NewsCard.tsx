import Image from "next/image";
import React from "react";
type Props = {
  src: string;
  text: string;
};
const NewsCard = ({ src, text }: Props) => {
  return (
    <div className="flex flex-col w-[25rem] gap-[1.25rem] ">
      <div className="relative w-full h-[22.5rem] rounded-2xl overflow-hidden">
        <Image src={src} alt="" fill />
      </div>
      <div className={`font-inter text-h8BodyCopy3`}>{text}</div>
    </div>
  );
};

export default NewsCard;
