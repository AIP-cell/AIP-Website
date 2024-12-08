import React from "react";
import Image from "next/image";
import ArrowDownSvg from "@public/svg/arrowDown.svg";
import projectBg from "@public/svg/projects-page/projectBg.svg";
import Link from "next/link";
import bottomRightWave from "@public/svg/products-and-services/project-and-programs/rightVertWave.svg";
import CollaborationGrid from "./_components/CollaborationGrid";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomSelect from "@/components/custom/CustomSelect";
import CustomFilter from "@/components/custom/CustomFilter";
const categoryData = ["Category", "Category", "Category"];
const dateData = ["Date", "Date", "Date"];
const filterDatas = [
  {
    type: "Fields",
    filter: [
      "All",
      "Art & Culture",
      "Education",
      "Environment",
      "Health & Nutrition",
      "Legal & Judiciary",
      "Livelihood",
      "Disability",
      "Rural Development",
      "Sports",
      "WASH",
      "Women & Child",
    ],
  },
  {
    type: "Partner Type",
    filter: ["data1", "data2"],
  },
  { type: "Date", filter: ["data1", "data2"] },
];
const page = () => {
  return (
    <div className="~tw-pt-[4.4rem]/[5rem]">
      <div className="tw-relative tw-w-full  tw-pb-[7.5rem]">
        <Image
          src={projectBg}
          alt="bg"
          className="tw-hidden lg:tw-block tw-absolute tw-top-[-9rem] tw-h-[30rem] tw-w-full"
        />
        <Image
          src={bottomRightWave}
          alt="bottom-right-wave"
          className="tw-hidden lg:tw-block tw-absolute tw-bottom-[2.6rem] tw-left-0"
        />
        <div className="container tw-mx-auto tw-relative ~tw-px-5/[7.8rem] ~tw-pt-[4.313rem]/[5rem]">
          <BreadCrump
            textOne="Our Work"
            linkOne="/our-work"
            textTwo="Collaborations"
            linkTwo="/our-work/collaborations"
          />
          <p className="tw-font-inter ~tw-text-h9Copy5/h9Copy4  tw-font-semibold tw-uppercase ~tw-leading-[1.138rem]/[1.3rem] tw-text-purple40">
            Collaborations
          </p>
          <div className="~tw-leading-[2.113rem]/[2.6rem] tw-font-playFair ~tw-text-h4a/h4 tw-text-gray80 tw-pt-5 ~tw-pb-0/[4.9rem] md:tw-tracking-[-0.02rem]">
            <div className="">
              Collaborative philanthropy is a powerful catalyst for change.
              <div className="tw-inline md:tw-block ">
                When we unite our resources and expertise, we pave the way for
                resilient interventions to tackle pressing challenges. Engaging
                with AIP&apos;s talented network has helped foster a sense of
                shared purpose in driving transformative change.
              </div>
            </div>
            {/* <p className=" tw-inline-block">
              When we unite our resources and expertise, we pave the way for
              resilient interventions to tackle pressing challenges. Engaging
              with AIP&apos;s talented network has helped foster a sense of
              shared purpose in driving transformative change.
            </p> */}
          </div>
          <div className="tw-flex tw-flex-wrap ~tw-pt-[3.25rem]/0 tw-items-center tw-gap-[0.75rem]">
            <p className=" tw-text-gray40  ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="tw-flex tw-flex-wrap tw-gap-[.75rem]">
              {filterDatas.map((items, i) => (
                <CustomFilter
                  type={items.type}
                  key={i}
                  optionsArray={items.filter}
                  ListboxButtonClassName="!tw-w-fit"
                  selectedClassName="!tw-w-fit"
                />
              ))}
            </div>
          </div>

          <CollaborationGrid />
        </div>
      </div>
    </div>
  );
};

export default page;
