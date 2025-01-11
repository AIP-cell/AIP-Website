import React from "react";
import projectBg from "@public/svg/projects-page/projectBg.svg";
import Link from "next/link";
import SampleImage from "@public/images/sample.png";

import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import GalleryVideos from "./_components/GalleryVideos";
import GalleryImages from "./_components/GalleryImages";
import { Api } from "@/api/Api";
import { TGalleryCollaboration } from "@/api/type";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const getOneGalleryCollaborationsApi = async (
  slug: string
): Promise<TGalleryCollaboration> => {
  const response = await Api.getOneGalleryCollaborations(slug);
  return response.data;
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const asyncParam = (await params).slug;
  const response = await getOneGalleryCollaborationsApi(asyncParam);
  if (!response) {
    notFound();
  }
  const galleryImages = response?.gallery?.galleryImages;
  const galleryVideos = response?.gallery?.galleryVideos;
  return (
    <div className="pt-[5rem]">
      <div className=" relative w-full overflow-hidden">
        <Image
          src={projectBg}
          alt="bg"
          className="hidden lg:block absolute top-[-8.5rem] w-full h-[30rem] "
        />
        <div className="container mx-auto relative ~px-5/[7.8rem] ~pt-[4.313rem]/[5rem]">
          <BreadCrump
            textOne="Our Work"
            linkOne="/our-work"
            textTwo="Collaborations"
            linkTwo="/our-work/collaborations"
            textThree="slug"
            linkThree="/our-work/collaborations/slug"
            textFour="Event Gallery"
            linkFour="/our-work/collaborations/slug/event-gallery"
          />
          <p className="font-inter  font-semibold uppercase ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.3rem] text-purple40">
            Systemic Impact Exemplars
          </p>
          <p className="~leading-[2.113rem]/[2.6rem] font-playFair ~text-h4a/h4 text-gray80 pt-5 ~pb-0/[5rem] md:tracking-[-0.02rem]">
            AIP hosts events across cities in the world. AIP is continuously
            bringing inspirational philanthropists together to help co-create
            this network and establish personal philanthropy as a means for
            India’s transformation.
          </p>
          {galleryVideos.length != 0 && (
            <GalleryVideos galleryVideos={galleryVideos} />
          )}
          {galleryImages.length != 0 && (
            <GalleryImages galleryImages={galleryImages} />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
