import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getApiMessageError } from "@/utils/get-api-message-error";
import { deleteMember } from "../services/delete-member.service";

export function useDeleteMember() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: deleteMember,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board-details"] });
      toast.success("Membro removido");
    },
    onError: (error: AxiosError) => {
      toast.error(`${getApiMessageError(error)}`);
    },
  });

  return mutate;
}
