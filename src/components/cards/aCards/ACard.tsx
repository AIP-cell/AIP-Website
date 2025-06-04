import ASvg from "@/components/svg/ASvg";
import Image from "next/image";
import Linkedin from "@public/svg/grayLinkedin.svg";
import React from "react";
import Link from "next/link";
import cn from "@/utils/tailwind";
type Props = {
  slug?: string;
  image?: string;
  name?: string;
  nameClass?: string;
  work?: string;
  desc?: string;
  linkedin?: boolean;
  linkedinLink?: string;
  link?: string;
};
const ACard = ({
  slug,
  image,
  name,
  work,
  desc,
  nameClass,
  linkedin,
  linkedinLink,
  link,
}: Props) => {
  return (
    <div className="w-[18.43rem] relative ">
      {linkedinLink && linkedin && (
        <Link
          href={linkedinLink}
          target="_blank"
          className="absolute top-0 right-0 z-50"
        >
          <Image src={Linkedin} alt="" />
        </Link>
      )}
      <div className="w-[18.43rem] h-[21.56rem] relative">
        {slug ? (
          <Link href={`${link}`}>
            <ASvg
              src={image}
              className={cn("", {
                "cursor-pointer": slug,
              })}
            />
          </Link>
        ) : (
          <ASvg
            src={image}
            className={cn("", {
              "cursor-pointer": slug,
            })}
          />
        )}
      </div>
      <div className="flex flex-col gap-[0.75rem]">
        {slug ? (
          <Link
            href={`${link}`}
            className={`text-h4 leading-[2.6rem] text-gray80 font-playFair  ${nameClass}`}
          >
            {name}
          </Link>
        ) : (
          <div
            className={`text-h4 leading-[2.6rem] text-gray80 font-playFair  ${nameClass}`}
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
        ></div>
      </div>
    </div>
  );
};

export default ACard;
