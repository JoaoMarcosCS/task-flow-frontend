import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInProps, SignInSchema } from "../schemas/sign-in.schema";
import { useSignIn } from "../../hooks/useSignIn";

export const useSignInUserFormHandler = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<SignInProps>({
    resolver: zodResolver(SignInSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      email: "jmcsjoaomarcos@gmail.com",
      password: "jmcs",
    },
  });

  const { mutate, isSuccess, isError, isPending } = useSignIn();

  const handleSignInUser = (data: SignInProps) => {
    mutate(data);
  };

  return {
    register,
    errors,
    isSubmitting,
    isPending,
    handleSubmit,
    mutate,
    isSuccess,
    isError,
    handleSignInUser,
  };
};
