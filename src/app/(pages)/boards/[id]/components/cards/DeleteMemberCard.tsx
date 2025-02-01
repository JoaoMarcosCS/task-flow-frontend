"use client";

import { Delete } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDeleteMember } from "../../hooks/useDeleteMember";

export const DeleteMemberCard = ({
  userId,
  boardId,
}: {
  userId: number;
  boardId: number;
}) => {
  const { mutate } = useDeleteMember();

  const handleDelete = () => {
    mutate({
      boardId,
      userId,
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <Delete/>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Deseja mesmo remover o membro da board?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-amber-400 text-white">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-400 text-white"
            onClick={handleDelete}
          >
            Remover
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
