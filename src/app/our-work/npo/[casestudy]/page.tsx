import Agenda from "@/app/our-work/collaborations/[slug]/_components/Agenda";
import InnerCollaborations from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborations";
import InnerCollaborationsVideo from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationsVideo";
import InnerCollaborationTestimonials from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationTestimonials";
import Gallery from "@/app/our-work/projects-and-programs/[slug]/_components/Gallery";
import Media from "@/app/our-work/projects-and-programs/[slug]/_components/Media";
import { TCuratedResourcesExpertsInner } from "@/api/type";
import { Api } from "@/api/Api";
import InnerExpertsSectionOne from "@/app/resource-center/curated-resources/[slug]/[innerSlug]/_components/InnerExpertsSectionOne";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const getCuratedResourcesExpertsInnerApi = async (
  slug: string
): Promise<TCuratedResourcesExpertsInner> => {
  const response = await Api.getCuratedResourcesExpertsInner(slug);
  return response?.data;
};
const page = async ({
  params,
}: {
  params: Promise<{ casestudy: string; slug: string }>;
}) => {
  const asyncInnerSlug = (await params).casestudy;
  // const asyncSlug = (await params).slug;
  const response = await getCuratedResourcesExpertsInnerApi(asyncInnerSlug);
  if (!response) {
    notFound();
  }
  const curatedResource = response?.curatedResource;
  const galleryImages = response.curatedResource.galleryImages;
  return (
    <div className="pt-[5rem]">
      {curatedResource && (
        <InnerExpertsSectionOne
          innerData={curatedResource}
          params={asyncInnerSlug}
        />
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
