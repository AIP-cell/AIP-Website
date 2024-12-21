// import BgButton from "@/components/buttons/BgButton";
// import NewsCard from "@/components/cards/NewsCard";
import React from "react";
import TabNews from "./TabNews";
import RespNews from "./RespNews";
import { THomePageNews } from "@/api/type";

type Props = {
  newsData: THomePageNews;
  searchParams: { category: string };
};
const News = ({ newsData, searchParams }: Props) => {
  console.log("searchParams::::", searchParams.category);
  return (
    <div className="flex container mx-auto flex-col justify-center ~pt-[5rem]/0  pb-[8.5rem]">
      <div className="~text-h4/h2 font-playFair ~px-[1.25rem]/[14.375rem] text-midGray ~pb-[2rem]/[3.5rem] text-center ~leading-[2.6rem]/[3.3rem]">
        Latest
        <span className="text-textPurple font-playFairItalic">
          &nbsp;news and updates
        </span>
      </div>
      <TabNews newsData={newsData} searchParams={searchParams.category} />
      {/* <RespNews/> */}
    </div>
  );
};

export default News;
