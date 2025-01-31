import { z } from "zod";

export const CreateTaskSchema = z.object({
  title: z
    .string()
    .min(3, { message: "O titulo precisa ter no mínimo 3 letras" }),

  description: z.string().optional(),

  priorityId: z.coerce
    .number({message: "Escolha uma prioridade para essa tarefa"})
    .min(1, { message: "Escolha uma prioridade para essa tarefa" }),
});

export type CreateTaskProps = z.infer<typeof CreateTaskSchema>;
