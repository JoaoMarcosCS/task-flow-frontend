"use client";

import { ClipboardList, House, ListChecks } from "lucide-react";
import { ActiveLink } from "../ActiveLink";
import { SignOutDialog } from "@/app/(auth)/components/SignOutDialog";
import { useUserStore } from "@/store/user.store";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { takeInitialLetter } from "@/utils/take-initial-letter";
import { CreateBoardCard } from "@/app/(pages)/boards/components/cards/CreateBoardCard";

export const SideBar = () => {
  const { user } = useUserStore((state) => state);
  return (
    <div className="h-screen flex max-sm:hidden fixed flex-col justify-center items-center ">
      <div className="">
        <h1 className="text-yellow-400 font-semibold text-3xl fixed top-0 ms-4 left-0 mt-2">
          TaskFlow
        </h1>
      </div>
      <div className="rounded-full shadow-md py-6 w-14 gap-10 flex flex-col ms-10 bg-slate-100">
        <ActiveLink
          directionTooltip="right"
          href="/user-home"
          tooltipText="Home"
        >
          <House />
        </ActiveLink>

        <ActiveLink
          directionTooltip="right"
          href="/boards"
          tooltipText="Boards"
        >
          <ClipboardList />
        </ActiveLink>
    
        <CreateBoardCard />

        <ActiveLink
          directionTooltip="right"
          href="/tasks"
          tooltipText="Tarefas"
        >
          <ListChecks />
        </ActiveLink>

        <ActiveLink
          directionTooltip="right"
          href="/profile"
          tooltipText="Perfil"
        >
          <Avatar>
            <AvatarFallback className="rounded-full bg-yellow-400">
              {takeInitialLetter(user?.name ?? "")}
            </AvatarFallback>
          </Avatar>
        </ActiveLink>

        <SignOutDialog />
      </div>
    </div>
  );
};
