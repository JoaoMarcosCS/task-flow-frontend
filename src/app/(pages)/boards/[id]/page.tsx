/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";

import { routeGuard } from "@/middlewares/route-guard";
import { useParams, useRouter } from "next/navigation";
import { useBoardDetails } from "./hooks/useBoardData";
import { useUserStore } from "@/store/user.store";
import { RenderIf } from "@/components/commom/RenderIf";
import { CircleHelp, ListChecks, Loader2, Plus, Users } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RenderItems } from "@/components/commom/RenderItems";
import { TaskGeneric } from "../../tasks/components/TaskGeneric";
import { MemberGeneric } from "./components/MemberGeneric";
import { UpdateBoardCard } from "./components/cards/UpdateBoardCard";
import { CreateTaskForm } from "../../tasks/components/CreateTaskForm";

const BoardDetails = () => {
  const params = useParams();
  const { user } = useUserStore((state) => state);
  const { push } = useRouter();
  const userId = user?.id ?? 0;

  const { data, isLoading: isBoardLoading } = useBoardDetails({
    userId,
    boardId: Number(params.id),
  });

  const isAdmim =
    // respons?.board_users_roles?.some((board.board) => role.userId == userId) ?? false;
    data?.board_users_roles.some(
      (role) =>
        role.userId == userId && role.role.description == "administrador"
    );

  useEffect(() => {
    if (!isBoardLoading && !data?.board) {
      toast.error("Erro ao acessar a board");
      push("/boards");
    }
  }, [data, isBoardLoading, data?.board, push]);

  return (
    <div className="w-full flex flex-col">
      <RenderIf shouldRender={isBoardLoading}>
        <p className="flex gap-4">
          <Loader2 className="animate-spin" /> Estamos carregando suas
          informações
        </p>
      </RenderIf>
      <RenderIf shouldRender={!isBoardLoading}>
        <div>
          <p className="text-muted-foreground sm:text-start text-center">
            Você está na board:
          </p>
          <h1 className="font-bold text-3xl tracking-tight flex sm:justify-start justify-center gap-2 items-center text-center">
            {data?.board?.title}
            <RenderIf shouldRender={isAdmim}>
              {data?.board && <UpdateBoardCard board={data.board} />}
            </RenderIf>
          </h1>
          <p className="text-muted-foreground sm:text-start text-center">
            {data?.board?.description ?? "Sem descrição"}
          </p>
        </div>
        <Tabs defaultValue="tasks" className=" mt-4 ">
          <TabsList className="gap-4 bg-slate-200 sm:justify-start justify-center flex">
            <TabsTrigger className="gap-3" value="tasks">
              <ListChecks className="w-5 h-5" />
              <span className="hidden sm:flex">Tarefas</span>
            </TabsTrigger>
            <TabsTrigger className="" value="create-task">
              <Plus />
              <span className="hidden sm:flex">Criar</span>
            </TabsTrigger>
            <TabsTrigger className="gap-3" value="members">
              <Users className="w-5 h-5" />
              <span className="hidden sm:flex">Membros</span>
            </TabsTrigger>
            <TabsTrigger className="gap-3" value="details">
              <CircleHelp className="w-5 h-5" />
              <span className="hidden sm:flex">Detalhes</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tasks">
            <RenderItems
              empty="Nenhuma tarefa criada nesta board ainda :("
              items={data?.board?.tasks}
            >
              {(item) => <TaskGeneric task={item} />}
            </RenderItems>
          </TabsContent>
          <TabsContent value="create-task" className="">
            <div className="flex flex-col sm:items-start items-center  w-full mt-6">
              <h1 className="text-2xl">Crie uma tarefa!</h1>
              <br />
              <CreateTaskForm boardId={data?.board.id!} />
            </div>
          </TabsContent>
          <TabsContent value="members">
            <RenderItems
              empty="Nenhum membro adicionado ainda :("
              items={data?.board?.members}
            >
              {(item) => {
                const role = data?.board_users_roles?.find(
                  (role) => role.userId === item.id
                )?.role;

                return (
                  <MemberGeneric
                    member={{
                      ...item,
                      role: role ?? { id: 0, description: "Sem nível" },
                    }}
                  />
                );
              }}
            </RenderItems>
          </TabsContent>
          <TabsContent value="details">
            <div className="flex flex-wrap w-full flex-col gap-3 sm:ps-0   ps-3 text-start ">
              <h1 className="text-2xl">Nome: {data?.board.title}</h1>
              <h1 className=" text-xl">
                Descrição: {data?.board.description ?? "Sem descrição"}
              </h1>
              <h1 className="text-xl">
                Quantidade de membros: {data?.total_members}
              </h1>
              <h1 className="text-xl">
                Quantidade de tarefas: {data?.total_tasks}
              </h1>
            </div>
          </TabsContent>
        </Tabs>
      </RenderIf>
    </div>
  );
};

export default routeGuard(BoardDetails);
