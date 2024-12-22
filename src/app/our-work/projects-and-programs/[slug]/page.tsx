import React from "react";
import Link from "next/link";

import InnerSectionOne from "../../_components/InnerSectionOne";
import Gallery from "./_components/Gallery";
import Media from "./_components/Media";
import Testimonials from "@/app/about/aip-impact/foundation-fact-sheet/_components/Testimonials";
import Image from "next/image";
import TestimonialsProjectProgram from "./_components/TestimonialsProjectProgram";
import { Api } from "@/api/Api";
import { TOneProjectProgramsPage } from "@/api/type";

export const dynamic = "force-dynamic";
const getOneProjectsProgramsApi = async (
  slug: string
): Promise<TOneProjectProgramsPage> => {
  const response = await Api.getOneProjectsPrograms(slug);
  return response.data;
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const asyncParam = (await params).slug;
  const response = await getOneProjectsProgramsApi(asyncParam);
  
  const heroSectionData = response.projectAndProgram;
  const gallery = response.projectAndProgram.gallery;
  const media = response.projectAndProgram.media;
  const testimonials = response.projectAndProgram.testimonials;
  return (
    <div className="pt-[5rem]">
      <InnerSectionOne heroSectionData={heroSectionData} />
      <Gallery galleryImages={gallery.galleryImages} />
      <Media media={media} />
      <TestimonialsProjectProgram testimonials={testimonials}/>
    </div>
  );
};

export default page;
