import { TaskRoutes } from "@/enums/task-routes";
import { api } from "@/services/api";
import { Status } from "../interfaces/status.interface";

const getStatus = async () => {
  const response = await api.get<Status[]>(`${TaskRoutes.GET_STATUS}`);

  return response.data;
};

export { getStatus };
