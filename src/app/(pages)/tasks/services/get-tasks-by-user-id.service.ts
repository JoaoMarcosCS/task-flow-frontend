import { TaskRoutes } from "@/enums/task-routes";
import { api } from "@/services/api";
import { TasksGenericInterface } from "../interfaces/task-generic.interface";

const getTasksByUserId = async ({ userId }: { userId: number }) => {
  const response = await api.get<TasksGenericInterface>(
    `${TaskRoutes.GET_TASKS_BY_USER_ID}${userId}`
  );

  return response.data.tasks;
};

export { getTasksByUserId };
