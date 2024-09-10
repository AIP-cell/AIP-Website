import Link from "next/link";
import React from "react";
import Image from "next/image";
import ArrowDownSvg from "@public/svg/arrowDown.svg";
import projectBg from "@public/svg/projects-page/projectBg.svg";
import ResourceCard from "@/components/cards/ResourceCard";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomSelect from "@/components/custom/CustomSelect";

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
const categoryData = ["Category", "Category", "Category"];
const dateData = ["Date", "Date", "Date"];
const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className=" tw-relative bg-container tw-mx-auto tw-overflow-hidden ">
        <Image
          src={projectBg}
          alt="bg"
          className="tw-inset-x-0 tw-object-cover tw-w-full tw-absolute tw-top-[-6rem] "
        />
        <div className="container tw-mx-auto tw-relative ~tw-px-5/[7.8rem] tw-pt-[5rem]">
          <BreadCrump
            textOne="Products & Services"
            linkOne="/products-and-services"
            textTwo="Projects and Programs"
            linkTwo="/products-and-services/projects-and-programs"
          />
          <p className="tw-font-inter tw-font-semibold tw-uppercase tw-leading-[1.3rem] tw-text-purple40">
            Projects and Programs
          </p>
          <p className="tw-leading-[2.6rem] tw-font-playFair tw-text-h4 tw-text-gray80 tw-pt-5 tw-pb-[5rem] tw-tracking-[-0.02rem]">
            Through our projects and programs, we inspire and influence each
            other by sharing their motivations, knowledge, ideas and
            experiences. All to enable shared learning and collaboration with
            insights across sectors and effective giving.
          </p>

          <div className="tw-flex tw-pt-[2rem] tw-gap-[.75rem]">
            <p className="tw-py-3 tw-text-gray40 ">Filter by:</p>
            <CustomSelect optionsArray={categoryData} />
            <CustomSelect optionsArray={dateData} />
            {/* <div className="tw-p-3 tw-border-2 tw-rounded-md tw-flex tw-gap-[.79rem]">
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
            </div> */}
          </div>

          <div className="tw-pt-[3.25rem] tw-pb-[5rem] tw-grid md:tw-grid-cols-3 tw-gap-[4.5rem]">
            {datas.map((item, i) => (
              <ResourceCard
                key={i}
                src={item.src}
                title={item.title}
                desc={item.desc}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
