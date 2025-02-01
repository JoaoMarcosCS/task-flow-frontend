"use client";

import { routeGuard } from "@/middlewares/route-guard";
import { useUserStore } from "@/store/user.store";
import { useBoardsData } from "./hooks/useBoardsData";
import { RenderIf } from "@/components/commom/RenderIf";
import { RenderItems } from "@/components/commom/RenderItems";
import { Loader2 } from "lucide-react";
import { useTasksData } from "../tasks/hooks/useTasksData";
import { TaskGeneric } from "../tasks/components/TaskGeneric";
import { BoardGeneric } from "../boards/components/BoardGeneric";

const UserHome = () => {
  const { user } = useUserStore((state) => state);

  const userId = user?.id ?? 0;

  const { data: boardsData, isLoading: isBoardsLoading } = useBoardsData({
    userId,
  });

  const { data: tasksData, isLoading: isTasksLoading } = useTasksData({
    userId,
  });

  return (
    <div className="w-full flex flex-col">
      <div>
        <h1 className="font-bold text-3xl tracking-tight sm:text-start text-center">
          Seja bem-vindo, {user?.name}
        </h1>
        <p className="text-muted-foreground sm:text-start text-center">
          Acompanhe suas tarefas, boards e membros
        </p>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold sm:text-start text-center">
          Suas Boards
        </h1>
        <RenderIf shouldRender={isBoardsLoading}>
          <p className="flex gap-4">
            <Loader2 className="animate-spin" /> Estamos carregando suas
            informações
          </p>
        </RenderIf>
        <div className="mt-4">
          <RenderIf shouldRender={!isBoardsLoading}>
            <RenderItems empty="Nenhuma board encontrada" items={boardsData}>
              {(item) => <BoardGeneric board={item} />}
            </RenderItems>
          </RenderIf>
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold sm:text-start text-center">
          Suas tarefas
        </h1>
        <p className="text-muted-foreground sm:text-start text-center">
          Veja suas tarefas, por qual você vai começar?
        </p>
        <RenderIf shouldRender={isTasksLoading}>
          <p className="flex gap-4">
            <Loader2 className="animate-spin" /> Estamos carregando suas
            informações
          </p>
        </RenderIf>
        <div className="mt-4">
          <RenderIf shouldRender={!isTasksLoading}>
            <RenderItems empty="Nenhuma tarefa encontrada" items={tasksData}>
              {(item) => <TaskGeneric task={item} isAdmim={false} redirect />}
            </RenderItems>
          </RenderIf>
        </div>
      </div>
    </div>
  );
};

export default routeGuard(UserHome);
