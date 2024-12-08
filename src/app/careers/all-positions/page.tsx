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
    type: "Level",
    filter: ["data1", "data2"],
  },
  { type: "City", filter: ["data1", "data2"] },
  { type: "Type", filter: ["data1", "data2"] },
];
const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className=" tw-relative bg-container tw-mx-auto ">
        <Image
          src={careerBg}
          alt=""
          className="tw-hidden md:tw-block tw-absolute tw-top-[-8rem] tw-w-full"
        />
        <Image
          src={careerSmallBg}
          alt=""
          className="tw-block md:tw-hidden  tw-absolute tw-top-[-4.5rem] tw-w-full"
        />
        <div className="container tw-mx-auto tw-relative ~tw-px-[1.25rem]/[7.8rem] ~tw-pt-[4.3rem]/[5rem]">
          <Image
            src={rightBottomWave}
            alt="peach-wave"
            className="tw-hidden lg:tw-block tw-absolute tw-bottom-0 tw-right-0"
          />
          <BreadCrump
            textOne="Careers"
            linkOne="/careers"
            textTwo="All Positions"
            linkTwo="/careers/all-positions"
          />
          <p className="tw-font-inter tw-font-semibold tw-uppercase ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.138rem]/[1.3rem] tw-text-purple40 tw-tracking-[.02rem]">
            All Positions
          </p>
          <p className="~tw-leading-[2.113rem]/[2.6rem] tw-font-playFair ~tw-text-h4a/h4 tw-text-gray80 tw-pt-5 tracking-[0.02rem]">
            See where you fit into the movement!{" "}
          </p>
          <p className="~tw-leading-[2.113rem]/[2.6rem] tw-font-playFair ~tw-text-h4a/h4 tw-text-gray80 ~tw-pb-[7.3rem]/[5rem]">
            Apply now. We’ll surely get back to you at the soonest.
          </p>

          <div className="tw-flex tw-flex-wrap ~tw-pt-0/[2rem] tw-items-center tw-gap-[0.75rem]">
            <p className=" tw-text-gray40  ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="tw-flex tw-flex-wrap tw-gap-[.75rem]">
              {filterDatas.map((items, i) => (
                <CustomFilter
                  type={items.type}
                  key={i}
                  optionsArray={items.filter}
                />
              ))}
            </div>
          </div>

          <PositionsGrid />

          <div className=" ~tw-px-0/[6.563rem] ~tw-pt-[2.5rem]/20  ">
            <div className="~tw-px-5/[9.375rem] tw-py-[2rem] tw-rounded-[1.25rem] tw-text-center tw-bg-lightgrey">
              <p className="tw-font-playFair ~tw-text-h5/h4a ~tw-leading-[1.75rem]/[2.113rem] tw-text-gray80">
                Can’t Find what you are looking for?
              </p>
              <p className="tw-font-inter tw-text-h9Copy5 tw-leading-[1.4rem] tw-pt-3 tw-text-midGray">
                Send in your resume and portfolio at
                <Link
                  href="mailto:careers@indianphilanthropy.org"
                  className="tw-text-textPurple tw-inline-block tw-underline"
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
