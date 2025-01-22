// import TestimonialRespSlick from "@/components/slick/TestimonialRespSlick";
import { TTestimonials } from "@/api/type";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import TestimonialSlick from "@/components/slick/TestimonialSlick";
import PeachCurve from "@public/svg/products-and-services/project-and-programs/testimonialRightPeachCurve.svg";
import Image from "next/image";
import React from "react";
type Props = {
  testimonials: TTestimonials[];
};
const InnerCollaborationTestimonials = ({ testimonials }: Props) => {
  return (
    <div className="relative w-full">
      <Image
        src={PeachCurve}
        alt="peach-curve-testimonial"
        className="hidden xl:block absolute top-0 right-0"
      />
      <div className="~py-[5rem]/[7.563rem] relative container mx-auto">
        {/* <h2 className="text-center font-playFair ~pb-[0.5rem]/[1.25rem] ~leading-[2.6rem]/[3.3rem] tracking-[-.04rem] ~text-h4/h2 text-gray80">
          <span className="font-playFairItalic text-textPurple">
            Gallery&nbsp;
          </span>
          Of Voices
        </h2> */}
        <TextStaggerAnimation text="<color>Gallery</color> Of Voices" className="text-center font-playFair ~pb-[0.5rem]/[1.25rem] ~leading-[2.6rem]/[3.3rem] tracking-[-.04rem] ~text-h4/h2 text-gray80"/>
        <p className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-midGray text-center ">
          Some words from the launch.
        </p>
        <TestimonialSlick slickArray={testimonials} />
        {/* <TestimonialRespSlick slickArray={testimonialsArray} /> */}
      </div>
    </div>
  );
};

export default InnerCollaborationTestimonials;
