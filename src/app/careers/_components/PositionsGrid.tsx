import React from "react";
import UserCheck from "@public/svg/careers/userCheck.svg";
import Image from "next/image";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import UserCheckSvg from "@/components/svg/UserCheckSvg";
import Link from "next/link";

const datas = [
  {
    title: "Brand Manager ",
    desc: "Develop and execute marketing strategies to enhance the organization's brand awareness and reputation. Manage branding initiatives, and oversee communications campaigns.",
  },
  {
    title: "Program Manager ",
    desc: "Design, implement, and manage philanthropic programs, ensuring they meet their objectives and deliver measurable impact. Coordinate with stakeholders, and monitor progress.",
  },
  {
    title: "Manager ",
    desc: "Oversee the daily operations of the philanthropic organization, ensuring efficient workflows and achieving strategic goals. Lead and mentor a team, and manage budgets.",
  },
  {
    title: "Program Associate ",
    desc: "Assist in the planning and execution of philanthropic programs, including data collection, analysis, and reporting. Provide administrative support, And coordinate events.",
  },
  {
    title: "Operating Partner",
    desc: "Support the organization's leadership by implementing strategic initiatives and operational improvements. Provide guidance on best practices, And monitor key performance indicators.",
  },
];

const PositionsGrid = () => {
  return (
    <div className="tw-relative">
      {datas.map((item, i) => (
        <div
          key={i}
          className="tw-flex tw-justify-between tw-items-center tw-py-8  tw-border-b tw-border-gray10"
        >
          <div className="">
            <p className="tw-font-playFair tw-text-h4 tw-text-gray80 tw-leading-[2.6rem]">
              {item.title}
            </p>
            <p className="tw-py-4 tw-leading-[1.4rem] tw-font-inter tw-text-midGray">
              {item.desc}
            </p>
          </div>
          <div className="tw-text-end tw-leading-[1.4rem] tw-font-inter tw-w-full">
            <ButtonAnimation className="  ">
              <Link
                href=""
                className="tw-font-inter tw-border-2 tw-border-darkPurple tw-text-h9BodyCopy5 tw-rounded-3xl tw-flex tw-items-center tw-gap-2 leading-[1.225rem]  tw-text-darkPurple tw-font-medium hover:tw-text-white tw-bg-white tw-px-[1.75rem] tw-py-[0.75rem] hover:tw-bg-darkPurple"
              >
                <p>Apply</p>
                <UserCheckSvg className="tw-size-[1.25rem]" />
                {/* <Image src={UserCheck} alt="arrow down" /> */}
              </Link>
            </ButtonAnimation>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PositionsGrid;
