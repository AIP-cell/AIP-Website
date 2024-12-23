import React from "react";
import careerBg from "@public/svg/careers/careerBg.svg";
import careerSmallBg from "@public/svg/careerHeroSvg.svg";
import rightBottomWave from "@public/svg/about/philanthropist-network/peachVertWaveLeft.tsx.svg";
import Image from "next/image";
import Link from "next/link";
import PositionsGrid from "../_components/PositionsGrid";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomSelect from "@/components/custom/CustomSelect";
import CustomFilter from "@/components/custom/CustomFilter";
const departmentData = ["Department", "Department"];
const dateData = ["Date", "Date"];
const locationData = ["Location", "Location"];
const filterDatas = [
  {
    key: "function",
    type: "Function",
    filter: [
      "All",
      "Art & Culture",
      "Education",
      "Environment",
      "Health & Nutrition",
      "Legal & Judiciary",
      "Livelihood",
      "Disability",
      "Rural Development",
      "Sports",
      "WASH",
      "Women & Child",
    ],
  },
  {
    key: "level",
    type: "Level",
    filter: ["data1", "data2"],
  },
  { key: "city", type: "City", filter: ["data1", "data2"] },
  { key: "type", type: "Type", filter: ["data1", "data2"] },
];
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    functions?: string;
    level?: string;
    city?: string;
    type?: string;
  }>;
}) => {
  const urlsearchParams = await searchParams;
  const { functions, level, city, type } = await searchParams;
  return (
    <div className="pt-[5rem]">
      <div className=" relative bg-container mx-auto ">
        <Image
          src={careerBg}
          alt=""
          className="hidden md:block absolute top-[-8rem] w-full"
        />
        <Image
          src={careerSmallBg}
          alt=""
          className="block md:hidden  absolute top-[-4.5rem] w-full"
        />
        <div className="container mx-auto relative ~px-[1.25rem]/[7.8rem] ~pt-[4.3rem]/[5rem]">
          <Image
            src={rightBottomWave}
            alt="peach-wave"
            className="hidden lg:block absolute bottom-0 right-0"
          />
          <BreadCrump
            textOne="Careers"
            linkOne="/careers"
            textTwo="All Positions"
            linkTwo="/careers/all-positions"
          />
          <p className="font-inter font-semibold uppercase ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.3rem] text-purple40 tracking-[.02rem]">
            All Positions
          </p>
          <p className="~leading-[2.113rem]/[2.6rem] font-playFair ~text-h4a/h4 text-gray80 pt-5 tracking-[0.02rem]">
            See where you fit into the movement!{" "}
          </p>
          <p className="~leading-[2.113rem]/[2.6rem] font-playFair ~text-h4a/h4 text-gray80 ~pb-[7.3rem]/[5rem]">
            Apply now. We’ll surely get back to you at the soonest.
          </p>

          <div className="flex flex-wrap ~pt-0/[2rem] items-center gap-[0.75rem]">
            <p className=" text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="flex flex-wrap gap-[.75rem]">
              {filterDatas.map((items, i) => (
                <CustomFilter
                  searchParams={{ ...urlsearchParams }}
                  filterKey={items.key}
                  type={items.type}
                  key={i}
                  optionsArray={items.filter}
                />
              ))}
            </div>
          </div>

          <PositionsGrid />

          <div className=" ~px-0/[6.563rem] ~pt-[2.5rem]/20  ">
            <div className="~px-5/[9.375rem] py-[2rem] rounded-[1.25rem] text-center bg-lightgrey">
              <p className="font-playFair ~text-h5/h4a ~leading-[1.75rem]/[2.113rem] text-gray80">
                Can’t Find what you are looking for?
              </p>
              <p className="font-inter text-h9Copy5 leading-[1.4rem] pt-3 text-midGray">
                Send in your resume and portfolio at
                <Link
                  href="mailto:careers@indianphilanthropy.org"
                  className="text-textPurple inline-block underline"
                >
                  &nbsp;careers@indianphilanthropy.org
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
