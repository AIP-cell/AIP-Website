import CustomHeaderSelect from "@/components/custom/CustomHeaderSelect";
import LogoHeaderSvg from "@/components/svg/LogoHeaderSvg";
import LogoSmSVG from "@/components/svg/LogoSmSVG";
import SearchHeaderSvg from "@/components/svg/SearchHeaderSvg";
import Link from "next/link";
import Sidebar from "./Sidebar";
import SearchSvg from "@/components/svg/SearchSvg";
import NormalLinks from "./NormalLinks";
const headerData = [
  {
    width: " tw-w-[6rem] ",
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
    id: "people-of-aip/founders",
    name: "People of AIP",
    link: "/people-of-aip/founders",
  },
  {
    width: " tw-w-[10.5rem] ",
    label: "Our Work",
    id: "our-work",
    options: [
      
      { option: "Our Offerings", link: "/our-work/our-offerings" },
      { option: "NPO Registry", link: "/our-work/npo" },
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
      { option: "AIP Resources", link: "/resource-center/aip-resources" },
      {
        option: "Curated Resources",
        link: "/resource-center/curated-resources",
      },
    ],
  },
  { id: "careers", name: "Careers", link: "/careers" },
  { id: "contact", name: "Contact", link: "/contact" },
];
const Header = () => {
  
  return (
    <div className="tw-z-[10000] tw-fixed tw-right-0 tw-left-0 tw-top-0 max-lg:tw-bg-toRightPurpleToBlue md:tw-bg-white  ">
      <div className="container tw-mx-auto tw-flex tw-justify-between tw-items-center ~tw-pt-[0.875rem]/[1rem] ~tw-pb-[0.75rem]/[0.9rem] tw-px-[1.25rem]">
        <Link href="/" className="tw-hidden lg:tw-block">
          <LogoHeaderSvg />
        </Link>
        <Link href="/" className="tw-block lg:tw-hidden">
          <LogoSmSVG className="tw-h-[2.75rem] tw-w-[4.5rem]" />
        </Link>
        <div className="tw-flex tw-items-center tw-text-white tw-gap-[1rem] lg:tw-hidden">
          <SearchSvg className="tw-size-[1.5rem]" />
          <Sidebar />
        </div>
        <div className="tw-hidden lg:tw-flex tw-gap-[2.5rem] ">
          {headerData.map((items: any, index: number) => (
            <div key={index} className="tw-flex tw-items-center ">
              {items.options ? (
                <div className="tw-flex tw-gap-[2.5rem]">
                  <CustomHeaderSelect items={items} />
                </div>
              ) : (
                <NormalLinks items={items}/>
              )}
            </div>
          ))}
        </div>

        <div className="tw-hidden lg:tw-flex tw-rounded-full tw-border-2 tw-border-darkPurple tw-relative">
          <div className="tw-rounded-full tw-bg-darkPurple  tw-px-[1.75rem] tw-py-[0.75rem] ">
            <h3 className="tw-text-white tw-text-h9Copy5 tw-leading-[1.225rem]">
              Get Involved
            </h3>
          </div>
          <div className="tw-bg-white tw-rounded-tr-full tw-rounded-br-full tw-flex tw-items-center tw-justify-center">
            <Link href="/search" className="tw-px-[1.46rem] ">
              <SearchHeaderSvg />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
