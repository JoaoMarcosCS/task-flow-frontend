"use client"

import { LogOut } from "lucide-react";

import { useSignOut } from "../hooks/useSignOut";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const SignOutDialog = () => {
  const { handleLogout } = useSignOut();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <LogOut />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja mesmo encerrar sua sessão?</AlertDialogTitle>
          <AlertDialogDescription>
            Você irá desolgar da sua conta. Caso queira ver suas tarefas, você
            terá que realizar o login novamente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-amber-400 text-white">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-400 text-white"
            onClick={handleLogout}
          >
            Sair
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
