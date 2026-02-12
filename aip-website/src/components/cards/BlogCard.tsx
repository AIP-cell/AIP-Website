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
  category?: string;
  name?: string;
  date?: string;
  domain?: string;
  isLinkOrPdf?: string;
  file?: string;
  fileLink?: string;
  slug?: string;
  projectsAndProgram?: boolean;
  collaboration?: boolean;
  gallery?: boolean;
  city?: string;
  readTime?: string;
};
const BlogCard = ({ src, title, desc, name, date, slug, readTime }: Props) => {
  const dateFormat = dayjs(date).format("D MMMM YYYY");

  return (
    <div className="flex flex-col  items-center ~gap-[1.25rem]/[0.75rem]">
      <div className="relative w-full ~h-[19.688rem]/[16.594rem]">
        <Image
          src={src ? StorageUrl + src : "/images/resourceCardThumbnail.png"}
          alt="image"
          fill
          className="object-cover rounded-[1.25rem]"
        />
      </div>

      <div className="flex flex-col w-full gap-[0.75rem]">
        <Link
          href={`/resource-center/blogs/${slug}`}
          className=" w-full text-h6M text-gray80 line-clamp-2 text-ellipsis font-inter font-semibold leading-[1.575rem] hover:underline underline-offset-4  decoration-[1.5px] transition-all duration-300"
        >
          {title}
        </Link>
        {name && (
          <p className=" w-full text-gray40 font-playFairItalic font-medium ~leading-[1.4rem]/[1.575rem] ">
            {name}
          </p>
        )}
        <ResourceDescSection desc={desc} />
      </div>
      <div className="h-px bg-footerGray w-full"></div>
      <div className="flex justify-between w-full text-h9Copy5 text-gray50 font-inter leading-[1.225rem]">
        {date && <p>{dateFormat}</p>}
        {readTime && <p>{readTime}</p>}
      </div>
    </div>
  );
};

export default BlogCard;
