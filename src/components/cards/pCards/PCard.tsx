import PSvg from "@/components/svg/PSvg";
import Image from "next/image";
import Linkedin from "@public/svg/grayLinkedin.svg";
import React from "react";
type Props = {
  image?: string;
  name: string;
  work: string;
  desc: string;
  nameClass?: string;
  linkedin?: boolean;
};
const PCard = ({ image, name, work, desc, nameClass, linkedin }: Props) => {
  return (
    <div className="w-[18.43rem] relative ">
      {linkedin && (
        <Image
          src={Linkedin}
          alt=""
          className="absolute top-0 right-0"
        />
      )}
      {image && (
        <div className="w-[18.43rem] h-[21.56rem] relative">
          <div className="w-[18.43rem] h-[21.56rem] relative">
            <PSvg src={image} className=" w-[18.43rem] h-[21.56rem]" />
            {/* <Image src={image} alt="" fill /> */}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-[0.75rem]">
        <h3
          className={`text-h4 leading-[2.6rem] text-gray80 font-playFair ${nameClass}`}
        >
          {name}
        </h3>
        <h4 className="text-h5 font-playFair text-gray50 font-medium italic">
          {work}
        </h4>
        <p className="text-h9Copy4 leading-[1.4rem] font-inter line-clamp-5 text-ellipsis text-midGray">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default PCard;
