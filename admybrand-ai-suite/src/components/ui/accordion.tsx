"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-blue-600"
      >
        <span className="font-medium text-gray-900">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  type = "single",
  className,
}) => {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    if (type === "single") {
      setOpenItems(openItems.has(index) ? new Set() : new Set([index]));
    } else {
      const newOpenItems = new Set(openItems);
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
      setOpenItems(newOpenItems);
    }
  };

  return (
    <div className={cn("divide-y divide-gray-200", className)}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          return React.cloneElement(child, {
            isOpen: openItems.has(index),
            onToggle: () => toggleItem(index),
          });
        }
        return child;
      })}
    </div>
  );
};

export { Accordion, AccordionItem };