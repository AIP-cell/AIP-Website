import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TGalleryImages } from "@/api/type";
import cn from "@/utils/tailwind";
import { StorageUrl } from "@/utils/BaseUrl";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

type Props = {
  galleryLink?: string;
  galleryImages?: TGalleryImages[];
};

const Gallery = ({ galleryLink, galleryImages }: Props) => {
  return (
    <div className="relative ">
      <div className="~pt-[2rem]/[12.5rem] container mx-auto ~px-[1.25rem]/[7.8rem]">
        <TextStaggerAnimation
          text="Gallery"
          className="text-center font-playFair  ~leading-[2.6rem]/[3.3rem] tracking-[-.04rem] ~text-h4/h2 text-gray80"
        />
        <div className="~pt-[2rem]/[4rem] grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 ~gap-[1rem]/[1.25rem]">
          {galleryImages?.map((items, i) => (
            <div
              key={i}
              className={cn(
                " col-span-1 lg:row-span-1 relative h-[10.25rem] md:h-full  rounded-lg overflow-hidden",
                {
                  " col-span-2 lg:col-span-3 lg:row-span-2 !~h-[14.344rem]/[25rem]":
                    i == 0,
                }
              )}
            >
              <Image
                src={StorageUrl + items?.image}
                alt=""
                fill
                className=" w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {galleryImages?.length != 0 && (
          <Link
            href={galleryLink ?? ""}
            className="~pt-[2rem]/[2.5rem] flex justify-center"
          >
            <span className="block rounded-full border-2 border-darkPurple hover:text-white hover:bg-darkPurple text-darkPurple">
              <p className="text-h9Copy5 leading-[1.225rem] font-medium py-[0.75rem] px-[1.75rem]">
                View All Images
              </p>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Gallery;
