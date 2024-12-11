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
    <div className="~pt-[4.4rem]/[5rem]">
      <div className="relative w-full  pb-[7.5rem]">
        <Image
          src={projectBg}
          alt="bg"
          className="hidden lg:block absolute top-[-9rem] h-[30rem] w-full"
        />
        <Image
          src={bottomRightWave}
          alt="bottom-right-wave"
          className="hidden lg:block absolute bottom-[2.6rem] left-0"
        />
        <div className="container mx-auto relative ~px-5/[7.8rem] ~pt-[4.313rem]/[5rem]">
          <BreadCrump
            textOne="Our Work"
            linkOne="/our-work"
            textTwo="Collaborations"
            linkTwo="/our-work/collaborations"
          />
          <p className="font-inter ~text-h9Copy5/h9Copy4  font-semibold uppercase ~leading-[1.138rem]/[1.3rem] text-purple40">
            Collaborations
          </p>
          <div className="~leading-[2.113rem]/[2.6rem] font-playFair ~text-h4a/h4 text-gray80 pt-5 ~pb-0/[4.9rem] md:tracking-[-0.02rem]">
            <div className="">
              Collaborative philanthropy is a powerful catalyst for change.
              <div className="inline md:block ">
                When we unite our resources and expertise, we pave the way for
                resilient interventions to tackle pressing challenges. Engaging
                with AIP&apos;s talented network has helped foster a sense of
                shared purpose in driving transformative change.
              </div>
            </div>
            {/* <p className=" inline-block">
              When we unite our resources and expertise, we pave the way for
              resilient interventions to tackle pressing challenges. Engaging
              with AIP&apos;s talented network has helped foster a sense of
              shared purpose in driving transformative change.
            </p> */}
          </div>
          <div className="flex flex-wrap ~pt-[3.25rem]/0 items-center gap-[0.75rem]">
            <p className=" text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="flex flex-wrap gap-[.75rem]">
              {filterDatas.map((items, i) => (
                <CustomFilter
                  type={items.type}
                  key={i}
                  optionsArray={items.filter}
                  
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
