import React from "react";
import FaqItem from "./_components/FaqItem";
import List from "./_components/List";

const page = () => {
  return (
      <div className="container mx-auto grid md:grid-cols-3 gap-[3.75rem]">
        <div >
            <p className="leading-[3.3rem] text-h2Heading2 mb-12">FAQS</p>
                <List name="General Inquiry"/>
                <List name="Founder Network"/>
                <List name="Philanthropic Network"/>
                <List name="NPO"/>
        </div>
        <div className="md:col-span-2">
          <FaqItem />
        </div>
      </div>
  );
};

export default page;
