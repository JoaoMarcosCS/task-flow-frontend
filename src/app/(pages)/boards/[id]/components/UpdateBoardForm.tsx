"use cliet";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUpdateBoardFormHandler } from "../hooks/useUpdateBoardFormHandler";
import { UpdateBoardProps } from "../schemas/update-board.schema";

export const UpdateBoardForm = (board: UpdateBoardProps) => {
  const { handleUpdateBoard, errors, isPending, handleSubmit, register } =
    useUpdateBoardFormHandler(board);

  return (
    <form action="" onSubmit={handleSubmit(handleUpdateBoard)}>
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
          "Atualizar"
        )}
      </Button>
    </form>
  );
};
