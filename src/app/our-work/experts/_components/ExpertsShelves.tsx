import { TSelectedWorks } from "@/api/type";
import BgButton from "@/components/buttons/BgButton";
import ResourceCard from "@/components/cards/ResourceCard";
import React from "react";

const datas = [
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose- a report on Indian Philanthropy",
    desc: "This report a collaborative effort between Accelerate India Philanthropy (AIP) and Boston Consulting Group (BCG) delves into the motivations, challenges, strategies and decision-making processes of UHNIs across various stages of philanthropy. We interviewed 100 UHNIs as part of a selective sample, ensuring diverse representation across net worth, geographical location, source of wealth and stage of giving.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Getting Non-profits in India Scale Ready",
    desc: "A primary research report by AIP that presents a nationally representative view of the challenges that 65+ non-profits face in their journey to scale impact and recommends principles for philanthropists in supporting their grantees.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Enabling Good Vol 11",
    desc: "A monthly roundup from the world of philanthropy. In this edition, we introduce our five new Founders-Radhika and Kartik Bharat Ram, Rati Forbes, Mathew Cyriac, Pankaj Gupta, and Swati Apte and Alok Kshirsagar-whose expertise and shared passion for philanthropy brings remarkable value to our community",
    category: "Field",
  },
];
type Props = {
  expertShelves: TSelectedWorks[];
};
const ExpertsShelves = ({ expertShelves }: Props) => {
  return (
    <div className="~pt-[7rem]/[12.5rem] container mx-auto flex flex-col items-center">
      <h2 className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem]  text-center font-playFair text-gray80">
        From Experts’ Shelves
      </h2>
      <p className="text-midGray px-[2.8rem] ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] ~pt-[0.75rem]/[1.25rem] text-center ~pb-[2.5rem]/[5rem]">
        A showcase of inspirational work done by collaborators in our network
      </p>
      <div className="  grid md:grid-cols-2 lg:grid-cols-3 ~gap-[2.5rem]/[4.5rem] ~px-[1.25rem]/[8.125rem]">
        {expertShelves.map((item, i) => (
          <ResourceCard
            link={item.slug}
            key={i}
            src={item.image}
            title={item.title}
            desc={item.description}
            category={item.category}
          />
        ))}
      </div>
      <div className="~pt-[2.5rem]/[5rem] ~pb-[5rem]/[7.5rem]">
        <BgButton text="See All" className="py-[0.75rem] px-[1.75rem]" />
      </div>
    </div>
  );
};

export default ExpertsShelves;
