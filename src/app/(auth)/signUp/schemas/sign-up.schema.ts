import { z } from "zod";

export const SignUpSchema = z.object({
  email: z
    .string({
      required_error: "Email obrigatório",
    })
    .email("Insira um email válido"),

  password: z.string().min(4, "A senha deve ter no mínimo 4 caracteres"),
  name: z
    .string({ required_error: "Nome obrigatório" })
    .min(3, "A senha deve ter no mínimo 4 caracteres"),
});

export type SignUpProps = z.infer<typeof SignUpSchema>;
