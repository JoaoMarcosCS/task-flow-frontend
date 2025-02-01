import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignResponsible } from "../services/assign-responsible.service";

export function useAssignResponsible() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: assignResponsible,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["board-details"],
      });
      toast.success("Responsável atribuído!");
    },
    onError: () => {
      toast.error(`Usuário não pertence a board`);
    },
  });

  return mutate;
}
