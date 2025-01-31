import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getApiMessageError } from "@/utils/get-api-message-error";
import { createTask } from "../services/create-task.service";

export function useCreateTask() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: createTask,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board-details"] });
      toast.success("Tarefa criada com sucesso!");
    },
    onError: (error: AxiosError) => {
      toast.error(`${getApiMessageError(error)}`);
    },
  });

  return mutate;
}
