// import TestimonialRespSlick from "@/components/slick/TestimonialRespSlick";
import { TTestimonials } from "@/api/type";
import TestimonialSlick from "@/components/slick/TestimonialSlick";
import React from "react";

type Props = {
  testimonials?: TTestimonials[];
};
const TestimonialsFromFounders = ({ testimonials }: Props) => {
  return (
    <div className="~pt-[8.125rem]/[12.5rem] pb-[7.404rem]">
      <h2 className="font-playFair ~leading-[2.6rem]/[3.3rem] text-gray80 ~text-h4/h2 text-center">
        Philanthropist
        <span className="font-playFairItalic text-textPurple">&nbsp;Speak</span>
      </h2>
      <p className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-midGray ~pt-[0.8rem]/[1.25rem] text-center">
        Some testimonials from our Founders.
      </p>
      {testimonials && testimonials.length != 0 && (
        <TestimonialSlick slickArray={testimonials} />
      )}
      {/* <TestimonialRespSlick slickArray={testimonialsArray} /> */}
    </div>
  );
};

export default TestimonialsFromFounders;
