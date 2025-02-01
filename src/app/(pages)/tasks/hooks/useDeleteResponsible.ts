import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResponsible } from "../services/delete-responsible.service";
import { AxiosError } from "axios";
import { getApiMessageError } from "@/utils/get-api-message-error";

export function useDeleteResponsible() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: deleteResponsible,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["board-details"],
      });
      toast.success("Responsável removido!");
    },
    onError: (error: AxiosError) => {
      toast.error(`Usuário não pertence a board`);
      console.log(getApiMessageError(error));
    },
  });

  return mutate;
}
