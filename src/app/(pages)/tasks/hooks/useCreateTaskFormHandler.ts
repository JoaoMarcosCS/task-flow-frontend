import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateTaskProps,
  CreateTaskSchema,
} from "../schemas/create-task.schema";
import { useCreateTask } from "./useCreateTask";
import { usePrioritiesData } from "./usePrioritiesData";

export const useCreateTaskFormHandler = (boardId: number) => {
  const { data: priorities, isLoading: isPrioritiesLoading } =
    usePrioritiesData();

  const defaultPriorityId = priorities?.find(
    (priority) => priority.description === "Baixa"
  )?.id;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateTaskProps>({
    resolver: zodResolver(CreateTaskSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      priorityId: defaultPriorityId
    },
  });

  const { mutate, isPending } = useCreateTask();

  const handleUpdateBoard = (data: CreateTaskProps) => {
    mutate({
      title: data.title,
      description: data.description,
      boardId,
      priorityId: data.priorityId,
    });
  };

  return {
    register,
    errors,
    handleSubmit,
    priorities,
    isPrioritiesLoading,
    mutate,
    isPending,
    handleUpdateBoard,
  };
};
