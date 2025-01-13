import PSvg from "@/components/svg/PSvg";
import Image from "next/image";
import Linkedin from "@public/svg/grayLinkedin.svg";
import React from "react";
import Link from "next/link";
type Props = {
  slug?: string;
  image?: string;
  name?: string;
  work?: string;
  desc?: string;
  nameClass?: string;
  linkedin?: boolean;
  link?: string;
};
const PCard = ({
  slug,
  image,
  name,
  work,
  desc,
  nameClass,
  linkedin,
  link,
}: Props) => {
  return (
    <div className="w-[18.43rem] relative ">
      {linkedin && (
        <Image src={Linkedin} alt="" className="absolute top-0 right-0" />
      )}
        <div className="w-[18.43rem] h-[21.56rem] relative">
          <div className="w-[18.43rem] h-[21.56rem] relative">
            <PSvg src={image} className=" w-[18.43rem] h-[21.56rem]" />
            {/* <Image src={image} alt="" fill /> */}
          </div>
        </div>
      <div className="flex flex-col gap-[0.75rem]">
        {slug ? (
          <Link
            href={`${link}`}
            className={`text-h4 leading-[2.6rem] text-gray80 font-playFair ${nameClass}`}
          >
            {name}
          </Link>
        ) : (
          <div
            className={`text-h4 leading-[2.6rem] text-gray80 font-playFair ${nameClass}`}
          >
            {name}
          </div>
        )}
        <h4 className="text-h5 font-playFair text-gray50 font-medium italic">
          {work}
        </h4>
        <div
          dangerouslySetInnerHTML={{ __html: desc || "" }}
          className="text-h9Copy4 leading-[1.4rem] font-inter line-clamp-5 text-ellipsis text-midGray"
        >
          {/* {desc} */}
        </div>
      </div>
    </div>
  );
};

export default PCard;
