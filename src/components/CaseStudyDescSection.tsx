"use client";
import cn from "@/utils/tailwind";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  desc?: string;
  index: number;
};
const CaseStudyDescSection = ({ desc, index }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const toggle = (index: number) => {
    if (index === currentIndex) {
      setCurrentIndex(null);
    } else setCurrentIndex(index);
  };

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      const computedStyle = getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const actualLines = Math.ceil(element.offsetHeight / lineHeight);
      setIsClamped(actualLines > 6); // Check if the text exceeds 6 lines
    }
  }, [desc]);
  return (
    <div>
      <div
        ref={textRef}
        className={cn(
          "text-midGray ~pt-[1rem]/[1.25rem] ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-ellipsis",
          {
            "line-clamp-6": isClamped && currentIndex !== index,
            "line-clamp-none": currentIndex === index,
          }
        )}
      >
        {desc}
      </div>
      {isClamped && (
        <button onClick={() => toggle(index)} className="text-darkPurple mt-2">
          {currentIndex === index ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default CaseStudyDescSection;
