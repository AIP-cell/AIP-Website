import React from "react";
import projectBg from "@public/svg/projects-page/projectBg.svg";
import Link from "next/link";
import SampleImage from "@public/images/sample.png";

import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";

import { Api } from "@/api/Api";
import { TGalleryCollaboration } from "@/api/type";
import { notFound } from "next/navigation";
import GalleryVideos from "@/app/our-work/collaborations/[slug]/event-gallery/_components/GalleryVideos";
import GalleryImages from "@/app/our-work/collaborations/[slug]/event-gallery/_components/GalleryImages";

export const dynamic = "force-dynamic";
const getOneGalleryProjectAndProgramsApi = async (
  slug: string
): Promise<TGalleryCollaboration> => {
  const response = await Api.getOneGalleryProjectAndPrograms(slug);
  return response?.data;
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const asyncParam = (await params).slug;
  const response = await getOneGalleryProjectAndProgramsApi(asyncParam);
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
        <div className="container mx-auto relative ~px-5/[7.8rem] ~pt-[5.2rem]/[5rem]">
          <BreadCrump
            textOne="Our Work"
            linkOne="#"
            textTwo="Projects And Programs"
            linkTwo="/our-work/projects-and-programs"
            textThree={response?.title}
            linkThree={`/our-work/projects-and-programs/${asyncParam}`}
            textFour="Event Gallery"
            linkFour={`/our-work/projects-and-programs/${asyncParam}/event-gallery`}
          />
          <p className="font-inter  font-semibold uppercase ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.3rem] text-purple40">
            {response?.title}
          </p>
          <p className="~leading-[2.113rem]/[2.6rem] font-playFair ~text-h4a/h4 text-gray80 pt-5 ~pb-0/[5rem] md:tracking-[-0.02rem]">
            {response?.description}
          </p>
          {galleryVideos && galleryVideos?.length != 0 && (
            <GalleryVideos galleryVideos={galleryVideos} />
          )}
          {galleryImages && galleryImages?.length != 0 && (
            <GalleryImages galleryImages={galleryImages} />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
