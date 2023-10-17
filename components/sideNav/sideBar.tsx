"use client";

import React from "react";

import {
  NavAccordion,
  NavAccordionContent,
  NavAccordionItem,
  NavAccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Bike, ChefHat, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

const iconMapping: Record<string, React.ReactElement> = {
  Dashboard: <LayoutDashboard strokeWidth={1} />,
  Resturant: <ChefHat strokeWidth={1} />,
  Drivers: <Bike strokeWidth={1} />,
};

const accordionData = [
  {
    title: "Dashboard",
    links: [
      { text: "Food Order", href: "/foodorder" },
      { text: "Food Menu", href: "https://www.example.com/link1.2" },
      { text: "Message", href: "https://www.example.com/link1.3" },
      { text: "Order History", href: "https://www.example.com/link1.4" },
      { text: "Notification", href: "https://www.example.com/link1.5" },
      { text: "Bill", href: "https://www.example.com/link1.5" },
      { text: "Setting", href: "https://www.example.com/link1.7" },
    ],
  },
  {
    title: "Resturant",
    links: [
      { text: "Link 2.1", href: "https://www.example.com/link2.1" },
      { text: "Link 2.2", href: "https://www.example.com/link2.2" },
    ],
  },
  {
    title: "Drivers",
    links: [
      { text: "Link 3.1", href: "https://www.example.com/link3.1" },
      { text: "Link 3.2", href: "https://www.example.com/link3.2" },
    ],
  },
];

const SideBar = ({ isHidden }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={
        isHidden
          ? "hidden"
          : "py-5 px-5 w-[300px] border-r h-[100%] overflow-y-auto pt-20 absolute md:relative z-10 bg-background"
      } // className="py-5 px-5 w-[300px] border-r h-[100%] overflow-y-auto pt-20"
    >
      <NavAccordion type="single" collapsible>
        {accordionData.map((accordion, index) => (
          <NavAccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="flex flex-col"
          >
            <NavAccordionTrigger>
              <span className="flex gap-4">
                {iconMapping[accordion.title]}
                <p className="">{accordion.title}</p>
              </span>
            </NavAccordionTrigger>
            {accordion.links.map((link, linkIndex) => (
              <NavAccordionContent
                key={linkIndex}
                className="cursor-pointer group w-full"
              >
                <Separator className="border border-primary w-[6px] group-hover:w-[25px] transition-all duration-500 mr-2" />
                <Link href={link.href} className="group-hover:text-primary">
                  {link.text}
                </Link>
              </NavAccordionContent>
            ))}
          </NavAccordionItem>
        ))}
      </NavAccordion>
      <p className="text-primary py-5"> Other Apps</p>
      <NavAccordion type="single" collapsible>
        {accordionData.map((accordion, index) => (
          <NavAccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="flex flex-col"
          >
            <NavAccordionTrigger>
              <span className="flex gap-4">
                {iconMapping[accordion.title]}
                {/* Dynamic icon based on title */}
                <p className="">{accordion.title}</p>
              </span>
            </NavAccordionTrigger>
            {accordion.links.map((link, linkIndex) => (
              <NavAccordionContent
                key={linkIndex}
                className="cursor-pointer group w-full"
              >
                <Separator className="border border-primary w-[6px] group-hover:w-[25px] transition-all duration-500 mr-2" />
                <Link href={link.href} className="group-hover:text-primary">
                  {link.text}
                </Link>
              </NavAccordionContent>
            ))}
          </NavAccordionItem>
        ))}
      </NavAccordion>
    </motion.div>
  );
};

export default SideBar;
