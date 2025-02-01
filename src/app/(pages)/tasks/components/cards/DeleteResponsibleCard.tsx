import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleX, Loader2 } from "lucide-react";
import { RenderItems } from "@/components/commom/RenderItems";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { takeInitialLetter } from "@/utils/take-initial-letter";
import { useDeleteResponsible } from "../../hooks/useDeleteResponsible";

export const DeleteResponsibleCard = ({
  boardId,
  taskId,
  responsibles,
}: {
  responsibles?: [
    {
      name: string;
      email: string;
      id: number;
    }
  ];
  boardId: number;
  taskId: number;
}) => {
  const { mutate, isPending } = useDeleteResponsible();

  const handleDeleteResponsible = (userId: number) => {
    mutate({
      boardId,
      taskId,
      userId,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <p>- Responsável</p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Remover responsável</DialogTitle>
          <DialogDescription>
            Escolha um responsável para remover
          </DialogDescription>
        </DialogHeader>

        <div>
          <RenderItems
            empty="Nenhum responsável atribuido"
            items={responsibles}
          >
            {(responsible) => (
              <div className="shadow rounded-3xl px-3 p-4 bg-slate-100">
                <div className="flex flex-wrap flex-row justify-start gap-4 items-center">
                  <Avatar>
                    <AvatarFallback className="rounded-full bg-yellow-200">
                      {takeInitialLetter(responsible?.name ?? "")}
                    </AvatarFallback>
                  </Avatar>
                  <h1 className="text-lg">{responsible.name}</h1>
                  <Button
                    onClick={() => handleDeleteResponsible(responsible.id)}
                    disabled={isPending}
                  >
                    {isPending ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <CircleX />
                    )}
                  </Button>
                  <h1 className="w-full ps-3 text-left">{responsible.email}</h1>
                </div>
              </div>
            )}
          </RenderItems>
        </div>
      </DialogContent>
    </Dialog>
  );
};
