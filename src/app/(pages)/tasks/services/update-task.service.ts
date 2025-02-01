import { api } from "@/services/api";
import { UpdateTaskInterfaace } from "../interfaces/update-task.interface";
import { TaskRoutes } from "@/enums/task-routes";

const UpdateTask = async (data: UpdateTaskInterfaace) => {
  const response = await api.patch<boolean>(
    `${TaskRoutes.UPDATE_TASK}${data.taskId}`,
    data.body
  );

  console.log(JSON.stringify(response.data));
  return response.data;
};

export { UpdateTask };
