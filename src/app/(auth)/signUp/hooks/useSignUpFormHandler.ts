import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInProps } from "../../signIn/schemas/sign-in.schema";
import { SignUpProps, SignUpSchema } from "../schemas/sign-up.schema";
import { useSignUp } from "./useSignUp";

export const useSignUpUserFormHandler = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<SignUpProps>({
    resolver: zodResolver(SignUpSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  const { mutate, isSuccess, isError, isPending } = useSignUp();

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
