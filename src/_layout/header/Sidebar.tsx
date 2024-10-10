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

const headerData = [
  {
    width: " tw-w-[6rem] ",
    label: "About Us",
    id: "about",
    options: [
      // { option: "About Us", link: "/about/aip-journey" },
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
    id: "people-of-aip",
    name: "People of AIP",
    link: "/people-of-aip/founders",
  },
  {
    width: " tw-w-[10.5rem] ",
    label: "Our Work",
    id: "our-work",
    options: [
      // {
      //   option: "Products & Services",
      //   link: "/our-work/our-offerings",
      // },
      { option: "Our Offerings", link: "/our-work/our-offerings" },
      { option: "NPO Registry", link: "#" },
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
    width: " tw-w-[9rem] ",
    label: "Resource Center",
    id: "resource-center",
    options: [
      // { option: "Resource Center", link: "/resource-center" },
      { option: "AIP Resources", link: "/resource-center" },
      { option: "Curated Resources", link: "#" },
      // { option: "Collaborations", link: "/resource-center/collaborations" },
    ],
  },
  { id: "careers", name: "Careers", link: "/careers" },
  { id: "contact", name: "Contact", link: "/contact" },
];
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
        <div className="tw-fixed tw-h-full tw-top-0 tw-left-0 tw-flex tw-w-full">
          <div className="tw-relative tw-w-[70%] tw-pt-[2.5rem] tw-px-[1.25rem] tw-bg-purpleToBlue md:tw-hidden tw-gap-[2.5rem] ">
            {headerData.map((items: any, index: number) => (
              <div
                key={index}
                className="tw-flex tw-flex-col tw-text-white tw-items-start "
              >
                {index === 0 && (
                  <Link
                    href="/"
                    className="tw-pb-[1.25rem] tw-border-b-2 tw-w-full tw-border-[#B861B3]"
                  >
                    Home
                  </Link>
                )}
                {items.options ? (
                  <div className="tw-flex tw-w-full tw-gap-[2.5rem]">
                    <CustomHeaderSelect items={items} />
                  </div>
                ) : (
                  <Link
                    href={items.link}
                    className={cn(
                      " tw-border-b-2 tw-w-full tw-border-[#B861B3] ~tw-py-[1.25rem]/0 ",
                      { "tw-border-none": index === headerData.length - 1 }
                    )}
                  >
                    {items.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="">
              <ButtonAnimation className="tw-mt-[2.5rem] tw-w-full tw-bg-white tw-rounded-full">
                <p className="tw-py-[0.75rem] tw-text-h9Copy5 tw-text-textPurple">
                  Register
                </p>
              </ButtonAnimation>
            </div>
            <Image src={Jelly} alt="" />
          </div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="tw-w-[30%] tw-bg-[#FFFDF7] tw-relative"
          >
            <ButtonAnimation className="tw-absolute tw-top-[1.23rem] tw-right-[1.25rem]">
              <CrossSvg
                onClick={() => {
                  setIsOpen(false);
                }}
                className=" tw-cursor-pointer tw-size-[2rem] "
              />
            </ButtonAnimation>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
