import BreadCrump from "@/components/bread-crump/BreadCrump";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
export const dynamic = "force-dynamic";

import { Metadata } from "next";
import ResourceCard from "@/components/cards/ResourceCard";

export const metadata: Metadata = {
  alternates: {
    canonical: "/resource-center/books",
  },
};
const response = [
  {
    _id: "67d5f7471c738dff81025c94",
    title: "Live to Give",
    readingTime: "4 minutes",
    author: "Rashmi Bansal",
    description:
      "Live to Give by Rashmi Bansal is an upcoming book that chronicles the journeys of philanthropists in India. Through a collection of inspiring stories, it explores the motivations, challenges, and impact of individuals who chose to dedicate their wealth and energy toward creating social change. Blending narrative storytelling with real-world insights, the book captures both the personal journeys of givers and the broader lessons on how philanthropy can shape communities and society at large.",
    shortDescription:
      "Live to Give by Rashmi Bansal is an upcoming book that chronicles the journeys of philanthropists in India. Through a collection of inspiring stories, it explores the motivations, challenges, and impact of individuals who chose to dedicate their wealth and energy toward creating social change. Blending narrative storytelling with real-world insights, the book captures both the personal journeys of givers and the broader lessons on how philanthropy can shape communities and society at large.",
    image: "AIP/public/images/love-give.png",
    slug: "love-to-give",
    date: "2022-12-02 00:00:00",
  },
];

const page = async () => {
  return (
    <div className="~pt-[5rem]/[10rem] overflow-x-hidden min-h-screen">
      <div className="container mx-auto relative ~px-5/[7.5rem] pb-[7.5rem]">
        <div className="~px-5/flex ~pt-0/[1.25rem] gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="#"
            textTwo="Books"
            linkTwo="/resource-center/books"
          />
          <div className="max-w-[51.188rem] ~pt-[4.3rem]/[5rem] ~pb-[2.5rem]/[4rem]">
            <WordStaggerAnimation
              text="Books"
              className="font-playFair leading-[3.3rem] ~text-h4/[3rem] text-gray80"
            />
          </div>
        </div>

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
          {response?.map((item, i) => (
            <CardAnimation delay={0.1} key={i}>
              <ResourceCard
                linkKey={"books"}
                slug={item?.slug}
                key={i}
                src={item?.image}
                title={item?.title}
                desc={item?.description}
              />
            </CardAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
