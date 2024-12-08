import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import ResourceCard from "@/components/cards/ResourceCard";
import React from "react";

const datas = [
  {
    src: "/svg/resource-page/resource1.svg",
    name: "Karthik Muralidharan",
    title: "Wealth with Purpose",
    desc: "This report a collaborative effort between Accelerate India Philanthropy (AIP) and Boston Consulting Group (BCG) delves into the motivations, challenges, strategies and decision-making processes of UHNIs across various stages of philanthropy. We interviewed 100 UHNIs as part of a selective sample, ensuring diverse representation across net worth, geographical location, source of wealth and stage of giving.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    name: "Karthik Muralidharan",
    title: "Wealth with Purpose",
    desc: "A primary research report by AIP that presents a nationally representative view of the challenges that 65+ non-profits face in their journey to scale impact and recommends principles for philanthropists in supporting their grantees.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    name: "Karthik Muralidharan",
    title: "Wealth with Purpose",
    desc: "A monthly roundup from the world of philanthropy. In this edition, we introduce our five new Founders-Radhika and Kartik Bharat Ram, Rati Forbes, Mathew Cyriac, Pankaj Gupta, and Swati Apte and Alok Kshirsagar-whose expertise and shared passion for philanthropy brings remarkable value to our community",
    category: "Field",
  },
];
const Contribution = () => {
  return (
    <div className="~tw-pt-[5rem]/[2.5rem] container tw-mx-auto tw-flex tw-flex-col tw-items-center">
      <h2 className="~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem] ~tw-pb-0/[1.75rem] tw-text-center tw-font-playFair tw-text-gray80">
        <span className="tw-font-playFairItalic tw-text-textPurple">
          Selected
        </span>{" "}
        Works
      </h2>
      <div className="~tw-pt-[2.5rem]/[3.25rem] ~tw-pb-[2.5rem]/[5.75rem] tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 ~tw-gap-[2.5rem]/[4.5rem] ~tw-px-[1.25rem]/[8.125rem]">
        {datas.map((item, i) => (
          <ResourceCard
            key={i}
            src={item.src}
            title={item.title}
            name={item.name}
            desc={item.desc}
            category={item.category}
          />
        ))}
      </div>
      <ButtonAnimation className="">
        <OutlineButton
          text="See More"
          buttonClassName="tw-py-[0.75rem] tw-px-[1.75rem] tw-rounded-full"
          className="tw-text-h9Copy5 tw-leading-[1.225rem]"
        />
      </ButtonAnimation>
    </div>
  );
};

export default Contribution;
