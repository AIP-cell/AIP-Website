"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import cn from "@/utils/tailwind";
import PlusSvg from "@public/svg/faq/plus.svg";
import MinusSvg from "@public/svg/faq/minus.svg";
import Image from "next/image";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="tw-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "~tw-py-[1.25rem]/[1.75rem] tw-px-[1.25rem] tw-text-gray80 tw-flex tw-justify-between tw-w-full  items-center tw-text-h6M tw-font-inter tw-text-left transition-all data-[state=open]:tw-text-textPurple [&[data-state=open]>svg]:tw-rotate-180",
        className
      )}
      {...props}
    >
      {children}
      {/* <Image src={MinusSvg} alt="Minus Image" className="data-[state=open]:tw-hidden data-[state=closed]:tw-block tw-transition-transform tw-duration-200"/>
      <Image src={PlusSvg} alt="Plus Image" className="data-[state=open]:tw-block data-[state=closed]:tw-hidden tw-transition-transform tw-duration-200" /> */}
      <ChevronDownIcon className="tw-h-4 tw-w-4 tw-shrink-0 text-muted-foreground tw-transition-transform tw-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="tw-text-midGray tw-bg-bgGray5 tw-p-5  tw-rounded-t-[1.25rem] tw-font-inter tw-text-h9Copy5 tw-leading-[1.225rem] overflow-hidden data-[state=closed]:tw-animate-accordion-up data-[state=open]:tw-animate-accordion-down tw-transition-transform tw-duration-200"
    {...props}
  >
    <div className={cn("", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
