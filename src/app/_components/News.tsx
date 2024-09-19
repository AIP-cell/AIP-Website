import BgButton from "@/components/buttons/BgButton";
import NewsCard from "@/components/cards/NewsCard";
import React from "react";
import TabNews from "./TabNews";

const News = () => {
  return (
    <div className="tw-flex container tw-mx-auto tw-flex-col tw-justify-center  tw-pb-[8.5rem]">
      <div className="~tw-text-h4/h2 tw-font-playFair ~tw-px-[1.25rem]/[14.375rem] tw-text-midGray tw-pb-[3.5rem] tw-text-center ~tw-leading-[2.6rem]/[3.3rem]">
        Get the latest
        <span className="tw-text-textPurple tw-font-playFairItalic">
          &nbsp;news and updates
        </span>
        on Accelerated India Philanthrophy
      </div>
      <TabNews />
    </div>
  );
};

export default News;
