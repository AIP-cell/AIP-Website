import React from "react";
import Image from "next/image";
import ArrowDownSvg from "@public/svg/arrowDown.svg";
import projectBg from "@public/svg/projectsPage/projectBg.svg";
import Link from "next/link";
import CollaborationGrid from "./_components/CollaborationGrid";

const page = () => {
  return (
    <div className=" tw-relative tw-overflow-hidden">
      <Image
        src={projectBg}
        alt=""
        className="tw-left-60 tw-absolute tw-top-[-6rem] "
      />
      <div className="container tw-mx-auto tw-relative tw-px-[7.8rem] tw-pt-[5rem]">
        <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
          <Link
            href=""
            className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
          >
            {"<"}Products & Services / &nbsp;
          </Link>
          <Link href="#">Collaborations</Link>
        </div>

        <p className="tw-font-inter  tw-font-semibold tw-uppercase tw-leading-[1.3rem] tw-text-purple40">
          Collaborations
        </p>
        <p className="tw-leading-[2.6rem] tw-font-playFair tw-text-h4Heading4 tw-text-gray80 tw-pt-5 tw-pb-[5rem]">
          Collaborative philanthropy is a powerful catalyst for change. When we
          unite our resources and expertise, we pave the way for resilient
          interventions to tackle pressing challenges. Engaging with AIP&apos;s
          talented network has helped foster a sense of shared purpose in
          driving transformative change.
        </p>

        <div className="tw-flex tw-pt-[2rem] tw-gap-[.75rem]">
          <p className="tw-py-3 tw-text-gray40 ">Filter by:</p>

          <div className="tw-p-3 tw-border-2 tw-rounded-md tw-flex tw-gap-[.79rem]">
            <p className=" tw-text-gray80 tw-font-inter tw-text[.875rem] leading-[1.225rem]">
              Category
            </p>
            <Image src={ArrowDownSvg} alt="arrow down" />
          </div>
          <div className="tw-p-3 tw-border-2 tw-rounded-md tw-flex tw-gap-[.79rem]">
            <p className=" tw-text-gray80 tw-font-inter tw-text[.875rem] leading-[1.225rem]">
              Date
            </p>
            <Image src={ArrowDownSvg} alt="arrow down" />
          </div>
        </div>

        <CollaborationGrid/>
      </div>
    </div>
  );
};

export default page;
