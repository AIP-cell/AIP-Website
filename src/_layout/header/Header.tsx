import CustomHeaderSelect from "@/components/custom/CustomHeaderSelect";
import LogoHeaderSvg from "@/components/svg/LogoHeaderSvg";
import LogoSmSVG from "@/components/svg/LogoSmSVG";
import SearchHeaderSvg from "@/components/svg/SearchHeaderSvg";
import Link from "next/link";
import Sidebar from "./Sidebar";
import SearchSvg from "@/components/svg/SearchSvg";
import NormalLinks from "./NormalLinks";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
const headerData = [
  {
    width: " w-[6rem] ",
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
    id: "people-of-aip",
    label: "People of AIP",
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
    width: " w-[10.5rem] ",
    label: "Our Work",
    id: "our-work",
    options: [
      { option: "What We Do", link: "/our-work/what-we-do" },
      { option: "NPO Registry", link: "/our-work/npo" },
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
    width: " w-[9rem] ",
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
    ],
  },
  { id: "careers", name: "Careers", link: "/careers" },
  { id: "contact", name: "Contact", link: "/contact" },
];
const Header = () => {
  return (
    <div className=" z-[10000] fixed right-0 left-0 top-0 max-xl:bg-toRightPurpleToBlue xl:bg-white  ">
      <div className="container mx-auto flex justify-between items-center ~pt-[0.875rem]/[1rem] ~pb-[0.75rem]/[0.9rem] px-[1.25rem]">
        <Link href="/" className="hidden xl:block">
          <LogoHeaderSvg />
        </Link>
        <Link href="/" className="block xl:hidden">
          <LogoSmSVG className="h-[2.75rem] w-[4.5rem]" />
        </Link>
        <div className="flex items-center text-white gap-[1rem] xl:hidden">
          <Link href="/search">
            <SearchSvg className="size-[1.5rem]" />
          </Link>
          <Sidebar />
        </div>
        <div className="hidden xl:flex gap-[2.5rem] ">
          {headerData.map((items, index: number) => (
            <div key={index} className="flex items-center ">
              {items.options ? (
                <div className="flex gap-[2.5rem]">
                  <CustomHeaderSelect
                    items={items}
                    // isOpen={isOpen}
                    // setIsOpen={setIsOpen}
                  />
                </div>
              ) : (
                <NormalLinks items={items} />
              )}
            </div>
          ))}
        </div>
        <div className="hidden xl:flex rounded-full border-2 border-darkPurple relative">
          <div className="rounded-full bg-darkPurple  px-[1.75rem] py-[0.75rem] ">
            <Link
              href="/contact"
              className="text-white text-h9Copy5 leading-[1.225rem] "
            >
              Get Involved
            </Link>
          </div>
          <div className="bg-white rounded-tr-full rounded-br-full flex items-center justify-center">
            <Link href="/search" className="flex items-center justify-center">
              <ButtonAnimation className="px-[1.46rem]">
                <SearchHeaderSvg />
              </ButtonAnimation>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
