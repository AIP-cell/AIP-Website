"use client";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import useClient from "@/hooks/useClient";
import cn from "@/utils/tailwind";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  desc: string;
  index: number;
};
const removeInlineStyles = (html: string) => {
  return html.replace(/\s*style="[^"]*"/gi, "");
};

const OpenRoleDescSection = ({ desc, index }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const cleanedDescription = removeInlineStyles(desc || "");
  const client = useClient();
  if (!client) {
    return;
  }
  const toggle = (index: number) => {
    if (index >= 0) {
      if (index === currentIndex) {
        setCurrentIndex(null);
      } else setCurrentIndex(index);
    }
  };
  return (
    <div className="relative">
      <div
        className={cn(
          "py-4 ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] font-inter text-midGray h-[10rem] overflow-hidden",
          {
            "h-auto": currentIndex === index,
          }
        )}
        dangerouslySetInnerHTML={{ __html: cleanedDescription }}
      ></div>
      <div
        className={cn(
          "block absolute bg-gradient-to-b via-transparent from-transparent to-bgLightPeach z-[1] inset-0 size-full",
          {
            hidden: currentIndex === index,
          }
        )}
      ></div>
      {currentIndex !== index && (
        <span className="absolute bottom-[-0.8rem] left-0 text-darkPurple z-10">
          ...{""}
          <ButtonAnimation
            onClick={() => toggle(index)}
            className="inline text-darkPurple ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] font-semibold"
          >
            read more
          </ButtonAnimation>
        </span>
      )}
      {currentIndex === index && (
        <ButtonAnimation
          onClick={() => toggle(index)}
          className="text-darkPurple ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] font-semibold"
        >
          show less
        </ButtonAnimation>
      )}
    </div>
  );
};

export default OpenRoleDescSection;
