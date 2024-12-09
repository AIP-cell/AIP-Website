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
    className={cn("tw-border-b-[1.7px] tw-border-white/30", className)}
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
        "tw-py-[1rem]  tw-text-white tw-flex tw-justify-between tw-w-full  items-center tw-text-h9Copy5 tw-leading-[1.225rem] tw-font-inter tw-text-left transition-all  [&[data-state=open]>svg]:tw-rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="tw-size-[1.375rem] tw-shrink-0 text-muted-foreground tw-transition-transform tw-duration-200" />
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
    className="tw-text-white tw-py-[0.8rem] tw-text-h9Copy5 tw-leading-[1.225rem] overflow-hidden tw-transition-transform tw-duration-200"
    {...props}
  >
    <div className={cn("", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
