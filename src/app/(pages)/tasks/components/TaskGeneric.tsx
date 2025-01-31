import Link from "next/link";
import { TaskGenericInterface } from "../interfaces/task-generic.interface";
import { Pen } from "lucide-react";

export const TaskGeneric = ({ task }: { task: TaskGenericInterface }) => {
  return (
    <div className="w-[350px] shadow px-4 py-6 bg-slate-100 rounded-md">
      <div>
        <p className="text-muted-foreground text-sm">
          {task?.status?.description ?? "Status não disponível"}, na board{" "}
          {task?.board?.title ?? "Sem board"}
        </p>
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
        <div>
          <p className="text-muted-foreground text-sm">
            Prioridade:{" "}
            {task?.priority?.description ?? "Prioridade não definida"}
          </p>
          <p className="text-muted-foreground text-sm">
            {task.assignees?.length
              ? task.assignees.map((member, index) => (
                  <span key={index}>
                    Responsável: {member.name.split(" ").slice(0, 2).join(" ")}
                    {index < task.assignees.length - 1 ? ", " : ""}
                  </span>
                ))
              : "Nenhum responsável"}
          </p>
        </div>
        <div>
          <Link href={"/"}>
            <p>
              <Pen />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
