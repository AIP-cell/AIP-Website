import cn from "@/utils/tailwind";
import Image from "next/image";
import React from "react";
import { ButtonAnimation } from "../animations/ButtonAnimation";
import { StorageUrl } from "@/utils/BaseUrl";
import Link from "next/link";
type Props = {
  title: string;
  desc: string;
  image: string;
  index: number;
  foundationName?: string;
  foundationNameClassName?: string;
  initiativeName?: string;
  isLinkOrPdf?: string;
  file?: string;
  fileLink?: string;
};
const CaseStudy = ({
  title,
  desc,
  image,
  index,
  foundationName,
  foundationNameClassName,
  initiativeName,
  isLinkOrPdf,
  file,
  fileLink,
}: Props) => {
  const link = isLinkOrPdf === "pdf" ? file : fileLink;
  const toDownload = isLinkOrPdf === "pdf" ? true : false;
  return (
    <div className="relative z-[100] grid grid-cols-1 lg:grid-cols-2 ~gap-[1rem]/[7.81rem]">
      <div
        className={cn(
          " col-span-1 flex justify-center  overflow-hidden lg:order-1",
          {
            "lg:!order-2": index % 2 === 0,
          }
        )}
      >
        <div className="w-full ~h-[17.5rem]/[20rem] rounded-3xl overflow-hidden relative ">
          <Image
            src={StorageUrl + image}
            alt="caseStudy-image"
            className="object-cover rounded-3xl h-fit"
            fill
          />
        </div>
      </div>
      <div
        className={cn("col-span-1 flex flex-col items-start lg:order-2", {
          "lg:!order-1 ": index % 2 === 0,
        })}
      >
        <h2 className="font-playFair ~text-h4a/h3 ~leading-[2.113rem]/[3.25rem] text-gray80">
          {title}
        </h2>
        <h3
          className={` text-gray40 font-playFairItalic ~text-h8Copy3/h5 ~leading-[1.575rem]/[1.75rem] pt-[0.25rem] ${foundationNameClassName}`}
        >
          {foundationName}
        </h3>
        {initiativeName && (
          <h3 className=" text-gray80 font-playFair font-medium ~text-h8Copy3/h5 ~leading-[1.575rem]/[1.75rem] ~pt-[1rem]/[1.25rem]">
            {initiativeName}
          </h3>
        )}
        <p className="text-midGray ~pt-[1rem]/[1.25rem] ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
          {desc}
        </p>
        <a
          href={link ?? ""}
          download={toDownload}
          className="~pt-[2rem]/[2.5rem]"
        >
          <ButtonAnimation className=" rounded-full  border-2 border-darkPurple hover:bg-darkPurple ">
            <h3 className="text-darkPurple hover:text-white font-medium text-h9Copy5 leading-[1.225rem] py-[0.75rem] px-[1.75rem]">
              Read More
            </h3>
          </ButtonAnimation>
        </a>
      </div>
    </div>
  );
};

export default CaseStudy;
