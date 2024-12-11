"use client";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import cn from "@/utils/tailwind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type Props = {
  items: any;
};
const NormalLinks = ({ items }: Props) => {
  const pathname = usePathname();
  return (
    <div>
      <ButtonAnimation>
        <Link
          href={items.link}
          className={cn("md:text-gray80 text-h9Copy5 leading-[1.225rem]",{"font-bold":items.link == pathname})}
        >
          {items.name}
        </Link>
      </ButtonAnimation>
      {items.link == pathname && (
        <div className="hidden md:block h-[0.25rem]  w-full rounded-full bg-purple40"></div>
      )}
    </div>
  );
};

export default NormalLinks;
