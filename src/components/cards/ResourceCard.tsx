import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import { StorageUrl } from "@/utils/BaseUrl";
import Link from "next/link";
import ResourceDescSection from "../ResourceDescSection";
type Props = {
  src?: string;
  title?: string;
  desc?: string;
  linkKey?: string;
  index?: number;
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
  gallery?: Boolean;
  city?: string;
  readTime?: string;
};
const ResourceCard = ({
  src,
  title,
  desc,
  category,
  linkKey,
  name,
  date,
  file,
  index,
  fileLink,
  domain,
  isLinkOrPdf,
  projectsAndProgram,
  collaboration,
  gallery,
  slug,
  city,
  readTime,
}: Props) => {
  let link;
  if (category === "experts") {
    link = `/resource-center/curated-resources/experts/${slug}`;
  } else if (projectsAndProgram) {
    link = `/our-work/projects-and-programs/${slug}`;
  } else if (collaboration) {
    link = `/our-work/collaborations/${slug}`;
  } else if (gallery) {
    link = `/our-work/collaborations/${slug}`;
  } else if (linkKey) {
    if (linkKey === "collaborations") {
      link = `/our-work/${linkKey}/${slug}/event-gallery?city=${city}`;
    } else if (linkKey === "gallery") {
      link = `/resource-center/aip-resources/${slug}/event-gallery`;
    } else {
      link = `/our-work/${linkKey}/${slug}/event-gallery`;
    }
  } else {
    link = isLinkOrPdf === "pdf" ? StorageUrl + file : fileLink;
  }

  // const link = isLinkOrPdf === "pdf" ? file : fileLink;
  const toDownload = isLinkOrPdf === "pdf" ? true : false;
  const dateFormat = dayjs(date).format("D MMMM YYYY");
  // console.log("dateFormat:::,",dateFormat)

  return (
    // justify-center
    <div className="flex flex-col h-full justify-between items-center ~gap-[1.25rem]/[0.75rem]">
      <div className="relative w-full shrink-0 ~h-[19.688rem]/[16.594rem]">
        <Image
          src={src ? StorageUrl + src : "/images/resourceCardThumbnail.png"}
          alt="image"
          fill
          className="object-cover rounded-[1.25rem] "
        />
      </div>
      <div className="flex h-full flex-col w-full gap-[0.75rem]">
        {!slug ? (
          <Link
            href={link ?? ""}
            target="_blank"
            download={toDownload}
            className=" w-full text-h6M text-gray80 font-inter font-semibold leading-[1.575rem] hover:underline underline-offset-4 decoration-[1.5px]"
          >
            {title}
          </Link>
        ) : (
          <Link
            href={link ?? ""}
            className=" w-full text-h6M text-gray80 font-inter font-semibold leading-[1.575rem] hover:underline underline-offset-4 decoration-[1.5px]"
          >
            {title}
          </Link>
        )}
        {name && (
          <p className=" w-full text-gray40 font-playFairItalic font-medium ~leading-[1.4rem]/[1.575rem] ">
            {name}
          </p>
        )}
        <ResourceDescSection desc={desc} index={index} />
        {/* <p className="line-clamp-6 text-ellipsis text-h9Copy5 text-gray50 font-inter leading-[1.225rem]">
          {desc}
        </p> */}
      </div>
      <div className="h-px bg-footerGray w-full"></div>
      <div className="flex justify-between w-full text-h9Copy5 text-gray50 font-inter leading-[1.225rem]">
        {date && <p>{dateFormat}</p>}
        {domain && <p>{domain}</p>}
        {readTime && <p>{readTime}</p>}
      </div>
    </div>
  );
};

export default ResourceCard;
