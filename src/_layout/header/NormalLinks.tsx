"use client";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
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
          className="md:tw-text-gray80 tw-text-h9Copy5 tw-leading-[1.225rem]"
        >
          {items.name}
        </Link>
      </ButtonAnimation>
      {items.link == pathname && (
        <div className="tw-hidden md:tw-block tw-h-[0.25rem]  tw-w-full tw-rounded-full tw-bg-purple40"></div>
      )}
    </div>
  );
};

export default NormalLinks;
