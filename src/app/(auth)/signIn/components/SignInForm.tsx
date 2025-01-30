"use cliet";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSignInUserFormHandler } from "../hooks/useSignInFormHandler";

export const SignInForm = () => {
  const { handleSignInUser, errors, isPending, handleSubmit, register } =
    useSignInUserFormHandler();

  return (
    <form action="" onSubmit={handleSubmit(handleSignInUser)}>
      <Label htmlFor="email" className="text-sm font-medium">
        Email
      </Label>
      <Input
        type="email"
        id="email"
        {...register("email")}
        placeholder="jmcsjoaomarcos@gmail.com"
      />
      <Label htmlFor="email" className="text-red-600">
        {errors.email?.message}
      </Label>
      <br />
      <Label htmlFor="senha" className="text-sm font-medium">
        Senha
      </Label>
      <Input
        type="password"
        {...register("password")}
        id="senha"
        placeholder="JMCS2024"
      />
      <Label htmlFor="senha" className="text-red-600">
        {errors.password?.message}
      </Label>
      <br />
      <br />
      <Button
        type="submit"
        className="w-full
                        bg-yellow-600
                        text-base
                        hover:bg-yellow-700
                        shadow-inner"
      >
        {isPending ? (
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
        ) : (
          "Entrar"
        )}
      </Button>
    </form>
  );
};
