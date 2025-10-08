import projectBg from "@public/svg/projects-page/projectBg.svg";

import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import GalleryVideos from "./_components/GalleryVideos";
import GalleryImages from "./_components/GalleryImages";
import { Api } from "@/api/Api";
import { TGalleryCollaboration } from "@/api/type";
import { notFound } from "next/navigation";
import FadeInAnimation from "@/components/animations/FadeInAnimation";

export const dynamic = "force-dynamic";

const getOneGalleryCollaborationsApi = async (
  slug: string,
  city: string
): Promise<TGalleryCollaboration> => {
  const response = await Api.getOneGalleryCollaborations(slug, city);
  return response?.data;
};
const page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ city: string }>;
}) => {
  const asyncParam = (await params).slug;
  const asyncSearchparams = (await searchParams).city;
  const response = await getOneGalleryCollaborationsApi(
    asyncParam,
    asyncSearchparams
  );
  if (!response) {
    notFound();
  }
  const galleryImages = response?.gallery?.galleryImages;
  const galleryVideos = response?.gallery?.galleryVideos;
  return (
    <div className="~pt-[5rem]/[10rem]">
      <div className=" relative w-full overflow-hidden">
        <Image
          src={projectBg}
          alt="bg"
          className="hidden lg:block absolute top-[-8.5rem] w-full h-[30rem] "
        />
        <div className="container mx-auto relative ~px-5/[7.8rem] ~pt-[4.313rem]/[5rem]">
          <BreadCrump
            textOne="Our Work"
            linkOne="#"
            textTwo="Collaborations"
            linkTwo="/our-work/collaborations"
            textThree={response?.title}
            linkThree={`/our-work/collaborations/${asyncParam}`}
            textFour="Event Gallery"
            linkFour={`/our-work/collaborations/${asyncParam}/event-gallery`}
          />
          <FadeInAnimation delay={0.1} y1={20} y2={0}>
            <p className="font-inter  font-semibold uppercase ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.3rem] text-purple40">
              {response?.title}
            </p>
          </FadeInAnimation>
          <FadeInAnimation delay={0.1} y1={20} y2={0}>
            <p className="~leading-[2.113rem]/[2.6rem] font-playFair ~text-h4a/h4 text-gray80 pt-5 ~pb-0/[5rem] md:tracking-[-0.02rem]">
              {response?.description}
            </p>
          </FadeInAnimation>
          {galleryVideos && galleryVideos.length != 0 && (
            <GalleryVideos galleryVideos={galleryVideos} />
          )}
          {galleryImages && galleryImages.length != 0 && (
            <GalleryImages galleryImages={galleryImages} />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
