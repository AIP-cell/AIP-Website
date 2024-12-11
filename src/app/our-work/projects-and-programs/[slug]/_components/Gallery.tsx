import Image from "next/image";
import SampleImage from "@public/images/sample.png";
import React from "react";
import Link from "next/link";

type Props = {
  galleryLink?: string;
};
const Gallery = ({ galleryLink }: Props) => {
  return (
    <div className="relative ">
      <div className="~pt-[2rem]/[12.5rem] container mx-auto ~px-[1.25rem]/[7.8rem]">
        <p className=" text-center font-playFair  ~leading-[2.6rem]/[3.3rem] tracking-[-.04rem] ~text-h4/h2 text-gray80">
          Gallery
        </p>
        <div className="~pt-[2rem]/[4rem] grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 ~gap-[1rem]/[1.25rem]">
          <div className="col-span-2 lg:col-span-3 lg:row-span-2 relative ~h-[14.344rem]/[25rem] rounded-lg overflow-hidden">
            <Image
              src={SampleImage}
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 lg:row-span-1 relative h-[10.25rem] md:h-auto rounded-lg overflow-hidden">
            <Image
              src={SampleImage}
              alt=""
              className="absolute h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 lg:row-span-1 h-[10.25rem] md:h-auto relative rounded-lg overflow-hidden">
            <Image
              src={SampleImage}
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 lg:row-span-1 h-[10.25rem] md:h-auto relative rounded-lg overflow-hidden">
            <Image
              src={SampleImage}
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 lg:row-span-1 h-[10.25rem] md:h-auto relative rounded-lg overflow-hidden">
            <Image
              src={SampleImage}
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>
        <Link
          href={galleryLink || ""}
          className="~pt-[2rem]/[2.5rem] flex justify-center"
        >
          <button className="rounded-full border-2 border-darkPurple hover:text-white hover:bg-darkPurple text-darkPurple">
            <p className="text-h9Copy5 leading-[1.225rem] font-medium py-[0.75rem] px-[1.75rem]">
              View All Images
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
