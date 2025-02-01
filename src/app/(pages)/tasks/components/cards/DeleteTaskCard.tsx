"use client";

import { Trash } from "lucide-react";
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
import { useDeleteTask } from "../../hooks/useDeleteTask";

export const DeleteTaskCard = ({
  taskId,
  boardId,
}: {
  taskId: number;
  boardId: number;
}) => {
  const { mutate } = useDeleteTask();

  const handleDelete = () => {
    mutate({
      taskId,
      body: {
        boardId,
      },
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <Trash />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja mesmo excluir essa tarefa?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-amber-400 text-white">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-400 text-white"
            onClick={handleDelete}
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
