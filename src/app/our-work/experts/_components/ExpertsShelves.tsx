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
const ExpertsShelves = () => {
  return (
    <div className="tw-pt-[12.5rem] container tw-mx-auto tw-flex tw-flex-col tw-items-center">
      <h2 className="tw-text-h2 tw-leading-[3.3rem]  tw-text-center tw-font-playFair tw-text-gray80">
        From Experts’ Shelves
      </h2>
      <p className="tw-text-midGray tw-leading-[1.4rem] tw-pt-[1.25rem] tw-text-center tw-pb-[5rem]">
        A showcase of inspirational work done by collaborators in our network
      </p>
      <div className="  tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-[4.5rem] tw-px-[8.125rem]">
        {datas.map((item, i) => (
          <ResourceCard
            key={i}
            src={item.src}
            title={item.title}
            desc={item.desc}
            category={item.category}
          />
        ))}
      </div>
      <div className="tw-pt-[5rem] tw-pb-[7.5rem]">
        <BgButton text="See All" className="tw-py-[0.75rem] tw-px-[1.75rem]" />
      </div>
    </div>
  );
};

export default ExpertsShelves;
