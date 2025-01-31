import { useUserStore } from "@/store/user.store";
import { signInService } from "../services/sign-in.service";
import { addTokenToHeader } from "@/utils/add-token-to-header";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { FetchTokenResponse } from "../interfaces/fetch-token-response.interface";
import { jwtDecode } from "jwt-decode";
import { TokenPayload } from "../interfaces/token-payload.interface";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getApiMessageError } from "@/utils/get-api-message-error";
import Cookies from "js-cookie";

export function useSignIn() {
  const { updateUser } = useUserStore();

  const { push } = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mutate = useMutation({
    mutationFn: signInService,

    onSuccess: (data: FetchTokenResponse) => {
      if (isMounted) {
        const decodedToken = jwtDecode<TokenPayload>(data.accessToken!);

        const { name, email, userId } = decodedToken;

        updateUser({
          accessToken: data.accessToken,
          email: email,
          name: name,
          id: userId,
        });

        addTokenToHeader(data.accessToken!);

        Cookies.set("auth_token", data.accessToken!, { expires: 1 });
        Cookies.set("user_id", userId.toString(), { expires: 1 });

        toast.info(`Bem-vindo ${name}`);

        push("/");
      }
    },
    onError: (error: AxiosError) => {
      toast.error(`${getApiMessageError(error)}`);
      console.log("error: ", JSON.stringify(error.response?.data));
    },
  });

  return mutate;
}
