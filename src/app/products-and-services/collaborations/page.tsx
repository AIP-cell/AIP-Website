import React from "react";
import Image from "next/image";
import ArrowDownSvg from "@public/svg/arrowDown.svg";
import projectBg from "@public/svg/projectsPage/projectBg.svg";
import Link from "next/link";
import bottomRightWave from "@public/svg/products-and-services/project-and-programs/rightVertWave.svg";
import CollaborationGrid from "./_components/CollaborationGrid";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomSelect from "@/components/custom/CustomSelect";
const categoryData=[
"Category",
"Category",
"Category",
]
const dateData=[
"Date",
"Date",
"Date",
]
const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="tw-relative bg-container tw-mx-auto ">
        <Image
          src={projectBg}
          alt="bg"
          className=" tw-absolute tw-top-[-5rem]  tw-w-full"
        />
        <div className="container tw-mx-auto tw-relative tw-px-[7.8rem] tw-pt-[5rem]">
          <Image
            src={bottomRightWave}
            alt="bottom-right-wave"
            className=" tw-absolute tw-bottom-[2.6rem] tw-left-0"
          />
          <BreadCrump
            textOne="Products & Services"
            linkOne="/products-and-services"
            textTwo="Collaborations"
            linkTwo="/products-and-services/collaborations"
          />
          <p className="tw-font-inter  tw-font-semibold tw-uppercase tw-leading-[1.3rem] tw-text-purple40">
            Collaborations
          </p>
          <p className="tw-leading-[2.6rem] tw-font-playFair tw-text-h4 tw-text-gray80 tw-pt-5 tw-pb-[5rem] tw-tracking-[-0.02rem]">
            Collaborative philanthropy is a powerful catalyst for change.
            <br /> When we unite our resources and expertise, we pave the way
            for resilient interventions to tackle pressing challenges. Engaging
            with AIP&apos;s talented network has helped foster a sense of shared
            purpose in driving transformative change.
          </p>

          <div className="tw-flex tw-pt-[2rem] tw-gap-[.75rem]">
            <p className="tw-py-3 tw-text-gray40 ">Filter by:</p>
            <CustomSelect optionsArray={categoryData}/>
            <CustomSelect optionsArray={dateData}/>
            {/* <div className="tw-p-3 tw-border-2 tw-rounded-md tw-flex tw-gap-[.79rem]">
              <p className=" tw-text-gray80 tw-font-inter tw-text[.875rem] leading-[1.225rem]">
                Category
              </p>
              <Image src={ArrowDownSvg} alt="arrow down" />
            </div> */}
            {/* <div className="tw-p-3 tw-border-2 tw-rounded-md tw-flex tw-gap-[.79rem]">
              <p className=" tw-text-gray80 tw-font-inter tw-text[.875rem] leading-[1.225rem]">
                Date
              </p>
              <Image src={ArrowDownSvg} alt="arrow down" />
            </div> */}
          </div>

          <CollaborationGrid />
        </div>
      </div>
    </div>
  );
};

export default page;
