import BgButton from "@/components/buttons/BgButton";
import NewsCard from "@/components/cards/NewsCard";
import React from "react";

const newsData = [
  {
    src: "/images/news/newsDemo.png",
    text: "An ugam is a starting point from where river begins.",
  },
  {
    src: "/images/news/newsDemo.png",
    text: "An ugam is a starting point from where river begins.",
  },
  {
    src: "/images/news/newsDemo.png",
    text: "An ugam is a starting point from where river begins.",
  },
];

const News = () => {
  return (
    <div className="flex container mx-auto flex-col justify-center items-center pb-[8.5rem]">
      <div className="text-h2Heading2 px-[14.375rem] text-midGray pb-[3.5rem] text-center leading-[52.8px]">
        Get the latest <i className="text-textPurple">news and updates</i> on
        Accelerated India Philanthrophy
      </div>
      <div className="bg-bgGray5 flex items-center rounded-full p-1">
        <BgButton
          className="px-[2.5rem] py-[0.75rem] font-inter"
          text="Accelerate India Philanthropy"
        />
        <div className="px-[2.5rem] font-inter">AIP - Partners</div>
      </div>
      <div className="pt-[2.5rem] flex gap-[1.25rem]">
        {newsData.map((items, i) => (
          <NewsCard key={i} src={items.src} text={items.text} />
        ))}
      </div>
    </div>
  );
};

export default News;
