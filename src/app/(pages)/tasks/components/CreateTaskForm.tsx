/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
"use cliet";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCreateTaskFormHandler } from "../hooks/useCreateTaskFormHandler";
import { RenderIf } from "@/components/commom/RenderIf";

export const CreateTaskForm = ({ boardId }: { boardId: number }) => {
  const {
    handleUpdateBoard,
    errors,
    isPending,
    handleSubmit,
    register,
    priorities,
    isPrioritiesLoading,
  } = useCreateTaskFormHandler(boardId);

  return (
    <form action="" onSubmit={handleSubmit(handleUpdateBoard)} className="w-[300px]">
      <RenderIf shouldRender={isPrioritiesLoading}>
        <p className="flex gap-4">
          <Loader2 className="animate-spin" /> Estamos carregando suas
          informações
        </p>
      </RenderIf>
      <RenderIf shouldRender={!isPrioritiesLoading}>
        <Label htmlFor="titulo" className="text-sm font-medium">
          Título
        </Label>
        <Input
          type="text"
          id="titulo"
          {...register("title")}
          placeholder="Fazer comida"
        />
        <Label htmlFor="name" className="text-red-600">
          {errors.title?.message}
        </Label>
        <br />
        <Label htmlFor="descricao" className="text-sm font-medium">
          Descrição
        </Label>
        <Input
          type="text"
          id="descricao"
          {...register("description")}
          placeholder="Fritar hamburguer"
        />
        <br />
        <div className="flex flex-col mt-4 gap-2">
          <Label htmlFor="">Prioridade escolhida</Label>
          <select
            id="prioridade"
            {...register("priorityId", { valueAsNumber: true })}
            className="shadow p-2 border border-emerald-100 rounded"
          >
            <option value="">Selecione uma prioridade</option>
            {priorities!?.length > 0 ? (
              priorities?.map((priority) => (
                <option key={priority.id} value={priority.id}>
                  {priority.description}
                </option>
              ))
            ) : (
              <option disabled>Nenhuma prioidade escolhida</option>
            )}
          </select>
          <Label htmlFor="prioridade" className="text-red-600">
            {errors.priorityId?.message}
          </Label>
        </div>
        <br />
        <br />
        <Button
          type="submit"
          className="w-full
                        bg-yellow-600
                        text-base
                        hover:bg-yellow-700
                        shadow-inner"
        >
          {isPending ? (
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
          ) : (
            "Criar"
          )}
        </Button>
      </RenderIf>
    </form>
  );
};
