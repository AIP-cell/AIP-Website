import Link from "next/link";
import React from "react";
import FilterDownArrowSvg from "@/components/svg/FilterDownArrowSvg";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import FadeInAnimation from "@/components/animations/FadeInAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

const NotFound = () => {
  return (
    <div className="pt-[5rem]  container mx-auto h-screen">
      <div className="relative">
        <BreadCrump textOne="Home" linkOne="/" />
      </div>
      <div className="~pt-[8rem]/[12.5rem] flex flex-col items-center justify-center">
        <TextStaggerAnimation
          text="Oops! <color>Nothing here!</color>"
          className="~text-h4/h1 ~leading-[2.6rem]/[3.713rem] font-playFair text-gray80"
        />
        <FadeInAnimation delay={0.1} y1={20}>
          <div className="~pt-[5rem]/[4.5rem] flex justify-center">
            <div className="py-[0.75rem] px-[2rem]  rounded-full bg-darkPurple">
              <Link
                href="/"
                className="text-white flex items-center gap-[0.5rem]"
              >
                <FilterDownArrowSvg className="size-[1.25rem] shrink-0 rotate-[90deg]" />
                <p className=" text-h9Copy5 leading-[1.225rem]">Go Back</p>
              </Link>
            </div>
          </div>
        </FadeInAnimation>
      </div>
    </div>
  );
};

export default NotFound;
