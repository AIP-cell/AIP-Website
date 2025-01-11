import React from "react";
import Image from "next/image";
import CareersHeroSection from "./_components/CareersHeroSection";
import WhyWorkWithAip from "./_components/WhyWorkWithAip";
import OpenRules from "./_components/OpenRules";
import TestimonialSlick from "@/components/slick/TestimonialSlick";
import bottomSvg from "@public/svg/careers/bottomPurpleVert.svg";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import { TCareersPage } from "@/api/type";

export const dynamic = "force-dynamic";
const getCareersPageApi = async (): Promise<TCareersPage> => {
  const response = await Api.getCareersPage();
  return response.data;
};
const CareerPage = async () => {
  const response = await getCareersPageApi();
  if (!response) notFound();
  const jobs = response.jobs;
  const testimonials = response.testimonials;
  return (
    <div className="pt-[5rem]">
      <CareersHeroSection />
      <WhyWorkWithAip />

      {jobs.length != 0 && <OpenRules jobs={jobs} />}

      <div className="w-full relative pb-[5rem]">
        <Image
          src={bottomSvg}
          alt=""
          className="hidden lg:block absolute left-0 top-[-12rem]"
        />
        <div className="relative container mx-auto">
          <p className="~pt-[5rem]/[12.5rem] text-darkBlack text-center tracking-[0.04rem] ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair">
            Testimonials
          </p>
          {testimonials.length != 0 && (
            <TestimonialSlick slickArray={testimonials} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
