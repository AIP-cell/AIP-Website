"use client";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import MenuSvg from "@/components/svg/MenuSvg";
import Link from "next/link";
import Jelly from "@public/svg/footer/jelly.svg";
import { useState } from "react";
import Image from "next/image";
import cn from "@/utils/tailwind";
import CrossSvg from "@/components/svg/CrossSvg";
import CustomAccordionSelect from "@/components/custom/CustomAccordionSelect";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
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
      { option: "Our Core Founders", link: "/people-of-aip/core-founder" },
      { option: "Founders", link: "/people-of-aip/founders" },
      {
        option: "Our Advisory Board",
        link: "/people-of-aip/advisory-board",
      },
      { option: "Team AIP", link: "/people-of-aip/team-aip" },
      // { option: "Experts", link: "/people-of-aip/experts" },
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
      {
        option: "AIP Resources",
        link: "/resource-center/aip-resources/aip-updates",
      },
      {
        option: "Curated Resources",
        link: "/resource-center/curated-resources/featured",
      },
    ],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen && (
        <ButtonAnimation
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MenuSvg className="size-[2rem]" />
        </ButtonAnimation>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="xl:hidden fixed h-full top-0 left-0 flex w-full bg-[#979796]"
          >
            <div className="relative w-[70%] pt-[2.5rem] px-[1.25rem] rounded-tr-lg  rounded-br-lg overflow-hidden bg-purpleToBlue xl:hidden gap-[2.5rem] ">
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
                  href="/careers"
                  onClick={() => setIsOpen(!isOpen)}
                  className={cn(
                    " border-b-[1.7px] text-h9Copy5 leading-[1.225rem] w-full border-[#B861B3] py-[1.25rem] "
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
              <div className="">
                <ButtonAnimation className="mt-[2.5rem] w-full bg-white rounded-full">
                  <p className="py-[0.75rem] text-h9Copy5 leading-[1.225rem] text-textPurple">
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
              className="w-[30%] bg-[#979796] relative"
            >
              <ButtonAnimation
                onClick={() => {
                  setIsOpen(false);
                }}
                className="absolute top-[1.23rem] right-[1.25rem]"
              >
                <CrossSvg className=" cursor-pointer size-[1.5rem] " />
              </ButtonAnimation>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
