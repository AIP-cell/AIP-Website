"use client";
import MenuSvg from "@/components/svg/MenuSvg";
import Link from "next/link";
import Jelly from "@public/svg/footer/jelly.svg";
import { useState } from "react";
import Image from "next/image";
import cn from "@/utils/tailwind";
import CrossSvg from "@/components/svg/CrossSvg";
import CustomAccordionSelect from "@/components/custom/CustomAccordionSelect";
import { AnimatePresence, motion } from "motion/react";
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
      { option: "AIP Founders Network", link: "/about/aip-founders-network" },
      {
        option: "Advisory Board",
        link: "/about/advisory-board",
      },
      // {
      //   option: "Philanthropist Network",
      //   link: "/about/philanthropist-network",
      // },
    ],
  },
  // {
  //   label: "People of AIP",
  //   id: "people-of-aip",
  //   options: [
  //     { option: "Our Core Founders", link: "/people-of-aip/core-founders" },
  //     { option: "Founders", link: "/people-of-aip/founders" },
  //     {
  //       option: "Our Advisory Board",
  //       link: "/people-of-aip/advisory-board",
  //     },
  //     { option: "Team AIP", link: "/people-of-aip/team-aip" },
  //     // { option: "Experts", link: "/people-of-aip/experts" },
  //   ],
  // },
  //  { id: "people-of-aip", name: "People of AIP", link: "/people-of-aip" },
  {
    label: "Our Work",
    id: "our-work",
    options: [
      { option: "What We Do", link: "/our-work/what-we-do" },
      { option: "Non-Profit Organizations", link: "/our-work/npo" },
      { option: "Experts", link: "/our-work/experts" },
      // {
      //   option: "Projects and Programs",
      //   link: "/our-work/projects-and-programs",
      // },
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
      {
        option: "AIP Resources",
        link: "/resource-center/aip-resources/aip-updates",
      },
      // {
      //   option: "Curated Resources",
      //   link: "/resource-center/curated-resources/featured",
      // },
      {
        option: "Blogs",
        link: "/resource-center/blogs",
      },
      {
        option: "Gallery",
        link: "/resource-center/gallery/voices-of-the-ecosystem",
      },
    ],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              onClick={() => {
                setIsOpen((open) => !open);
              }}
              className="xl:hidden fixed  inset-0 size-full bg-black/50"
            ></motion.div>
            <motion.div
              initial={{ x: "-100%", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="xl:hidden fixed  inset-y-0 left-0 no-scrollbar"
            >
              <div
                data-lenis-prevent
                className="relative w-[70vw] h-[100dvh] overflow-y-auto no-scrollbar pt-[2.5rem] px-[1.25rem] rounded-tr-lg  rounded-br-lg overflow-hidden bg-purpleToBlue xl:hidden gap-[2.5rem] "
              >
                <div className="flex flex-col text-white items-start">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(!isOpen)}
                    className="pb-[1.25rem] text-h9Copy5 leading-[1.225rem] border-b-[1.7px] w-full border-[#B861B3]"
                  >
                    Home
                  </Link>
                  <CustomAccordionSelect
                    setIsOpen={setIsOpen}
                    ArrayData={headerData}
                    accordionItemClassName="!border-[#B861B3]"
                    accordionTriggerClassName="!py-[1.25rem]"
                  />
                  <Link
                    href="/people-of-aip"
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                      "border-b-[1.7px] text-h9Copy5 leading-[1.225rem]  w-full border-[#B861B3] py-[1.25rem] "
                    )}
                  >
                    People of AIP
                  </Link>
                  <Link
                    href="/careers"
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                      "border-b-[1.7px] text-h9Copy5 leading-[1.225rem] w-full border-[#B861B3] py-[1.25rem]"
                    )}
                  >
                    Careers
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                      " text-h9Copy5 leading-[1.225rem]  w-full  pt-[1.25rem] "
                    )}
                  >
                    Contact
                  </Link>
                </div>
                <div className="mt-[2.5rem] w-full bg-white rounded-full">
                  <Link
                    href="/contact"
                    className=" text-center py-[0.75rem] text-h9Copy5 leading-[1.225rem] text-textPurple block"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Get Involved
                  </Link>
                </div>
                <Image src={Jelly} alt="" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <button
        className={cn("size-[2rem]", {
          " z-[100] ": isOpen,
        })}
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        {isOpen ? (
          <CrossSvg className="cursor-pointer size-[1.5rem] " />
        ) : (
          <MenuSvg className="size-[2rem]" />
        )}
      </button>
    </>
  );
};

export default Sidebar;
