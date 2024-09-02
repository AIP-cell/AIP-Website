import Image from "next/image";
import SampleImage from "@public/images/sample.png";
import React from "react";

const Gallery = () => {
  return (
    <div className="tw-pt-[7.563rem] tw-px-[7.8rem]">
      <p className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
        Gallery
      </p>
      <div className="tw-pt-[4rem] tw-grid tw-grid-cols-5 grid-rows-2 tw-gap-[1.25rem]">
        <div className="tw-col-span-3 tw-row-span-2 tw-relative tw-h-[25rem] tw-rounded-lg tw-overflow-hidden">
          <Image
            src={SampleImage}
            alt=""
            className="tw-absolute tw-w-full tw-h-full tw-object-cover"
          />
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-2 tw-relative tw-rounded-lg tw-overflow-hidden">
          <Image
            src={SampleImage}
            alt=""
            className="tw-absolute tw-w-full tw-h-full tw-object-cover"
          />
        </div>
        <div className="col-start-5 col-end-6 row-start-1 row-end-2 tw-relative tw-rounded-lg tw-overflow-hidden">
          <Image
            src={SampleImage}
            alt=""
            className="tw-absolute tw-w-full tw-h-full tw-object-cover"
          />
        </div>
        <div className="col-start-5 col-end-6 row-start-2 row-end-3 tw-relative tw-rounded-lg tw-overflow-hidden">
          <Image
            src={SampleImage}
            alt=""
            className="tw-absolute tw-w-full tw-h-full tw-object-cover"
          />
        </div>
        <div className="col-start-4 col-end-5 row-start-2 row-end-3 tw-relative tw-rounded-lg tw-overflow-hidden">
          <Image
            src={SampleImage}
            alt=""
            className="tw-absolute tw-w-full tw-h-full tw-object-cover"
          />
        </div>
      </div>
      <div className="tw-pt-[2.5rem] tw-flex tw-justify-center">
          <button className="tw-rounded-full tw-border-2 tw-border-darkPurple hover:tw-text-white hover:tw-bg-darkPurple tw-text-darkPurple">
            <p className="tw-text-h9Copy5 tw-leading-[1.225rem] tw-font-medium tw-py-[0.75rem] tw-px-[1.75rem]">
              View All Images
            </p>
          </button>
      </div>
    </div>
  );
};

export default Gallery;
