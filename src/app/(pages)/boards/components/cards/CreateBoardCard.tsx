import { CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateBoardForm } from "../forms/CreateBoardForm";

export const CreateBoardCard = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <CirclePlus />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar board</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CreateBoardForm />
      </DialogContent>
    </Dialog>
  );
};
