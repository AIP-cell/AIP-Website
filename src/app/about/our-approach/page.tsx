import Image from "next/image";
import React from "react";
import Bg from "@public/svg/approachPurpleBg.svg";
import FivePModel from "./_components/FivePModel";
import ApproachHeroSection from "./_components/ApproachHeroSection";
import ShapeTheFlow from "./_components/ShapeTheFlow";
import FourPillars from "./_components/FourPillars";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about/our-approach",
  },
};

const page = () => {
  return (
    <div className="pt-[5rem]">
      <div className="relative w-full">
        <Image
          src={Bg}
          alt=""
          className="absolute ~top-[-26rem]/[-4rem]  right-0"
        />
        <ApproachHeroSection />
        <ShapeTheFlow />
        <FourPillars />
        <FivePModel />
      </div>
    </div>
  );
};

export default page;
