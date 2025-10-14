"use client";
import CircleArrow from "@/components/svg/CircleArrow";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const pathname = usePathname();

  // show only on home page
  if (pathname !== "/") return null;
  return (
    <div className="~py-[0.5rem]/[0.75rem] bg-gradient-to-r flex w-screen from-[#F2CE6B] to-[#FF8A9D]">
      <div className=" text-black w-full ~text-h9Copy5/h9Copy4">
        <Marquee className=" relative z-40 ">
          <Link
            href={"/resource-center/books/love-to-give"}
            className="mx-[0.75rem] hover:underline "
          >
            AIP brings you Rashmi Bansal&apos;s latest book, &apos;Live to
            Give&apos; with 16 inspiring stories of Wealth with Purpose
          </Link>
          <CircleArrow className="size-[1.25rem]" />
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeComponent;
