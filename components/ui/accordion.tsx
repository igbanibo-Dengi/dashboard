"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AiOutlineCaretRight } from "react-icons/ai";

import { cn } from "@/lib/utils";

const NavAccordion = AccordionPrimitive.Root;

const NavAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-none ", className)}
    {...props}
  />
));
NavAccordionItem.displayName = "AccordionItem";

const NavAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center rounded-lg  px-3  py-4 font-medium justify-between transition-all data-[state=open]:bg-primary data-[state=open]:text-white [&[data-state=open]>svg]:rotate-90",
        className
      )}
      {...props}
    >
      {children}
      <AiOutlineCaretRight className="h-4 w-4 shrink-0 opacity-50 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
NavAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const NavAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="flex text-center pl-16 items-center p-2">{children}</div>
  </AccordionPrimitive.Content>
));
NavAccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  NavAccordion,
  NavAccordionItem,
  NavAccordionTrigger,
  NavAccordionContent,
};
