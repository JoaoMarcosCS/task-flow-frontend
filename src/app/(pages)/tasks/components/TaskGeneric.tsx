/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import Link from "next/link";
import { TaskGenericInterface } from "../interfaces/task-generic.interface";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RenderIf } from "@/components/commom/RenderIf";
import { GetUserByEmailCard } from "./cards/getUserByEmail";
import { DeleteResponsibleCard } from "./cards/DeleteResponsibleCard";
import { useFinishTask } from "../hooks/useFinishTask";
import { useStatusData } from "../hooks/useStatusData";
import { UpdateTaskCard } from "./cards/UpdateTaskCard";
import { UpdateTaskProps } from "../schemas/update-task.schema";
import { DeleteTaskCard } from "./cards/DeleteTaskCard";

export const TaskGeneric = ({
  task,
  isAdmim,
  redirect = false,
  boardId,
}: {
  task: TaskGenericInterface;
  isAdmim: boolean;
  boardId?: number;
  redirect?: boolean;
}) => {
  const isFinish = task.status.description == "Finalizado";

  const { mutate } = useFinishTask();

  const { data: statusData } = useStatusData();

  const finishStatusId = statusData?.find(
    (status) => status.description === "Finalizado"
  )?.id;

  const updateTask: UpdateTaskProps = {
    boardId: boardId ?? 0,
    id: task.id,
    description: task.description,
    title: task.title,
  };

  const handleFinish = () => {
    mutate({
      taskId: task.id,
      body: {
        boardId: boardId!,
        statusId: finishStatusId!,
      },
    });
  };

  return (
    <div className="w-[350px] shadow px-4 py-6 bg-slate-100 rounded-md">
      <div className="flex justify-between">
        <p className="text-muted-foreground text-sm">
          {task?.status?.description ?? "Status não disponível"}
          {task?.board ? `, na board ${task.board.title}` : ""}
        </p>
        <RenderIf shouldRender={isAdmim}>
          <DeleteTaskCard boardId={boardId!} taskId={task.id} />
        </RenderIf>
      </div>

      <div className="flex flex-wrap flex-row items-end justify-between">
        <h1 className="text-xl font-semibold">{task.title}</h1>
        <p>Atualizado em {new Date(task.update_at).toLocaleDateString()}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-muted-foreground text-sm">
          {task.description ? task.description : "Sem descrição disponível"}
        </p>
      </div>

      <div className="flex flex-wrap justify-between mt-4">
        <div className="w-4/5">
          <p className="text-muted-foreground text-sm">
            Prioridade:{" "}
            {task?.priority?.description ?? "Prioridade não definida"}
          </p>
          <p className="text-muted-foreground text-sm">
            Responsável:{" "}
            {task.assignees?.length
              ? task.assignees.map((member, index) => (
                  <span key={index}>
                    {member.name.split(" ").slice(0, 2).join(" ")}
                    {index < task.assignees.length - 1 ? ", " : ""}
                  </span>
                ))
              : "Nenhum responsável"}
          </p>
        </div>
        <div className="w-1/5">
          <RenderIf shouldRender={isAdmim && !isFinish}>
            <UpdateTaskCard task={updateTask} />
          </RenderIf>
        </div>

        <div className="w-full flex justify-between items-center mt-5">
          <div>
            <RenderIf shouldRender={isAdmim && !isFinish}>
              <GetUserByEmailCard
                boardId={task.board?.id ?? 1}
                taskId={task.id}
              />
            </RenderIf>
          </div>
          <div>
            <RenderIf shouldRender={!isFinish && isAdmim}>
              <DeleteResponsibleCard
                boardId={task.board?.id ?? 1}
                taskId={task.id}
                responsibles={task.assignees}
              />
            </RenderIf>
          </div>
          <div>
            <RenderIf shouldRender={isAdmim && !isFinish}>
              <Button onClick={handleFinish}>Finalizar</Button>
            </RenderIf>
          </div>
        </div>
      </div>

      <RenderIf shouldRender={redirect}>
        <div className="flex justify-end pr-6">
          <Link href={`/boards/${task.board?.id}`}>
            <ChevronRight />
          </Link>
        </div>
      </RenderIf>
    </div>
  );
};
