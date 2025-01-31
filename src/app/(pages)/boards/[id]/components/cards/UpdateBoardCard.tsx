import { Pen } from "lucide-react";
import { BoardDetailsInterface } from "../../interfaces/board-details.interface";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UpdateBoardForm } from "../UpdateBoardForm";

export const UpdateBoardCard = ({
  board,
}: {
  board: BoardDetailsInterface;
}) => {
  const { title, description, id } = board;

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
        <UpdateBoardForm title={title} description={description} id={id}/>
      </DialogContent>
    </Dialog>
  );
};
