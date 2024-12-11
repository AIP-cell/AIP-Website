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
];

const PositionsGrid = () => {
  return (
    <div className="relative ~pt-[1rem]/[3rem]">
      {datas.map((item, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row justify-between ~gap-0/[5.4rem] w-full  py-8  border-b border-gray10"
        >
          <div className="">
            <p className="font-playFair ~text-h4a/h4 text-gray80 ~leading-[2.113rem]/[2.6rem]">
              {item.title}
            </p>
            <p className="py-4 ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] font-inter text-midGray">
              {item.desc}
            </p>
          </div>
          <div className="text-end leading-[1.4rem] ~pt-[2rem]/0 font-inter w-fit flex items-end ~pb-0/4">
            <ButtonAnimation className="  ">
              <Link
                href=""
                className="font-inter border-2 border-darkPurple text-h9BodyCopy5 rounded-3xl flex items-center gap-2 leading-[1.225rem]  text-darkPurple font-medium hover:text-white bg-white px-[1.75rem] py-[0.75rem] hover:bg-darkPurple"
              >
                <p>Apply</p>
                <UserCheckSvg className="size-[1.25rem]" />
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
