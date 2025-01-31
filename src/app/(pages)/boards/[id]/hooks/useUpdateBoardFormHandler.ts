import { useForm } from "react-hook-form";
import {
  UpdateBoardProps,
  UpdateBoardSchema,
} from "../schemas/update-board.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateBoard } from "./useUpdateBoard";

export const useUpdateBoardFormHandler = (board: UpdateBoardProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateBoardProps>({
    resolver: zodResolver(UpdateBoardSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: board,
  });

  const { mutate, isPending } = useUpdateBoard();

  const handleUpdateBoard = (data: UpdateBoardProps) => {
    mutate({
      boardId: data.id,
      body: {
        description: data.description,
        title: data.title,
      },
    });
  };

  return {
    register,
    errors,
    handleSubmit,
    mutate,
    isPending,
    handleUpdateBoard,
  };
};
