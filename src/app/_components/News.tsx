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
    <div className="tw-flex container tw-mx-auto tw-flex-col tw-justify-center tw-items-center tw-pb-[8.5rem]">
      <div className="tw-text-h2 tw-font-playFair tw-px-[14.375rem] tw-text-midGray tw-pb-[3.5rem] tw-text-center tw-leading-[52.8px]">
        Get the latest <span className="tw-text-textPurple tw-font-playFairItalic">&nbsp;news and updates</span> on
        Accelerated India Philanthrophy
      </div>
      <div className="tw-bg-bgGray5 tw-flex tw-items-center tw-rounded-full tw-p-1">
        <BgButton
          className="tw-px-[2.5rem] tw-py-[0.75rem] tw-font-inter"
          text="Accelerate India Philanthropy"
        />
        <div className="tw-px-[2.5rem] tw-font-inter">AIP - Partners</div>
      </div>
      <div className="tw-pt-[2.5rem] tw-flex tw-gap-[1.25rem]">
        {newsData.map((items, i) => (
          <NewsCard key={i} src={items.src} text={items.text} />
        ))}
      </div>
    </div>
  );
};

export default News;
