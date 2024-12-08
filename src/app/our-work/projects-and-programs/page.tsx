import Link from "next/link";
import React from "react";
import Image from "next/image";
import ArrowDownSvg from "@public/svg/arrowDown.svg";
import projectBg from "@public/svg/projects-page/projectBg.svg";
import ResourceCard from "@/components/cards/ResourceCard";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomSelect from "@/components/custom/CustomSelect";
import CustomFilter from "@/components/custom/CustomFilter";

const datas = [
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose",
    desc: "This report is the result of a collaborative effort between Accelerate Indian Philanthropy (AIP) and the Boston Consulting Group (BCG).",
    category: "Report",
  },
  {
    src: "/svg/projects-page/report1.svg",
    title: "Systemic Impact Exemplars",
    desc: "Unique Approaches Towards Solving India’s Development Challenges by identifying and learning from organisations with systems change.",
    category: "Report",
  },
  {
    src: "/svg/projects-page/report2.svg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus imperdiet, neque at consequat malesuada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus imperdiet, neque at consequat",
    category: "Report",
  },
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose",
    desc: "This report is the result of a collaborative effort between Accelerate Indian Philanthropy (AIP) and the Boston Consulting Group (BCG).",
    category: "Report",
  },
  {
    src: "/svg/projects-page/report1.svg",
    title: "Systemic Impact Exemplars",
    desc: "Unique Approaches Towards Solving India’s Development Challenges by identifying and learning from organisations with systems change.",
    category: "Report",
  },
  {
    src: "/svg/projects-page/report2.svg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus imperdiet, neque at consequat malesuada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus imperdiet, neque at consequat",
    category: "Report",
  },
];
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
// const categoryData = ["Category", "Category", "Category"];
// const dateData = ["Date", "Date", "Date"];
const page = () => {
  return (
    <div className="~tw-pt-[4.4rem]/[5rem]">
      <div className=" tw-relative tw-w-full tw-overflow-hidden ">
        <Image
          src={projectBg}
          alt="bg"
          className=" tw-hidden md:tw-block tw-inset-x-0 tw-object-cover tw-w-full tw-absolute tw-top-[-9rem] tw-h-[30rem]"
        />
        <div className="container tw-mx-auto tw-relative ~tw-px-5/[7.8rem] ~tw-pt-[4.313rem]/[5rem]">
          <BreadCrump
            textOne="Our Work"
            linkOne="/our-work"
            textTwo="Projects and Programs"
            linkTwo="/our-work/projects-and-programs"
          />
          <p className=" ~tw-text-h9Copy5/h9Copy4 tw-font-inter tw-font-semibold tw-uppercase ~tw-leading-[1.138rem]/[1.3rem] tw-text-purple40">
            Projects and Programs
          </p>
          <p className="~tw-leading-[2.113rem]/[2.6rem] tw-font-playFair ~tw-text-h4a/h4 tw-text-gray80 tw-pt-5  md:tw-tracking-[-0.02rem]">
            Through our projects and programs, we inspire and influence each
            other by sharing their motivations, knowledge, ideas and
            experiences. All to enable shared learning and collaboration with
            insights across sectors and effective giving.
          </p>
          <div className="tw-flex tw-flex-wrap tw-pt-[3.25rem] tw-items-center tw-gap-[0.75rem]">
            <p className=" tw-text-gray40  ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="tw-flex tw-flex-wrap tw-gap-[.75rem]">
              {filterDatas.map((items, i) => (
                <CustomFilter
                  type={items.type}
                  key={i}
                  optionsArray={items.filter}
                />
              ))}
            </div>
          </div>

          <div className="tw-pt-[3.25rem] tw-pb-[5rem] tw-grid md:tw-grid-cols-3 tw-gap-[4.5rem]">
            {datas.map((item, i) => (
              <Link
                href={`/our-work/projects-and-programs/${item.title}`}
                key={i}
              >
                <ResourceCard
                  src={item.src}
                  title={item.title}
                  desc={item.desc}
                  category={item.category}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
