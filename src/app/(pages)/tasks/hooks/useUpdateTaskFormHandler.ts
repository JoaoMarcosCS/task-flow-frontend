import { useForm } from "react-hook-form";
import {
  UpdateTaskProps,
  UpdateTaskSchema,
} from "../schemas/update-task.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateTask } from "./useUpdateTask";

export const useUpdateTaskFormHandler = (task: UpdateTaskProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateTaskProps>({
    resolver: zodResolver(UpdateTaskSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: task,
  });

  const { mutate, isPending } = useUpdateTask();

  const handleUpdateTask = (data: UpdateTaskProps) => {
    mutate({
      taskId: data.id,
      body: {
        description: data.description,
        title: data.title,
        boardId: data.boardId
      },
    });
  };

  return {
    register,
    errors,
    handleSubmit,
    mutate,
    isPending,
    handleUpdateTask,
  };
};
