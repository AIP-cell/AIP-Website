import React from "react";
import audio from "@public/images/aSample.png";
import cn from "@/utils/tailwind";
import PlaySvg from "@/components/svg/PlaySvg";
import { TSearch } from "@/api/type";
import { StorageUrl } from "@/utils/BaseUrl";
import Image from "next/image";

type Props = {
  index: number;
  searchData: TSearch[];
  title?: string;
  description?: string;
  initiativeName?: string;
  designation?: string;
  organisationName?: string;
  image?: string;
  video?: string;
};
const ContentOne = ({
  index,
  searchData,
  title,
  description,
  initiativeName,
  designation,
  organisationName,
  image,
  video,
}: Props) => {
  const arrayLength = searchData.length;
  return (
    <div
      className={cn(
        "border-b-2 border-[#DFE0E5]",
        {
          "border-none": index === arrayLength - 1,
        },
        {
          "border-none":
            title == undefined &&
            initiativeName == undefined &&
            designation == undefined,
        }
      )}
    >
      {title && title != "" && (
        <h3 className="~text-h5/h4a font-playFair text-gray80 leading-[2.1rem] pt-[1.5rem]">
          {title}
        </h3>
      )}
      {initiativeName && initiativeName != "" && (
        <p className="~text-h9Copy5/h9Copy4 font-playFair text-gray80 leading-[2.1rem] pt-[1.5rem]">
          {initiativeName}
        </p>
      )}
      {designation && designation != "" && (
        <p className="~text-h9Copy5/h9Copy4 font-playFair text-gray80 leading-[2.1rem] pt-[1.5rem]">
          {designation}
        </p>
      )}
      {organisationName && organisationName != "" && (
        <p className="~text-h9Copy5/h9Copy4 font-playFair text-gray80 leading-[2.1rem] pt-[1.5rem]">
          {organisationName}
        </p>
      )}
      <div
        className={cn(
          "flex gap-[1.25rem] ",
          {
            "pt-[1rem] pb-[1.5rem]":
              (image && image != "") ||
              (video && video != "") ||
              (description && description != ""),
          },
          {
            "flex-col md:flex-row": video,
          }
        )}
      >
        {image && image != "" && (
          <div className="shrink-0 relative ~w-[4.28rem]/[3rem] ~h-[4.548rem]/[4.3rem]">
            <Image
              src={StorageUrl + image}
              alt=""
              className="object-contain w-full h-full"
              fill
            />
          </div>
        )}
        {video && video != "" && (
          <div className="shrink-0 flex justify-center items-center w-[18.4rem] h-[10.37rem] rounded-3xl bg-gray80">
            <div className="rounded-full size-[4rem] bg-textPurple flex justify-center items-center">
              <PlaySvg className="size-[2.4rem]" />
            </div>
          </div>
        )}
        {description && description != "" && (
          <div
            dangerouslySetInnerHTML={{
              __html: description || "",
            }}
            className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-midGray"
          ></div>
        )}
      </div>
    </div>
  );
};

export default ContentOne;
