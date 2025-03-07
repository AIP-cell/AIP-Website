import React from "react";
import TabNews from "./TabNews";
// import RespNews from "./RespNews";
import { THomePageNews } from "@/api/type";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";

type Props = {
  newsData: THomePageNews;
  searchParams: string;
};
const News = ({ newsData, searchParams }: Props) => {
  return (
    <div className="flex container mx-auto flex-col justify-center ~pt-[5rem]/0  pb-[8.5rem]">
      <WordStaggerAnimation
        text="Latest
        <color> news and updates </color>"
        className="~text-h4/h2 font-playFair ~px-[1.25rem]/[14.375rem] text-midGray ~pb-[2rem]/[3.5rem] text-center ~leading-[2.6rem]/[3.3rem]"
      />
      <TabNews newsData={newsData} searchParams={searchParams} />
    </div>
  );
};

export default News;
