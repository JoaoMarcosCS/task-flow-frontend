import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUserDataByEmail } from "@/app/(pages)/user-home/hooks/useUserDataByEmail";
import { useAssignResponsible } from "../../hooks/useAssignResponsible";
import { Loader2 } from "lucide-react";
import { RenderIf } from "@/components/commom/RenderIf";

export const GetUserByEmailCard = ({
  boardId,
  taskId,
}: {
  boardId: number;
  taskId: number;
}) => {
  const [email, setEmail] = useState("");
  const [typing, setIsTypeing] = useState(false);

  const { data: user, isLoading } = useUserDataByEmail({ email });
  const { mutate, isPending } = useAssignResponsible();

  const handleAssign = () => {
    if (!user) return;

    console.log(`Userid: ${user.id}, task id: ${taskId}, boardid: ${boardId}`);
    mutate({
      userId: user.id,
      boardId,
      taskId,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex min-w-14 flex-col transition-all justify-center py-2 text-sm font-semibold items-center rounded-sm hover:text-amber-400">
          <p>+ Responsável</p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar responsável</DialogTitle>
          <DialogDescription>
            Digite o e-mail do membro da board para atribuir como responsável.
          </DialogDescription>
        </DialogHeader>

        <Input
          type="email"
          placeholder="Digite o e-mail..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsTypeing(true);
          }}
        />

        <RenderIf shouldRender={isLoading}>
          <RenderIf shouldRender={typing}>
            <p>
              <Loader2 className="animate-spin" /> Buscando usuário
            </p>
          </RenderIf>
        </RenderIf>

        <RenderIf shouldRender={!isLoading}>
          {user ? (
            <div className="flex flex-col items-center gap-2 mt-2">
              <p className="text-xl">Usuário encontrado: {user.name}</p>
              <Button onClick={handleAssign}>
                {isPending ? "Atribuindo..." : "Atribuir Responsável"}
              </Button>
            </div>
          ) : (
            <p className="text-red-500">Usuário não encontrado.</p>
          )}
        </RenderIf>
      </DialogContent>
    </Dialog>
  );
};
