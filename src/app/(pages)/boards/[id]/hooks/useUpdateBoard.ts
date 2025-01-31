import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBoard } from "../services/update-board.service";
import { AxiosError } from "axios";
import { getApiMessageError } from "@/utils/get-api-message-error";

export function useUpdateBoard() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: updateBoard,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board-details"] });
      toast.success("Informações alteradas com sucesso");
    },
    onError: (error: AxiosError) => {
      toast.error(`${getApiMessageError(error)}`);
    },
  });

  return mutate;
}
