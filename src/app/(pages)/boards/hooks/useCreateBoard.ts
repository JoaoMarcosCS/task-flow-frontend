import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getApiMessageError } from "@/utils/get-api-message-error";
import { createBoard } from "../services/create-board.service";

export function useCreateBoard() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: createBoard,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-boards"] });
      toast.success("Board criada com sucesso!");
    },
    onError: (error: AxiosError) => {
      toast.error(`${getApiMessageError(error)}`);
    },
  });

  return mutate;
}
