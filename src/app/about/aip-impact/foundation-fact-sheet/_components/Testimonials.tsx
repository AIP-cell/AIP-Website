import React from "react";
import TestimonialSlick from "../../../../../components/slick/TestimonialSlick";
import RightWave from "@public/svg/about/aip-impact/testimonialLeftPeachWave.svg";
import Image from "next/image";
import { TTestimonials } from "@/api/type";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
type Props = {
  testimonialsData: TTestimonials[];
};
const Testimonials = ({ testimonialsData }: Props) => {
  return (
    <div className="~mt-[7.5rem]/[12.5rem] relative">
      <Image
        src={RightWave}
        alt=""
        className="hidden lg:block left-0 absolute top-0"
      />
      <div className="relative container mx-auto">
        <TextStaggerAnimation
          text="Philanthropist <color>Speak</color>"
          className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-center"
        />
        <p className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-midGray ~pt-[0.8rem]/[1.25rem] text-center">
          Some testimonials from our philanthropists.
        </p>
        {testimonialsData && <TestimonialSlick slickArray={testimonialsData} />}
      </div>
    </div>
  );
};

export default Testimonials;
