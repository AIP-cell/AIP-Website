"use client";
import CrossSvg from "@/components/svg/CrossSvg";
import React, { useState } from "react";

type Props = {
  tagArray: string[];
};
const Tags = ({ tagArray }: Props) => {
  const [tag, setTag] = useState(tagArray);
  const removeTag = (index: number) => {
    setTag((prevTags) => prevTags.filter((_, i) => i !== index));
  };
  return (
    <>
      <p className="text-h9Copy5 leading-[1.225rem] pt-[0.75rem]">Tags</p>
      <div className="flex flex-wrap ~gap-[1rem]/[1.25rem]">
        {tag.map((tag, i) => (
          <button
            key={i}
            className="bg-purple10 py-[0.75rem] px-[1rem] rounded-full flex gap-[0.5rem] items-center"
          >
            <p className="text-h9Copy5 leading-[1.225rem]">{tag}</p>
            <CrossSvg
              onClick={() => removeTag(i)}
              className=" cursor-pointer size-[1rem]"
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default Tags;
