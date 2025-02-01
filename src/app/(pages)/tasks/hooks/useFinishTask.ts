import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getApiMessageError } from "@/utils/get-api-message-error";
import { finishTask } from "../services/finish-task.service";

export function useFinishTask() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: finishTask,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["board-details"],
      });
      toast.success("Tarefa concluída!");
    },
    onError: (error: AxiosError) => {
      toast.error(`Não conseguimos concluir sua tarefa`);
      console.log(getApiMessageError(error));
    },
  });

  return mutate;
}
