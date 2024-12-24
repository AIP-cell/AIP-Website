import React from "react";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import UserCheckSvg from "@/components/svg/UserCheckSvg";
import Link from "next/link";

export type TJob = {
  id: number;
  organization: number;
  hash: string;
  position_name: string;
  description: string;
  headcount: number;
  contract_details: string;
  career_page_url: string;
};

// const datas = [
//   {
//     title: "Brand Manager ",
//     desc: "Develop and execute marketing strategies to enhance the organization's brand awareness and reputation. Manage branding initiatives, and oversee communications campaigns.",
//   },
//   {
//     title: "Program Manager ",
//     desc: "Design, implement, and manage philanthropic programs, ensuring they meet their objectives and deliver measurable impact. Coordinate with stakeholders, and monitor progress.",
//   },
// ];

const PositionsGrid = ({ data }: { data: TJob[] }) => {
  return (
    <div className="relative ~pt-[1rem]/[3rem]">
      {data.map((item, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row justify-between ~gap-0/[5.4rem] w-full  py-8  border-b border-gray10"
        >
          <div className="">
            <p className="font-playFair ~text-h4a/h4 text-gray80 ~leading-[2.113rem]/[2.6rem]">
              {item.position_name}
            </p>
            <div className="relative">
              <div
                className="py-4 ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] font-inter text-midGray h-[10rem] overflow-hidden"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>
              <div className="absolute bg-gradient-to-b from-transparent to-bgLightPeach z-[1] inset-0 size-full"></div>
            </div>
          </div>
          <div className="text-end leading-[1.4rem] ~pt-[2rem]/0 font-inter w-fit flex items-end ~pb-0/4">
            <ButtonAnimation className="">
              <Link
                target="_blank"
                href={item.career_page_url}
                className="font-inter border-2 border-darkPurple text-h9BodyCopy5 rounded-3xl flex items-center gap-2 leading-[1.225rem]  text-darkPurple font-medium hover:text-white bg-white px-[1.75rem] py-[0.75rem] hover:bg-darkPurple"
              >
                <p>Apply</p>
                <UserCheckSvg className="size-[1.25rem]" />
              </Link>
            </ButtonAnimation>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PositionsGrid;
