import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { BoardGenericInterface } from "../interfaces/board-generic.interface";

export const BoardGeneric = ({ board }: { board: BoardGenericInterface }) => {
  return (
    <div className="w-[350px] shadow px-4 py-6 bg-slate-100 rounded-md">
      <div>
        <h1 className="text-xl font-semibold">{board.title}</h1>
        <p>Atualizado em {new Date(board.updated_at).toLocaleDateString()}</p>
      </div>
      <div>
        <div className="flex flex-wrap justify-between">
          <div>
            <p className="text-muted-foreground text-sm">
              {board.total_tasks} tarefa(s)
            </p>
            <p className="text-muted-foreground text-sm">
              {board.total_members} membro(s)
            </p>
          </div>
          <div>
            <Link href={`/boards/${board.id}`}>
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
