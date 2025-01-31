import { z } from "zod";

export const UpdateBoardSchema = z.object({
  id: z.number().min(1),
  title: z
    .string()
    .min(3, { message: "O título precisa ter no mínimo 3 letras" })
    .optional(),

  description: z.string().optional(),
});

export type UpdateBoardProps = z.infer<typeof UpdateBoardSchema>;
