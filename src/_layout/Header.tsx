import CustomSelect from "@/components/custom/CustomSelect";
import LogoHeaderSvg from "@/components/svg/LogoHeaderSvg";
import SearchHeaderSvg from "@/components/svg/SearchHeaderSvg";
import Link from "next/link";
import React from "react";
const headerData = [
  {
    width: " tw-w-[6rem] ",
    options: [
      { option: "About Us", link: "#" },
      { option: "The AIP Journey", link: "/about/aip-journey" },
      { option: "Our Approach", link: "/about/our-journey" },
      { option: "AIP Impact", link: "/about/aip-impact" },
      { option: "Giving Roadmap", link: "/about/giving-roadmap" },
      { option: "Financial Reports", link: "#" },
      { option: "AIP Founder Network", link: "#" },
      { option: "Philanthropist Network", link: "#" },
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
      { option: "Products & Services", link: "#" },
      { option: "Our Offerings", link: "#" },
      { option: "NPO Registry", link: "#" },
      { option: "Projects and Programs", link: "#" },
      { option: "Collaborations", link: "#" },
    ],
  },
  {
    width: " tw-w-[9rem] ",
    options: [
      { option: "Resource Center", link: "#" },
      { option: "Our Offerings", link: "#" },
      { option: "NPO Registry", link: "#" },
      { option: "Projects and Programs", link: "#" },
      { option: "Collaborations", link: "#" },
    ],
  },
  { name: "Careers", link: "#" },
  { name: "Contact", link: "#" },
];
const Header = () => {
  return (
    <div className="tw-relative  tw-bg-white tw-flex tw-justify-between tw-py-[1.1rem] tw-px-[1.25rem] tw-overflow-hidden">
      <Link href="/">
        <LogoHeaderSvg />
      </Link>
      <div className="tw-flex tw-gap-[2.5rem]">
        {headerData.map((items: any, index: number) => (
          <div key={index} className="tw-flex  tw-items-center ">
            {items.options ? (
              <div className="tw-flex tw-gap-[2.5rem]">
                <CustomSelect options={items.options} />
              </div>
            ) : (
              <Link href={items.link}>{items.name}</Link>
            )}
          </div>
        ))}
      </div>
      <div className=" tw-flex  tw-rounded-full tw-border-2 tw-border-darkPurple vrelative">
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
  );
};

export default Header;
