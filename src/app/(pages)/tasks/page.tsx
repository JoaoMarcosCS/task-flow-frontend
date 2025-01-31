"use client";

import { routeGuard } from "@/middlewares/route-guard";
import { useUserStore } from "@/store/user.store";
import { useTasksData } from "./hooks/useTasksData";
import { RenderIf } from "@/components/commom/RenderIf";
import { RenderItems } from "@/components/commom/RenderItems";
import { Loader2 } from "lucide-react";
import { TaskGeneric } from "./components/TaskGeneric";

const Tasks = () => {
  const { user } = useUserStore((state) => state);

  const userId = user?.id ?? 0;

  const { data, isLoading } = useTasksData({ userId });

  return (
    <div className="w-full flex flex-col">
      <div className="mt-6">
        <h1 className="text-2xl font-semibold sm:text-start text-center">
          Suas Tarefas
        </h1>
        <p className="text-muted-foreground sm:text-start text-center">
          Veja suas tarefas, por qual você vai começar?
        </p>
        <RenderIf shouldRender={isLoading}>
          <p className="flex gap-4">
            <Loader2 className="animate-spin" /> Estamos carregando suas
            informações
          </p>
        </RenderIf>
        <div className="mt-4">
          <RenderIf shouldRender={!isLoading}>
            <RenderItems empty="Nenhuma tarefa encontrada" items={data}>
              {(item) => <TaskGeneric task={item} />}
            </RenderItems>
          </RenderIf>
        </div>
      </div>
    </div>
  );
};

export default routeGuard(Tasks);
