/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
"use cliet";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCreateBoardFormHandler } from "../../hooks/useCreateBoardFormHandler";

export const CreateBoardForm = () => {
  const { handleCreateBoard, errors, isPending, handleSubmit, register } =
    useCreateBoardFormHandler();

  return (
    <form
      action=""
      onSubmit={handleSubmit(handleCreateBoard)}
      className="w-[300px]"
    >
      <Label htmlFor="titulo" className="text-sm font-medium">
        Título
      </Label>
      <Input
        type="text"
        id="titulo"
        {...register("title")}
        placeholder="Tarefas diárias"
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
    </form>
  );
};
