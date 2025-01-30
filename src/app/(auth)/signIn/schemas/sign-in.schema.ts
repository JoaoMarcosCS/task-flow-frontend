import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string({
      required_error: "Email obrigatório",
    })
    .email("Insira um email válido"),

  password: z.string().min(4, "A senha deve ter no mínimo 4 caracteres"),
});

export type SignInProps = z.infer<typeof SignInSchema>;
