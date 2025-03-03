import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
// import ResourcesSm from "../_components/ResourcesSm";
// import TabListAndRespSelect from "../_components/TabListAndRespSelect";
import ResourceCard from "@/components/cards/ResourceCard";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import CardAnimation from "@/components/animations/CardAnimation";

// export const dynamic = "force-dynamic";
const dummyArray = [
  {
    title: "title",
    description: "description",
    domain: "domain",
    date: "",
  },
  {
    title: "title",
    description: "description",
    domain: "domain",
    date: "",
  },
  {
    title: "title",
    description: "description",
    domain: "domain",
    date: "",
  },
  {
    title: "title",
    description: "description",
    domain: "domain",
    date: "",
  },
];
const page = async () => {
  return (
    <div className="pt-[5rem] overflow-x-hidden min-h-screen">
      <div className="container mx-auto relative ~px-5/[7.5rem] pb-[7.5rem]">
        <div className="~px-5/flex ~pt-0/[1.25rem] gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="#"
            textTwo="Blogs"
            linkTwo="/resource-center/blogs"
          />
          <div className="max-w-[51.188rem] ~pt-[4.3rem]/[5rem] ~pb-[2.5rem]/[4rem]">
            <WordStaggerAnimation
              text="Blogs"
              className="font-playFair leading-[3.3rem] ~text-h4/[3rem] text-gray80"
            />
          </div>
        </div>

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
          {dummyArray?.map((item, i) => (
            <CardAnimation index={i} delay={0.1} key={i}>
              <ResourceCard
                //   city={item.city}
                //   linkKey={item?.key}
                index={i}
                //   slug={item?.slug}
                //   isLinkOrPdf={item?.isLinkOrPdf}
                //   file={item?.file}
                //   fileLink={item?.fileLink}
                key={i}
                // src={item?.image}
                title={item?.title}
                desc={item?.description}
                category={item?.domain}
                domain={item?.domain}
                date={item?.date}
              />
            </CardAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
