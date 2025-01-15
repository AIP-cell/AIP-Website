import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import { StorageUrl } from "@/utils/BaseUrl";
import Link from "next/link";
type Props = {
  src?: string;
  title?: string;
  desc?: string;
  category?: string;
  name?: string;
  date?: string;
  domain?: string;
  isLinkOrPdf?: string;
  file?: string;
  fileLink?: string;
  slug?: string;
  projectsAndProgram?: Boolean;
  collaboration?: Boolean;
};
const ResourceCard = ({
  src,
  title,
  desc,
  category,
  name,
  date,
  file,
  fileLink,
  domain,
  isLinkOrPdf,
  projectsAndProgram,
  collaboration,
  slug,
}: Props) => {
  let link;
  if (category === "experts") {
    link = `/resource-center/curated-resources/experts/${slug}`;
  } else if (projectsAndProgram) {
    link = `/our-work/projects-and-programs/${slug}`;
  } else if (collaboration) {
    link = `/our-work/collaborations/${slug}`;
  } else {
    link = isLinkOrPdf === "pdf" ? StorageUrl + file : fileLink;
  }
  // const link = isLinkOrPdf === "pdf" ? file : fileLink;
  const toDownload = isLinkOrPdf === "pdf" ? true : false;
  const dateFormat = dayjs(date).format("D MMMM YYYY");
  // console.log("dateFormat:::,",dateFormat)

  return (
    // justify-center
    <div className="flex flex-col  items-center ~gap-[1.25rem]/[0.75rem]">
      <div className="relative w-full ~h-[19.688rem]/[16.594rem]">
        <Image
          src={src ? StorageUrl + src : "/images/resourceCardThumbnail.png"}
          alt="svg"
          fill
          className="object-cover rounded-[1.25rem]"
        />
      </div>
      <div className="flex flex-col w-full gap-[0.75rem]">
        {!slug ? (
          <Link
            href={link ?? ""}
            target="_blank"
            download={toDownload}
            className=" w-full text-h6M text-gray80 font-inter font-semibold leading-[1.575rem] underline underline-offset-4 decoration-[1.5px]"
          >
            {title}
          </Link>
        ) : (
          <Link
            href={link ?? ""}
            className=" w-full text-h6M text-gray80 font-inter font-semibold leading-[1.575rem] underline underline-offset-4 decoration-[1.5px]"
          >
            {title}
          </Link>
        )}
        {name && (
          <p className=" w-full text-gray40 font-playFairItalic font-medium ~leading-[1.4rem]/[1.575rem] ">
            {name}
          </p>
        )}
        <p className="line-clamp-6 text-ellipsis text-h9Copy5 text-gray50 font-inter leading-[1.225rem]">
          {desc}
        </p>
      </div>
      <div className="h-px bg-footerGray w-full"></div>
      <div className="flex justify-between w-full text-h9Copy5 text-gray50 font-inter leading-[1.225rem]">
        {date && <p>{dateFormat}</p>}
        <p>{domain}</p>
      </div>
      {/* <div className="h-px bg-footerGray w-full"></div>
      <div className="flex justify-start w-full gap-[.75rem]">
        <div className="group text-darkPurple bg-bgGray5 w-[2.5rem] hover:text-white  hover:bg-darkPurple  transition-all  h-[2.5rem] rounded-full flex items-center justify-center p-[.5rem]">
          <EyeSvg className="size-[1.5rem]" />
        </div>

        <div className="group text-darkPurple hover:text-white bg-bgGray5 w-[2.5rem]  hover:bg-darkPurple  transition-all  h-[2.5rem] rounded-full flex items-center justify-center p-[.5rem]">
          <DownloadFileSvg className="size-[1.5rem]" />
        </div>
      </div> */}
    </div>
  );
};

export default ResourceCard;
