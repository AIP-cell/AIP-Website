import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSection from "./_components/HeroSection";
import OurValueSection from "./_components/OurValueSection";
const page = () => {
  return (
    <div>
      <HeroSection />   
      <OurValueSection/>
      
    </div>
  );
};

export default page;
