"use client"
import React, { useState } from "react";
import NewsRespSelect from "./NewsRespSelect";
// import CarouselNews from "./CarouselNews";
import CarouselRespNews from "./CarouselRespNews";

const newsData = [
  "About AIP",
  "Partners",
  "In the Media",
  "World of Philanthropy",
];
const RespNews = () => {
  const [selected, setSelected] = useState(newsData?.at(0));
  return (
    <div className="tw-pl-[1.25rem] tw-pr-[1.25rem] tw-block lg:tw-hidden">
      <NewsRespSelect
        selected={selected}
        setSelected={setSelected}
        optionsArray={newsData}
        ListboxButtonClassName="!tw-bg-[#E9E6F280] !tw-border-none !tw-rounded-full !tw-pl-[1.75rem] !tw-pr-[1.25rem]"
        selectedClassName=" !tw-text-darkPurple !tw-text-h9Copy4"
      />
      <CarouselRespNews/>
    </div>
  );
};

export default RespNews;
