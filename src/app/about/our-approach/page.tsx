import Image from "next/image";
import Link from "next/link";
import React from "react";
import Bg from "@public/svg/approachPurpleBg.svg";
import FivePModel from "./_components/FivePModel";
import ovalPeach from "@public/svg/ovalPeach.svg";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import ApproachHeroSection from "./_components/ApproachHeroSection";
import ShapeTheFlow from "./_components/ShapeTheFlow";
import FourPillars from "./_components/FourPillars";
const page = () => {
  return (
    <div className="pt-[5rem]">
      <div className="relative w-full">
        <Image
          src={Bg}
          alt=""
          className="absolute ~top-[-26rem]/[-4rem]  right-0"
        />
        <ApproachHeroSection/>
        <ShapeTheFlow/>
        <FourPillars/>
        <FivePModel />
      </div>
    </div>
  );
};

export default page;
