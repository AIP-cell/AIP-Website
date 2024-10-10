import React from "react";
import projectBg from "@public/svg/projects-page/projectBg.svg";
import Link from "next/link";
import SampleImage from "@public/images/sample.png";

import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className=" tw-relative tw-w-full tw-overflow-hidden">
        <Image
          src={projectBg}
          alt="bg"
          className=" tw-absolute tw-top-[-8.5rem] tw-w-full tw-h-[30rem] "
        />
        <div className="container tw-mx-auto tw-relative tw-px-[7.8rem] tw-pt-[5rem]">
          <BreadCrump
            textOne="Our Work"
            linkOne="/our-work"
            textTwo="Collaborations"
            linkTwo="/our-work/collaborations"
            textThree="slug"
            linkThree="/our-work/collaborations/slug"
            textFour="Event Gallery"
            linkFour="/our-work/collaborations/slug/event-gallery"
          />
          <p className="tw-font-inter  tw-font-semibold tw-uppercase tw-leading-[1.3rem] tw-text-purple40">
            Systemic Impact Exemplars
          </p>
          <p className="tw-leading-[2.6rem] tw-font-playFair tw-text-h4 tw-text-gray80 tw-pt-5 tw-pb-[5rem] tw-tracking-[-0.02rem]">
            AIP hosts events across cities in the world. AIP is continuously
            bringing inspirational philanthropists together to help co-create
            this network and establish personal philanthropy as a means for
            India’s transformation.
          </p>
          <div className="tw-grid tw-grid-cols-5 tw-grid-rows-4 tw-gap-[1.25rem] tw-pb-[7.5rem]">
            <div className="tw-col-span-3 tw-relative tw-h-[25rem] tw-row-span-2 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-col-span-1 tw-relative tw-row-span-1 tw-overflow-hidden tw-rounded-xl">
              <Image
                src={SampleImage}
                alt=""
                className=" tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
