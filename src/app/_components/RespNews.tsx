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
    <div className="pl-[1.25rem] pr-[1.25rem] block xl:hidden">
      <NewsRespSelect
        selected={selected}
        setSelected={setSelected}
        optionsArray={newsData}
        ListboxButtonClassName="!bg-[#E9E6F280] !border-none !rounded-full !pl-[1.75rem] !pr-[1.25rem]"
        selectedClassName=" !text-darkPurple !text-h9Copy4"
      />
      <CarouselRespNews/>
    </div>
  );
};

export default RespNews;
