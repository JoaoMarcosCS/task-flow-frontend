"use client";

import { routeGuard } from "@/middlewares/route-guard";
import { useUserStore } from "@/store/user.store";
import { useBoardsData } from "./hooks/useBoardsData";
import { RenderIf } from "@/components/commom/RenderIf";
import { RenderItems } from "@/components/commom/RenderItems";
import { BoardGeneric } from "./components/BoardGeneric";
import { Loader2 } from "lucide-react";

const Boards = () => {
  const { user } = useUserStore((state) => state);

  const userId = user?.id ?? 0;

  const { data, isLoading } = useBoardsData({ userId });

  return (
    <div className="w-full flex flex-col">
      <div>
        <h1 className="font-bold text-3xl tracking-tight sm:text-start text-center">
          Veja suas boards
        </h1>
        <p className="text-muted-foreground sm:text-start text-center">
          Escolha uma board para começar a criar suas tarefas!
        </p>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold sm:text-start text-center">Suas Boards</h1>
        <RenderIf shouldRender={isLoading}>
          <p className="flex gap-4">
            <Loader2 className="animate-spin" /> Estamos carregando suas
            informações
          </p>
        </RenderIf>
        <div className="mt-4">
          <RenderIf shouldRender={!isLoading}>
            <RenderItems empty="Nenhuma board encontrada" items={data}>
              {(item) => <BoardGeneric board={item} />}
            </RenderItems>
          </RenderIf>
        </div>
      </div>
    </div>
  );
};

export default routeGuard(Boards);
