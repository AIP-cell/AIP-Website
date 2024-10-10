import React from "react";
import Image from "next/image";
import ArrowDownSvg from "@public/svg/arrowDown.svg";
import projectBg from "@public/svg/projects-page/projectBg.svg";
import Link from "next/link";
import bottomRightWave from "@public/svg/products-and-services/project-and-programs/rightVertWave.svg";
import CollaborationGrid from "./_components/CollaborationGrid";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomSelect from "@/components/custom/CustomSelect";
const categoryData = ["Category", "Category", "Category"];
const dateData = ["Date", "Date", "Date"];
const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="tw-relative tw-w-full  tw-pb-[7.5rem]">
        <Image
          src={projectBg}
          alt="bg"
          className=" tw-absolute tw-top-[-9rem] tw-h-[30rem] tw-w-full"
        />
        <Image
          src={bottomRightWave}
          alt="bottom-right-wave"
          className=" tw-absolute tw-bottom-[2.6rem] tw-left-0"
        />
        <div className="container tw-mx-auto tw-relative tw-px-[7.8rem] tw-pt-[5rem]">
          <BreadCrump
            textOne="Our Work"
            linkOne="/our-work"
            textTwo="Collaborations"
            linkTwo="/our-work/collaborations"
          />
          <p className="tw-font-inter  tw-font-semibold tw-uppercase tw-leading-[1.3rem] tw-text-purple40">
            Collaborations
          </p>
          <div className="tw-leading-[2.6rem] tw-font-playFair tw-text-h4 tw-text-gray80 tw-pt-5 tw-pb-[5rem] tw-tracking-[-0.02rem]">
            <p className="">
              Collaborative philanthropy is a powerful catalyst for change.
            </p>
            <p className="">
              When we unite our resources and expertise, we pave the way for
              resilient interventions to tackle pressing challenges. Engaging
              with AIP&apos;s talented network has helped foster a sense of
              shared purpose in driving transformative change.
            </p>
          </div>
          <div className="tw-flex tw-pt-[2rem] tw-gap-[.75rem]">
            <p className="tw-py-3 tw-text-gray40 ">Filter by:</p>
            <CustomSelect optionsArray={categoryData} />
            <CustomSelect optionsArray={dateData} />
          </div>

          <CollaborationGrid />
        </div>
      </div>
    </div>
  );
};

export default page;
