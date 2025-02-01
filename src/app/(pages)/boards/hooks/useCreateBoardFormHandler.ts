import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateBoardProps,
  CreateBoardSchema,
} from "../schemas/create-board.schema";
import { useCreateBoard } from "./useCreateBoard";
import { useUserStore } from "@/store/user.store";

export const useCreateBoardFormHandler = () => {
  const { user } = useUserStore((state) => state);
  const userId = user?.id ?? 0;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateBoardProps>({
    resolver: zodResolver(CreateBoardSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  const { mutate, isPending } = useCreateBoard();

  const handleCreateBoard = (data: CreateBoardProps) => {
    mutate({
      title: data.title,
      description: data.description,
      memberAdminId: userId,
    });
  };

  return {
    register,
    errors,
    handleSubmit,
    mutate,
    isPending,
    handleCreateBoard,
  };
};
