import { Pen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UpdateTaskForm } from "../forms/UpdateTaskForm";

interface UpdateTaskInterface {
  boardId: number;
  id: number;
  description?: string;
  title?: string;
}

export const UpdateTaskCard = ({ task }: { task: UpdateTaskInterface }) => {
  const { title, description, id, boardId } = task;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <Pen />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar informações da board</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <UpdateTaskForm
          title={title}
          description={description}
          id={id}
          boardId={boardId}
        />
      </DialogContent>
    </Dialog>
  );
};
