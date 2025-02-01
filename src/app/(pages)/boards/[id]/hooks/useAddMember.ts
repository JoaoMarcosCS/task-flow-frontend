import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getApiMessageError } from "@/utils/get-api-message-error";
import { addMember } from "../services/add-member.service";

export function useAddMember() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: addMember,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board-details"] });
      toast.success("Membro adicionado");
    },
    onError: (error: AxiosError) => {
      toast.error(`${getApiMessageError(error)}`);
    },
  });

  return mutate;
}
