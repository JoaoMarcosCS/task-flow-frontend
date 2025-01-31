"use client";

import { House, CirclePlus, ClipboardList, ListChecks } from "lucide-react";
import { ActiveLink } from "../ActiveLink";
import { useUserStore } from "@/store/user.store";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { takeInitialLetter } from "@/utils/take-initial-letter";

export const FooterBar = () => {
  const { user } = useUserStore((state) => state);

  return (
    <nav className="w-full justify-center mb-5 fixed bottom-0 items-center z-50  max-sm:flex hidden">
      <ul className="flex justify-between items-center w-11/12 py-1 px-3 shadow rounded-full border-t-2 border-slate-200 bg-slate-100">
        <ActiveLink directionTooltip="top" href="/user-home" tooltipText="Home">
          <House />
        </ActiveLink>

        <ActiveLink directionTooltip="top" href="/boards" tooltipText="Boards">
          <ClipboardList />
        </ActiveLink>

        <ActiveLink
          directionTooltip="top"
          href="/boards/new"
          tooltipText="Criar board"
        >
          <CirclePlus />
        </ActiveLink>

        <ActiveLink directionTooltip="top" href="/tasks" tooltipText="Tarefas">
          <ListChecks />
        </ActiveLink>

        <ActiveLink directionTooltip="top" href="/profile" tooltipText="Perfil">
          <Avatar>
            <AvatarFallback className="rounded-full bg-yellow-400">
              {takeInitialLetter(user?.name ?? "")}
            </AvatarFallback>
          </Avatar>
        </ActiveLink>
      </ul>
    </nav>
  );
};
