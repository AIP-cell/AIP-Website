import React from "react";

import InnerSectionOne from "../../_components/InnerSectionOne";
import Gallery from "./_components/Gallery";
import Media from "./_components/Media";
import TestimonialsProjectProgram from "./_components/TestimonialsProjectProgram";
import { Api } from "@/api/Api";
import { TOneProjectProgramsPage } from "@/api/type";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const response = await Api.getOneProjectsPrograms(slug);
  const seo = response?.data.projectAndProgram ?? {};

  return {
    ...seo,
    alternates: {
      canonical: `/our-work/projects-and-programs/${slug}`,
    },
  };
}

const getOneProjectsProgramsApi = async (
  slug: string
): Promise<TOneProjectProgramsPage> => {
  const response = await Api.getOneProjectsPrograms(slug);
  return response?.data;
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const asyncParam = (await params).slug;
  const response = await getOneProjectsProgramsApi(asyncParam);
  if (!response) {
    notFound();
  }
  const heroSectionData = response?.projectAndProgram;
  const gallery = response?.projectAndProgram?.gallery;
  const media = response?.projectAndProgram?.media;
  const testimonials = response?.projectAndProgram?.testimonials;
  return (
    <div className="~pt-[5rem]/[10rem]">
      {heroSectionData && <InnerSectionOne heroSectionData={heroSectionData} />}
      {gallery?.galleryImages && gallery?.galleryImages.length != 0 && (
        <Gallery
          galleryLink={`/our-work/projects-and-programs/${asyncParam}/event-gallery`}
          galleryImages={gallery?.galleryImages}
        />
      )}
      {media && media.length != 0 && <Media media={media} />}
      {testimonials && testimonials.length != 0 && (
        <TestimonialsProjectProgram testimonials={testimonials} />
      )}
    </div>
  );
};

export default page;
