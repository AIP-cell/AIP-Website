"use client";
import { StorageUrl } from "@/utils/BaseUrl";
import cn from "@/utils/tailwind";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  text: string;
  index: number;
  linkOrFile?: string;
  fileLink?: string;
  file?: string;
};

const NewsCard = ({ src, text, linkOrFile, fileLink, file, index }: Props) => {
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
  }, [text]);

  let link;
  if (linkOrFile) {
    link = linkOrFile === "pdf" ? StorageUrl + file : fileLink;
  }

  return (
    <div className="flex flex-col w-full gap-[1.25rem] shrink-0 grow-0">
      <div className="relative w-full ~h-[14.8rem]/[22.5rem] rounded-2xl overflow-hidden">
        <Link href={link ?? ""} target="_blank">
          <Image
            src={src ? StorageUrl + src : "/images/news/newsDemo.png"}
            alt="news-image"
            fill
            className="object-cover"
          />
        </Link>
      </div>
      <div>
        <div
          ref={textRef}
          className={cn(
            "font-inter ~text-h9Copy5/h8Copy3 ~leading-[1.225rem]/[1.575rem] text-ellipsis",
            {
              "line-clamp-6": isClamped && currentIndex !== index,
              "line-clamp-none": currentIndex === index,
            }
          )}
        >
          <Link href={link ?? ""} target="_blank">
            {text}
          </Link>
        </div>
        {isClamped && (
          <button
            onClick={() => toggle(index)}
            className="text-darkPurple mt-2"
          >
            {currentIndex === index ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
