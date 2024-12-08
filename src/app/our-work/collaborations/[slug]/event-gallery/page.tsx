import React from "react";
import projectBg from "@public/svg/projects-page/projectBg.svg";
import Link from "next/link";
import SampleImage from "@public/images/sample.png";

import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import GalleryVideos from "./_components/GalleryVideos";
import GalleryImages from "./_components/GalleryImages";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className=" tw-relative tw-w-full tw-overflow-hidden">
        <Image
          src={projectBg}
          alt="bg"
          className="tw-hidden lg:tw-block tw-absolute tw-top-[-8.5rem] tw-w-full tw-h-[30rem] "
        />
        <div className="container tw-mx-auto tw-relative ~tw-px-5/[7.8rem] ~tw-pt-[4.313rem]/[5rem]">
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
          <p className="tw-font-inter  tw-font-semibold tw-uppercase ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.138rem]/[1.3rem] tw-text-purple40">
            Systemic Impact Exemplars
          </p>
          <p className="~tw-leading-[2.113rem]/[2.6rem] tw-font-playFair ~tw-text-h4a/h4 tw-text-gray80 tw-pt-5 ~tw-pb-0/[5rem] md:tw-tracking-[-0.02rem]">
            AIP hosts events across cities in the world. AIP is continuously
            bringing inspirational philanthropists together to help co-create
            this network and establish personal philanthropy as a means for
            India’s transformation.
          </p>
          <GalleryVideos />
          <GalleryImages  />
        </div>
      </div>
    </div>
  );
};

export default page;
