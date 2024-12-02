import BgButton from "@/components/buttons/BgButton";
import NewsCard from "@/components/cards/NewsCard";
import React from "react";
import TabNews from "./TabNews";
import RespNews from "./RespNews";

const News = () => {
  return (
    <div className="tw-flex container tw-mx-auto tw-flex-col tw-justify-center tw-pt-[5rem]  tw-pb-[8.5rem]">
      <div className="~tw-text-h4/h2 tw-font-playFair ~tw-px-[1.25rem]/[14.375rem] tw-text-midGray ~tw-pb-[2rem]/[3.5rem] tw-text-center ~tw-leading-[2.6rem]/[3.3rem]">
        Latest
        <span className="tw-text-textPurple tw-font-playFairItalic">
          &nbsp;news and updates
        </span>
      </div>
      <TabNews />
      <RespNews/>
    </div>
  );
};

export default News;
