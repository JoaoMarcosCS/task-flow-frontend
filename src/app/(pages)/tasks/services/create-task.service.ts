import { TaskRoutes } from "@/enums/task-routes";
import { api } from "@/services/api";
import { CreateTaskInterface } from "../interfaces/create-task.interface";

const createTask = async (body: CreateTaskInterface) => {
  const response = await api.post<boolean>(`${TaskRoutes.CREATE_TASK}`, body);

  return response.data;

  
};

export { createTask };
