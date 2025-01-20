"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import cn from "@/utils/tailwind";

import Image from "next/image";
import PlusSvg from "../svg/PlusSvg";
import MinusSvg from "../svg/MinusSvg";

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
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "~py-[1.25rem]/[1.75rem] px-[1.25rem] text-gray80 flex justify-between w-full  items-center text-h6M font-inter text-left transition-all data-[state=open]:text-textPurple [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      {/* <Image src={MinusSvg} alt="Minus Image" className="data-[state=open]:hidden data-[state=closed]:block transition-transform duration-200"/>
      <Image src={PlusSvg} alt="Plus Image" className="data-[state=open]:block data-[state=closed]:hidden transition-transform duration-200" /> */}
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionTriggerFaq = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group ~py-[1.25rem]/[1.75rem] px-[1.25rem] text-gray80 flex justify-between w-full  items-center text-h6M font-inter text-left transition-all data-[state=open]:text-textPurple [&[data-state=open]>svg]:rotate-180 ",
        className
      )}
      {...props}
    >
      {children}
      {/* <Image src={MinusSvg} alt="Minus Image" className="data-[state=open]:hidden data-[state=closed]:block transition-transform duration-200"/> */}
      <PlusSvg className="h-4 w-4 block group-data-[state=open]:hidden text-muted-foreground  transition-transform duration-200" />
      <MinusSvg className="h-4 w-4 hidden group-data-[state=open]:block text-muted-foreground  transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTriggerFaq.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="text-midGray bg-bgGray5 p-5  rounded-t-[1.25rem] font-inter text-h9Copy5 leading-[1.225rem] overflow-hidden  transition-transform duration-200"
    {...props}
  >
    <div className={cn("", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerFaq,
  AccordionContent,
};
