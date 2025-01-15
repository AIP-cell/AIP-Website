import Gallery from "@/app/our-work/projects-and-programs/[slug]/_components/Gallery";
import {
  TCuratedResourcesExpertsInner,
  TCuratedResourcesInner,
} from "@/api/type";
import { Api } from "@/api/Api";
import InnerExpertsSectionOne from "@/app/resource-center/curated-resources/[slug]/[innerSlug]/_components/InnerExpertsSectionOne";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const getNposCaseStudyApi = async (
  slug: string
): Promise<TCuratedResourcesInner> => {
  const response = await Api.getNposCaseStudy(slug);
  return response?.data;
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const asyncInnerSlug = (await params).slug;
  // const asyncSlug = (await params).slug;
  const response = await getNposCaseStudyApi(asyncInnerSlug);
  if (!response) {
    notFound();
  }

  const galleryImages = response?.galleryImages;
  return (
    <div className="pt-[5rem]">
      {response && (
        <InnerExpertsSectionOne innerData={response} params={asyncInnerSlug} />
      )}
      {galleryImages && (
        <div className="container mx-auto ~pb-[5rem]/[7.5rem]">
          <Gallery galleryImages={galleryImages} />
        </div>
      )}
    </div>
  );
};

export default page;
