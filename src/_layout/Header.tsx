import CustomHeaderSelect from "@/components/custom/CustomHeaderSelect";
import LogoHeaderSvg from "@/components/svg/LogoHeaderSvg";
import SearchHeaderSvg from "@/components/svg/SearchHeaderSvg";
import Link from "next/link";
import React from "react";
const headerData = [
  {
    width: " tw-w-[6rem] ",
    options: [
      { option: "About Us", link: "/about/aip-journey" },
      { option: "The AIP Journey", link: "/about/aip-journey" },
      { option: "Our Approach", link: "/about/our-journey" },
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
      { option: "Products & Services", link: "/products-and-services/our-offerings" },
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
    <div className="tw-z-[10000] tw-fixed tw-right-0 tw-left-0 tw-top-0 tw-bg-white tw-flex tw-justify-between tw-pt-[1rem] tw-pb-[0.9rem] tw-px-[1.25rem] ">
      <Link href="/">
        <LogoHeaderSvg />
      </Link>
      {/* tw-relative */}
      <div className="tw-flex tw-gap-[2.5rem] ">
        {headerData.map((items: any, index: number) => (
          <div key={index} className="tw-flex  tw-items-center ">
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
      <div className=" tw-flex tw-rounded-full tw-border-2 tw-border-darkPurple tw-relative">
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
