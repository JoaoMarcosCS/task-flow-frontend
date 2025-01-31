import { TaskRoutes } from "@/enums/task-routes";
import { api } from "@/services/api";
import { Priority } from "../interfaces/priority.interface";

const getPriorities = async () => {
  const response = await api.get<Priority[]>(`${TaskRoutes.GET_PRIORITIES}`);

  return response.data;
};

export { getPriorities };
