import { TaskRoutes } from "@/enums/task-routes";
import { api } from "@/services/api";
import { FinishTaskInterface } from "../interfaces/finish-task.interface";

const finishTask = async (data: FinishTaskInterface) => {
  
  const response = await api.patch<boolean>(
    `${TaskRoutes.UPDATE_TASK}${data.taskId}`,
    data.body
  );

  return response.data;
};

export { finishTask };
