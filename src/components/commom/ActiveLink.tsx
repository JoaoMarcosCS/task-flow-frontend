"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  tooltipText: string;
  directionTooltip: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
  orientation?: "col" | "row";
}

export const ActiveLink = ({
  href,
  tooltipText,
  children,
  directionTooltip,
  orientation = "row",
}: ActiveLinkProps) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={`flex flex-${orientation} gap-2 transition-all justify-center text-xs font-semibold items-center 
            rounded-sm hover:text-red-400 ${
              isActive ? "text-red-400" : ""
            }`}
          >
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent side={directionTooltip}>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
