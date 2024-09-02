import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import FounderNetworkHeroSection from "./_components/FounderNetworkHeroSection";

import Link from "next/link";
import Image from "next/image";
import Join from "./_components/Join";
import TestimonialsFromFounders from "./_components/TestimonialsFromFounders";

const page = () => {
  return (
    <div>
      <FounderNetworkHeroSection />
      <Join />
      <TestimonialsFromFounders/>
    </div>
  );
};

export default page;
