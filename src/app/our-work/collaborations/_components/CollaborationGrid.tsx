import React from "react";
import bcgSvg from "@public/svg/projects-page/bcg.svg";
import Image from "next/image";
import Link from "next/link";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";

const datas = [
  {
    title: "Systemic Impact Exemplars ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Lorem ipsum dolor sit ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Lorem ipsum dolor sit ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Lorem ipsum dolor sit ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
];

const CollaborationGrid = () => {
  return (
    <div>
      {datas.map((item, i) => (
        <div
          key={i}
          className="relative flex flex-col justify-between ~pt-[2.5rem]/8 w-full  ~pb-[1.25rem]/9 border-b border-gray10"
        >
          <div className="w-full  flex flex-col md:flex-row ~gap-[1.25rem]/[2rem]">
            <div className="flex md:flex-col ~gap-[1rem]/0 leading-[1.4rem] w-full items-center md:items-start md:w-[14%]">
              <p className="font-bold text-midGray leading-[1.4rem]">
                11 Jul 2024
              </p>
              <p className="~pt-0/3 ~pb-0/[2.125rem] text-midGray leading-[1.4rem]">
                Report
              </p>
            </div>
            <div className="w-full md:w-[80%]">
              <Link href={`/our-work/collaborations/${item.title}`}>
                <p className="font-playFair ~text-h4a/h4 text-gray80 ~leading-[2.113rem]/[2.6rem] underline underline-offset-4 decoration-[1px]">
                  {item.title}
                </p>
              </Link>
              <p className="~pt-[1.25rem]/4 line-clamp-4 text-ellipsis  leading-[1.4rem] font-inter text-midGray ">
                {item.desc}
              </p>
            </div>
            <div className="w-full md:w-[35%] flex flex-col md:items-end leading-[1.4rem] ~pt-0/4">
              <p className="text-gray50 ~pb-[0.5rem]/3">
                In Collaboration with:
              </p>
              <div className="flex  md:justify-end gap-[0.75rem] flex-wrap">
                <div className="py-[0.563rem] shrink-0 px-[.68rem] w-fit bg-bgCollab rounded-[1.25rem] ">
                  <Image
                    src={bcgSvg}
                    alt="bcg"
                    className="size-[2.625rem]"
                  />
                </div>
                <div className="py-[0.563rem] shrink-0 px-[.68rem] w-fit bg-bgCollab rounded-[1.25rem] ">
                  <Image
                    src={bcgSvg}
                    alt="bcg"
                    className="size-[2.625rem]"
                  />
                </div>
                <div className="py-[0.563rem]  px-[.68rem] w-fit bg-bgCollab rounded-[1.25rem] ">
                  <Image
                    src={bcgSvg}
                    alt="bcg"
                    className="size-[2.625rem]"
                  />
                </div>
                <div className="py-[0.563rem] shrink-0 px-[.68rem] w-fit bg-bgCollab rounded-[1.25rem] ">
                  <Image
                    src={bcgSvg}
                    alt="bcg"
                    className="size-[2.625rem]"
                  />
                </div>
                <div className="py-[0.563rem] shrink-0 px-[.68rem] w-fit bg-bgCollab rounded-[1.25rem] ">
                  <Image
                    src={bcgSvg}
                    alt="bcg"
                    className="size-[2.625rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollaborationGrid;
