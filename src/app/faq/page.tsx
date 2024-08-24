import React from "react";
import FaqItem from "./_components/FaqItem";
import BgFaq from "@public/svg/bg-faq.svg";
import List from "./_components/List";
import Image from "next/image";

const page = () => {
  return (
    <div className=" relative  ">
      <Image src={BgFaq} alt=""  className="left-0 absolute " />
      <div className="container mx-auto grid md:grid-cols-3 gap-[3.75rem] h-screen">
        <div>
          <p className="leading-[3.3rem] text-h2Heading2 mb-12">FAQS</p>
          <List name="General Inquiry" />
          <List name="Founder Network" />
          <List name="Philanthropic Network" />
          <List name="NPO" />
        </div>
        <div className="md:col-span-2">
          <FaqItem />
        </div>
      </div>
    </div>
  );
};

export default page;
