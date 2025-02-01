import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getApiMessageError } from "@/utils/get-api-message-error";
import { UpdateTask } from "../services/update-task.service";

export function useUpdateTask() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: UpdateTask,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["board-details"],
      });
      toast.success("Tarefa alterada!");
    },
    onError: (error: AxiosError) => {
      toast.error(`Não conseguimos alterar sua tarefa`);
      console.log(getApiMessageError(error));
    },
  });

  return mutate;
}
