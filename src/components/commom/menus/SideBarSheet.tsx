"use client";

import { CirclePlus, ClipboardList, House, ListChecks } from "lucide-react";
import { ActiveLink } from "../ActiveLink";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useUserStore } from "@/store/user.store";

export const SideBarSheet = () => {
  const { user } = useUserStore((state) => state);
  return (
    <nav className="z-50">
      <div className="flex flex-row items-center gap-1">
        <Avatar>
          <AvatarFallback className="rounded-full bg-yellow-400">
            {user?.name ?? ""}
          </AvatarFallback>
        </Avatar>

        <p className="font-medium text-base">{}</p>
      </div>
      <Separator orientation="horizontal" className="bg-red-400 mt-1" />
      <ul className="flex justify-start gap-2 mt-2 w-full items-start flex-col ">
        <li className="flex flex-row items-center ">
          <ActiveLink
            directionTooltip="right"
            href="/user-home"
            tooltipText="Home"
          >
            <House />
          </ActiveLink>
        </li>

        <li className="flex flex-row items-center ">
          <ActiveLink
            directionTooltip="right"
            href="/boards"
            tooltipText="Boards"
          >
            <ClipboardList />
          </ActiveLink>
        </li>

        <li className="flex flex-row items-center ">
          <ActiveLink
            directionTooltip="right"
            href="/boards/new"
            tooltipText="Criar board"
          >
            <CirclePlus />
          </ActiveLink>
        </li>

        <li className="flex flex-row items-center ">
          <ActiveLink
            directionTooltip="right"
            href="/tasks"
            tooltipText="Tarefas"
          >
            <ListChecks />
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};
