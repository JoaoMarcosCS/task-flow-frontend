import { z } from "zod";

export const CreateBoardSchema = z.object({
  title: z
    .string()
    .min(3, { message: "O titulo precisa ter no mínimo 3 letras" }),

  description: z.string().optional(),
});

export type CreateBoardProps = z.infer<typeof CreateBoardSchema>;
