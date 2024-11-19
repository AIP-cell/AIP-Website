import React from "react";
import careerBg from "@public/svg/careers/careerBg.svg";
import rightBottomWave from "@public/svg/about/philanthropist-network/peachVertWaveLeft.tsx.svg";
import Image from "next/image";
import Link from "next/link";
import PositionsGrid from "../_components/PositionsGrid";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomSelect from "@/components/custom/CustomSelect";
const departmentData = ["Department", "Department"];
const dateData = ["Date", "Date"];
const locationData = ["Location", "Location"];
const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className=" tw-relative bg-container tw-mx-auto ">
        <Image
          src={careerBg}
          alt=""
          className=" tw-absolute tw-top-[-8rem] tw-w-full"
        />
        <div className="container tw-mx-auto tw-relative tw-px-[7.8rem] tw-pt-[5rem]">
          <Image src={rightBottomWave} alt="peach-wave" className="tw-absolute tw-bottom-0 tw-right-0"/>
          <BreadCrump
            textOne="Careers"
            linkOne="/careers"
            textTwo="All Positions"
            linkTwo="/careers/all-positions"
          />
          <p className="tw-font-inter tw-font-semibold tw-uppercase tw-leading-[1.3rem] tw-text-purple40 tw-tracking-[.02rem]">
            All Positions
          </p>
          <p className="tw-leading-[2.6rem] tw-font-playFair tw-text-h4 tw-text-gray80 tw-pt-5 tracking-[0.02rem]">
            See where you fit into the movement!{" "}
          </p>
          <p className="tw-leading-[2.6rem] tw-font-playFair tw-text-h4 tw-text-gray80 tw-pb-[5rem]">
            Apply now. We’ll surely get back to you at the soonest.
          </p>

          <div className="tw-flex tw-pt-[2rem] tw-gap-[.75rem]">
            <p className="tw-py-3 tw-text-gray40 ">Filter by:</p>
            <CustomSelect optionsArray={["Function"]} ListboxButtonClassName="!tw-w-fit"/>
            <CustomSelect optionsArray={["Level"]} ListboxButtonClassName="!tw-w-fit" />
            <CustomSelect optionsArray={["City"]} ListboxButtonClassName="!tw-w-fit" />
            <CustomSelect optionsArray={["Type"]} ListboxButtonClassName="!tw-w-fit" />
          </div>

          <PositionsGrid />

          <div className=" tw-px-[6.563rem] tw-pt-20 tw-pb-[12.5rem] ">
            <div className="tw-px-[9.375rem] tw-py-[2.063rem] tw-rounded-[1.25rem] tw-text-center tw-bg-lightgrey">
              <p className="tw-font-playFair tw-text-h4a tw-leading-[2.113rem] tw-text-gray80">
                Can’t Find what you are looking for?
              </p>
              <div className="tw-font-inter tw-leading-[1.4rem] tw-flex  tw-pt-3 tw-text-midGray">
                Send in your resume and portfolio at
                <Link
                  href="mailto:careers@indianphilanthropy.org"
                  className="tw-text-textPurple tw-underline tw-pl-1"
                >
                  careers@indianphilanthropy.org
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
