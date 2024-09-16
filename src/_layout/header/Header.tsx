"use client";
import CustomHeaderSelect from "@/components/custom/CustomHeaderSelect";
import LogoHeaderSvg from "@/components/svg/LogoHeaderSvg";
import LogoSmSVG from "@/components/svg/LogoSmSVG";
import MenuSvg from "@/components/svg/MenuSvg";
import SearchHeaderSvg from "@/components/svg/SearchHeaderSvg";
import SearchWhiteSvg from "@/components/svg/SearchWhiteSvg";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
const headerData = [
  {
    width: " tw-w-[6rem] ",
    options: [
      { option: "About Us", link: "/about/aip-journey" },
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
    width: " tw-w-[8rem] ",
    options: [
      { option: "People of AIP", link: "/people-of-aip/founders" },
      { option: "Our Offerings", link: "#" },
      { option: "NPO Registry", link: "#" },
      { option: "Projects and Programs", link: "#" },
      { option: "Collaborations", link: "#" },
    ],
  },
  {
    width: " tw-w-[10.5rem] ",
    options: [
      {
        option: "Products & Services",
        link: "/products-and-services/our-offerings",
      },
      { option: "Our Offerings", link: "/products-and-services/our-offerings" },
      { option: "NPO Registry", link: "#" },
      {
        option: "Projects and Programs",
        link: "/products-and-services/projects-and-programs",
      },
      {
        option: "Collaborations",
        link: "/products-and-services/collaborations",
      },
    ],
  },
  {
    width: " tw-w-[9rem] ",
    options: [
      { option: "Resource Center", link: "/resource-center" },
      { option: "AIP Resources", link: "#" },
      // { option: "Collaborations", link: "/resource-center/collaborations" },
    ],
  },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];
const Header = () => {
  return (
    <div className="tw-z-[10000] tw-fixed tw-right-0 tw-left-0 tw-top-0 max-md:tw-bg-toRightPurpleToBlue md:tw-bg-white  ">
      <div className="container tw-mx-auto tw-flex tw-justify-between tw-items-center ~tw-pt-[0.875rem]/[1rem] ~tw-pb-[0.75rem]/[0.9rem] tw-px-[1.25rem]">
        <Link href="/" className="tw-hidden md:tw-block">
          <LogoHeaderSvg />
        </Link>
        <Link href="/" className="tw-block md:tw-hidden">
          <LogoSmSVG className="tw-h-[2.75rem] tw-w-[4.5rem]" />
        </Link>
        <div className="tw-flex tw-gap-[1rem] md:tw-hidden">
          <SearchWhiteSvg className="tw-size-[2rem]" />
          <Sidebar />
        </div>
        <div className="tw-hidden md:tw-flex tw-gap-[2.5rem] ">
          {headerData.map((items: any, index: number) => (
            <div key={index} className="tw-flex tw-items-center ">
              {items.options ? (
                <div className="tw-flex tw-gap-[2.5rem]">
                  <CustomHeaderSelect options={items.options} />
                </div>
              ) : (
                <Link href={items.link}>{items.name}</Link>
              )}
            </div>
          ))}
        </div>

        <div className="tw-hidden md:tw-flex tw-rounded-full tw-border-2 tw-border-darkPurple tw-relative">
          <div className="tw-rounded-full tw-bg-darkPurple  tw-px-[1.75rem] tw-py-[0.75rem] ">
            <h3 className="tw-text-white">Get Involved</h3>
          </div>
          <div className="tw-bg-white tw-rounded-tr-full tw-rounded-br-full tw-flex tw-items-center tw-justify-center">
            <div className="tw-px-[1.46rem] ">
              <SearchHeaderSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
