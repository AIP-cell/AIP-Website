"use client";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CustomHeaderSelect from "@/components/custom/CustomHeaderSelect";
import MenuSvg from "@/components/svg/MenuSvg";
import Link from "next/link";
import Jelly from "@public/svg/footer/jelly.svg";
import { useState } from "react";
import Image from "next/image";
import cn from "@/utils/tailwind";
import CrossSvg from "@/components/svg/CrossSvg";
import CustomAccordionSelect from "@/components/custom/CustomAccordionSelect";
const headerData = [
  {
    label: "About Us",
    id: "about",
    options: [
      { option: "The AIP Journey", link: "/about/aip-journey" },
      { option: "Our Approach", link: "/about/our-approach" },
      { option: "AIP Impact", link: "/about/aip-impact" },
      { option: "Giving Roadmap", link: "/about/giving-roadmap" },
      { option: "Financial Reports", link: "/about/financials" },
      { option: "AIP Founder Network", link: "/about/aip-founder-network" },
      {
        option: "Philanthropist Network",
        link: "/about/philanthropist-network",
      },
    ],
  },
  {
    label: "People of AIP",
    id: "people-of-aip",
    options: [
      { option: "Our Core Founders", link: "/people-of-aip/core-founders" },
      { option: "Founders", link: "/people-of-aip/founders" },
      {
        option: "Our Advisory Board",
        link: "/people-of-aip/our-advisory-board",
      },
      { option: "Team AIP", link: "/people-of-aip/team-AIP" },
      { option: "Experts", link: "/people-of-aip/experts" },
    ],
  },
  {
    label: "Our Work",
    id: "our-work",
    options: [
      { option: "What We Do", link: "/our-work/what-we-do" },
      { option: "NPO Registry", link: "/our-work/npo" },
      { option: "Experts", link: "/our-work/experts" },
      {
        option: "Projects and Programs",
        link: "/our-work/projects-and-programs",
      },
      {
        option: "Collaborations",
        link: "/our-work/collaborations",
      },
    ],
  },
  {
    label: "Resource Center",
    id: "resource-center",
    options: [
      { option: "AIP Resources", link: "/resource-center/aip-resources" },
      {
        option: "Curated Resources",
        link: "/resource-center/curated-resources",
      },
    ],
  },
];
// const headerData = [
//   {
//     // width: " tw-w-[6rem] ",
//     label: "About Us",
//     id: "about",
//     options: [
//       { option: "The AIP Journey", link: "/about/aip-journey" },
//       { option: "Our Approach", link: "/about/our-approach" },
//       { option: "AIP Impact", link: "/about/aip-impact" },
//       { option: "Giving Roadmap", link: "/about/giving-roadmap" },
//       { option: "Financial Reports", link: "/about/financials" },
//       { option: "AIP Founder Network", link: "/about/aip-founder-network" },
//       {
//         option: "Philanthropist Network",
//         link: "/about/philanthropist-network",
//       },
//     ],
//   },
//   {
//     id: "people-of-aip",
//     label: "People of AIP",
//     link: "/people-of-aip/core-founders",
//   },
//   {
//     // width: " tw-w-[10.5rem] ",
//     label: "Our Work",
//     id: "our-work",
//     options: [
//       // {
//       //   option: "Products & Services",
//       //   link: "/our-work/our-offerings",
//       // },
//       { option: "What We Do", link: "/our-work/what-we-do" },
//       { option: "NPO Registry", link: "/our-work/npo" },
//       { option: "Experts", link: "/our-work/experts" },
//       {
//         option: "Projects and Programs",
//         link: "/our-work/projects-and-programs",
//       },
//       {
//         option: "Collaborations",
//         link: "/our-work/collaborations",
//       },
//     ],
//   },
//   {
//     // width: " tw-w-[9rem] ",
//     label: "Resource Center",
//     id: "resource-center",
//     options: [
//       // { option: "Resource Center", link: "/resource-center" },
//       { option: "AIP Resources", link: "/resource-center/aip-resources" },
//       {
//         option: "Curated Resources",
//         link: "/resource-center/curated-resources",
//       },
//       // { option: "Collaborations", link: "/resource-center/collaborations" },
//     ],
//   },
//   { id: "careers", name: "Careers", link: "/careers" },
//   { id: "contact", name: "Contact", link: "/contact" },
// ];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <MenuSvg
          onClick={() => {
            setIsOpen(true);
          }}
          className="tw-size-[2rem]"
        />
      ) : (
        <div className="xl:tw-hidden tw-fixed tw-h-full tw-top-0 tw-left-0 tw-flex tw-w-full tw-bg-[#979796]">
          <div className="tw-relative tw-w-[70%] tw-pt-[2.5rem] tw-px-[1.25rem] tw-rounded-tr-lg  tw-rounded-br-lg tw-overflow-hidden tw-bg-purpleToBlue xl:tw-hidden tw-gap-[2.5rem] ">
            <div className="tw-flex tw-flex-col tw-text-white tw-items-start">
              <Link
                href="/"
                onClick={() => setIsOpen(!isOpen)}
                className="tw-pb-[1.25rem] tw-text-h9Copy5 tw-leading-[1.225rem] tw-border-b-[1.7px] tw-w-full tw-border-[#B861B3]"
              >
                Home
              </Link>
              <CustomAccordionSelect
                setIsOpen={setIsOpen}
                ArrayData={headerData}
                accordionItemClassName="!tw-border-[#B861B3]"
                accordionTriggerClassName="!tw-py-[1.25rem]"
              />
              <Link
                href="/careers"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  " tw-border-b-[1.7px] tw-text-h9Copy5 tw-leading-[1.225rem] tw-w-full tw-border-[#B861B3] tw-py-[1.25rem] "
                )}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  " tw-text-h9Copy5 tw-leading-[1.225rem]  tw-w-full  tw-pt-[1.25rem] "
                )}
              >
                Contact
              </Link>
            </div>
            <div className="">
              <ButtonAnimation className="tw-mt-[2.5rem] tw-w-full tw-bg-white tw-rounded-full">
                <p className="tw-py-[0.75rem] tw-text-h9Copy5 tw-leading-[1.225rem] tw-text-textPurple">
                  Get Involved
                </p>
              </ButtonAnimation>
            </div>
            <Image src={Jelly} alt="" />
          </div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="tw-w-[30%] tw-bg-[#979796] tw-relative"
          >
            <ButtonAnimation className="tw-absolute tw-top-[1.23rem] tw-right-[1.25rem]">
              <CrossSvg
                onClick={() => {
                  setIsOpen(false);
                }}
                className=" tw-cursor-pointer tw-size-[1.5rem] "
              />
            </ButtonAnimation>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
