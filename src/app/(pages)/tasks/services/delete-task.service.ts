import { TaskRoutes } from "@/enums/task-routes";
import { api } from "@/services/api";
import { DeleteTaskInterface } from "../interfaces/delete-task.interface";

const deleteTask = async (data: DeleteTaskInterface) => {
  const response = await api.delete<boolean>(
    `${TaskRoutes.DELETE_TASK}${data.taskId}`,
    { data: data.body }
  );

  return response.data;
};

export { deleteTask };
