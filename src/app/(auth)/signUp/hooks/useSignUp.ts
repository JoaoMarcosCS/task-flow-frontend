import { toast } from "sonner";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { getApiMessageError } from "@/utils/get-api-message-error";
import { signUpService } from "../services/sign-up.service";

export function useSignUp() {
  const { push } = useRouter();

  const mutate = useMutation({
    mutationFn: signUpService,

    onSuccess: () => {
      toast.info(`Cadastro realizado!`);

      push("/signIn");
    },
    onError: (error: AxiosError) => {
      toast.error(`${getApiMessageError(error)}`);
      console.log("error: ", JSON.stringify(error.response?.data));
    },
  });

  return mutate;
}
