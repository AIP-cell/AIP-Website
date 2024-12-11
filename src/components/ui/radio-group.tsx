"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import cn from "@/utils/tailwind";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "tw-aspect-square tw-h-4 tw-w-4  tw-border-primary tw-text-primary tw-shadow focus:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring disabled:tw-cursor-not-allowed disabled:tw-opacity-50 tw-size-[0.833rem] tw-border-2 tw-border-gray80 tw-rounded-sm tw-flex tw-justify-center tw-items-center",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="tw-flex tw-items-center tw-justify-center">
        {/* <DotFilledIcon className="tw-h-3.5 tw-w-3.5 tw-fill-primary" /> */}
        <div className="tw-size-[0.45rem] tw-bg-gray80 tw-rounded-md"></div>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
