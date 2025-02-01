import { TaskRoutes } from "@/enums/task-routes";
import { api } from "@/services/api";
import { DeleteResponsibleInterface } from "../interfaces/delete-responsible.interface";

const deleteResponsible = async (body: DeleteResponsibleInterface) => {
  const response = await api.post<boolean>(`${TaskRoutes.DELETE_RESPONSIBLE}`, body);

  return response.data;
};

export { deleteResponsible };
