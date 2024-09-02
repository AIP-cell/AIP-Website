import React from "react";
import Link from "next/link";

import InnerSectionOne from "../../_components/InnerSectionOne";
import Gallery from "./_components/Gallery";
import Media from "./_components/Media";
import Testimonials from "@/app/about/aip-impact/foundation-fact-sheet/_components/Testimonials";
import Image from "next/image";
import TestimonialsProjectProgram from "./_components/TestimonialsProjectProgram";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <InnerSectionOne />
      <Gallery />
      <Media />
      <TestimonialsProjectProgram />
    </div>
  );
};

export default page;
