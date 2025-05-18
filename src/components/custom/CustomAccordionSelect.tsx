"use client";

import { usePathname } from "next/navigation";
import cn from "@/utils/tailwind";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../layout/FooterAccordian";
import Link from "next/link";

type Props = {
  ArrayData: {
    label?: string;
    id: string;
    link?: string;
    options?: { option: string; link: string }[];
  }[];
  accordionItemClassName?: string;
  accordionTriggerClassName?: string;
  setIsOpen?: (value: boolean) => void;
};
const CustomAccordionSelect = ({
  ArrayData,
  accordionItemClassName,
  accordionTriggerClassName,
  setIsOpen,
}: Props) => {
  const pathname = usePathname();
  let isPathname = "";
  if (pathname.startsWith("/about")) {
    isPathname = "about";
  } else if (pathname.startsWith("/people-of-aip")) {
    isPathname = "people-of-aip";
  } else if (pathname.startsWith("/our-work")) {
    isPathname = "our-work";
  } else if (pathname.startsWith("/resource-center")) {
    isPathname = "resource-center";
  } else if (pathname.startsWith("/careers")) {
    isPathname = "careers";
  } else if (pathname.startsWith("/contact")) {
    isPathname = "contact";
  }
  return (
    <Accordion type="single" collapsible className="w-full">
      {ArrayData.map((items, i) => (
        <AccordionItem
          key={i}
          value={items!.id}
          className={`${accordionItemClassName}`}
        >
          <AccordionTrigger
            className={cn(
              { "font-bold": isPathname == items.id },
              accordionTriggerClassName
            )}
          >
            {items.label}
          </AccordionTrigger>
          {items.options?.map((data, index) => (
            <Link
              href={data.link}
              onClick={() => {
                if (setIsOpen) setIsOpen(false);
              }}
              key={index}
            >
              <AccordionContent>{data.option}</AccordionContent>
            </Link>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordionSelect;
