import React from "react";
import OurOfferingHeroSection from "./_components/OurOfferingHeroSection";
import WeDo from "./_components/WeDo";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/our-work/what-we-do",
  },
};

const page = () => {
  return (
    <div className="~pt-[5rem]/[10rem]">
      <OurOfferingHeroSection />
      <WeDo />
    </div>
  );
};

export default page;
