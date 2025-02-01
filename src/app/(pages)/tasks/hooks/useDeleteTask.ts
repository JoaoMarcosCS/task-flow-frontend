import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getApiMessageError } from "@/utils/get-api-message-error";
import { deleteTask } from "../services/delete-task.service";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: deleteTask,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["board-details"],
      });
      toast.success("Tarefa excluída!");
    },
    onError: (error: AxiosError) => {
      toast.error(`Usuário não pertence a board`);
      console.log(getApiMessageError(error));
    },
  });

  return mutate;
}
