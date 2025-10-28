import React from "react";
import OurOfferingHeroSection from "./_components/OurOfferingHeroSection";
import WeDo from "./_components/WeDo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | Accelerate Indian Philanthropy (AIP)",
  description:
    "AIP is sector, organisation, and method agnostic — working across diverse causes to align with philanthropists' goals. Our tailored approach empowers philanthropists to create meaningful and lasting change across India.",
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
