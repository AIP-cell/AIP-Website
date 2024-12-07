import Image from "next/image";
import SampleImage from "@public/images/sample.png";
import React from "react";
import Link from "next/link";

type Props = {
  galleryLink?: string;
};
const Gallery = ({ galleryLink }: Props) => {
  return (
    <div className="tw-relative ">
      <div className="~tw-pt-[2rem]/[12.5rem] container tw-mx-auto ~tw-px-[1.25rem]/[7.8rem]">
        <p className=" tw-text-center tw-font-playFair  ~tw-leading-[2.6rem]/[3.3rem] tw-tracking-[-.04rem] ~tw-text-h4/h2 tw-text-gray80">
          Gallery
        </p>
        <div className="~tw-pt-[2rem]/[4rem] tw-grid tw-grid-cols-2 lg:tw-grid-cols-5 lg:tw-grid-rows-2 ~tw-gap-[1rem]/[1.25rem]">
          <div className="tw-col-span-2 lg:tw-col-span-3 lg:tw-row-span-2 tw-relative ~tw-h-[14.344rem]/[25rem] tw-rounded-lg tw-overflow-hidden">
            <Image
              src={SampleImage}
              alt=""
              className="tw-absolute tw-w-full tw-h-full tw-object-cover"
            />
          </div>
          <div className="tw-col-span-1 lg:tw-row-span-1 tw-relative tw-h-[10.25rem] md:tw-h-auto tw-rounded-lg tw-overflow-hidden">
            <Image
              src={SampleImage}
              alt=""
              className="tw-absolute tw-h-full tw-w-full tw-object-cover"
            />
          </div>
          <div className="tw-col-span-1 lg:tw-row-span-1 tw-h-[10.25rem] md:tw-h-auto tw-relative tw-rounded-lg tw-overflow-hidden">
            <Image
              src={SampleImage}
              alt=""
              className="tw-absolute tw-w-full tw-h-full tw-object-cover"
            />
          </div>
          <div className="tw-col-span-1 lg:tw-row-span-1 tw-h-[10.25rem] md:tw-h-auto tw-relative tw-rounded-lg tw-overflow-hidden">
            <Image
              src={SampleImage}
              alt=""
              className="tw-absolute tw-w-full tw-h-full tw-object-cover"
            />
          </div>
          <div className="tw-col-span-1 lg:tw-row-span-1 tw-h-[10.25rem] md:tw-h-auto tw-relative tw-rounded-lg tw-overflow-hidden">
            <Image
              src={SampleImage}
              alt=""
              className="tw-absolute tw-w-full tw-h-full tw-object-cover"
            />
          </div>
        </div>
        <Link
          href={galleryLink || ""}
          className="~tw-pt-[2rem]/[2.5rem] tw-flex tw-justify-center"
        >
          <button className="tw-rounded-full tw-border-2 tw-border-darkPurple hover:tw-text-white hover:tw-bg-darkPurple tw-text-darkPurple">
            <p className="tw-text-h9Copy5 tw-leading-[1.225rem] tw-font-medium tw-py-[0.75rem] tw-px-[1.75rem]">
              View All Images
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
